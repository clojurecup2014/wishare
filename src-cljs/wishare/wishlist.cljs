(ns wishare.wishlist
  (:require [quiescent :as q :include-macros true]
            [quiescent.dom :as d]))


(defn add-wish!
  [state]
  (swap! state assoc :dashboard {:active :add-wish}))

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
  [items heading mode state]
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
                              :className "btn btn-default btn-block add-wish"
                              :onClick #(add-wish! state)}
                             "Add Wish Item"))))
          ;; items
          (let [item (case mode
                       :readonly ROWish
                       :my-own MyWish
                       FriendWish)]
            (map item items)))))


(q/defcomponent AddWish
  "Form for adding of wishes"
  [{:keys [id title description url photo-url] :or {id nil}}
   heading mode state]
  (d/div
   {:className "panel panel-default edit-item"}
   heading
   (d/div {:className "panel-heading"}
          (d/h2 {:className "panel-title"}
                "Add/Edit a Wish"))
   (d/div
    {:className "panel-body"}
    ;; field fabric
    (letfn [(labeled [label placeholder name el attrs]
              (let [id (str name "-input")]
                (d/div {:className "form-group"}
                       (d/label {:for id} label)
                       (el (assoc attrs
                             :className "form-control"
                             :name name
                             :id id
                             :placeholder placeholder)))))]
      (d/form
       {:role "form"
        :id "add-wish-form"}
       (labeled "Title" "Enter title" "title"
                d/input {:type "text" :required true})
       (labeled "Description" "Enter description" "description"
                d/textarea {:row 3 :required true})
       (labeled "URL" "Enter URL" "url" d/input {:type "url"})
       (labeled "Photo URL" "Enter URL for photo" "photo" d/input {:type "url"})
       (d/input
        {:type "button" :className "btn btn-primary" :value "Submit"
         :onClick (fn []
                    (let [data (js/FormData. (.getElementById
                                              js/document "add-wish-form"))]
                      ;; (let [get-val (fn [id] (.-value (.getElementById
                      ;;                                 js/document id)))
                      ;;       submit {:from :add-wish
                      ;;               :route (if (nil? id) "item" (str "item/" id))
                      ;;               :data {:title (get-val "title-input")
                      ;;                      :description (get-val "description-input")
                      ;;                      :url (get-val "url-input")
                      ;;                      :photo-url (get-val "photo-input")}}])
                      (swap! state assoc :submit
                             {:route (if (nil? id) "item" (str "item/" id))
                              :data data})))}))))))
