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
            (d/button {:className (str "btn badge " cls)
                       :type "button"}
                      (d/span {:className "glyphicon glyphicon-edit"})
                      text))]
    (Wish (fn [data]
            [data
             (btn "edit" "Edit")
             (btn "remove" "Remove")]))))


(def FriendWish
  "Friend's wish"
  (Wish (fn [data] [data])))


(q/defcomponent Wishlist
  "Wishlist"
  [heading readonly?
   {:keys [items my-own?] :or {my-own? false}}]
  (d/div
   {:className "panel panel-default wishlist"}
   heading
   (apply (partial
           d/ul
           {:className "wishlist list-group"}
           ;; "add wish" button
           (when-not readonly?
             (when my-own?
               (d/li {:className "list-group-item add-wish"}
                     (d/button {:type "button"
                                :className "btn btn-default btn-block add-wish"}
                               "Add Wish Item")))))
    ;; items
    (let [item (cond readonly? ROWish
                     my-own? MyWish
                     :else FriendWish)]
      (map item items)))))
