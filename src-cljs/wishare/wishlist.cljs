(ns wishare.wishlist
  (:require [quiescent :as q :include-macros true]
            [quiescent.dom :as d]))


(defn Wish
  "Wishlist item prototype"
  [extension]
  (q/component
   (fn [data]
     (let [[{:keys [id title image]} & elems] (extension data)]
       (apply d/li {:className "list-group-item wish-item"}
              (d/img {:className "img-thumbnail photo image32x32"
                      :src (or image "/img/nophoto.png")
                      :alt "Wish image thumbnail"})
              (if id
                (d/a {:href "#" :className "title"} title)
                (d/span {} title))
              elems)))))


(def ROWish
  "Read-only wish"
  (Wish (fn [data]
          [(dissoc data :id)])))


(def MyWish
  "Current user's wish"
  (letfn [(btn [cls text]
            (d/button {:className (str "btn badge btn-default " cls)
                       :type "button"}
                      (d/span {:className "glyphicon glyphicon-edit"})
                      text))]
    (Wish (fn [data]
            [data
             (btn "edit" "Edit")
             (btn "remove" "Remove")]))))


(def FriendWish
  "Friend's wish"
  (letfn [(badge [badges id cls icon title]
            (d/span {:className (str "badge gifted " cls
                                     (if (badges id) " alert-success" ""))
                     :rel "tooltip"
                     :data-toggle "tooltip"
                     :title title}
                    (d/span {:className (str "glyphicon glyphicon-" icon)})))]
    (Wish (fn [{:keys [badges] :as data}]
            [data
             (let [b (or badges #{})]
               (d/div {:className "badges pull-right"}
                      (badge b :gifted "gifted" "gift" "Gifted!!!")
                      (badge b :got-it "got-it" "ok" "I've got it!")
                      (badge b :in-progress "in-progress" "shopping-cart" "In porgress...")
                      (badge b :in-tought "in-thought" "question-sign" "Thinking...")))]))))


(q/defcomponent Wishlist
  "Wishlist"
  [items heading mode]
  (d/div
   {:className "panel panel-default wishlist"}
   heading
   (apply (partial
           d/ul
           {:className "wishlist list-group"}
           ;; "add wish" button
           (when (= mode :my-own)
             (d/li {:className "list-group-item add-wish"}
                   (d/button {:type "button"
                              :className "btn btn-default btn-block add-wish"}
                             "Add Wish Item"))))
          ;; items
          (let [item (case mode
                       :readonly ROWish
                       :my-own MyWish
                       FriendWish)]
            (map item items)))))
