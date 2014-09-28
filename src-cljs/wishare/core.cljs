(ns wishare.core
  (:require [quiescent :as q :include-macros true]
            [quiescent.dom :as d]
            [wishare.wishlist :as wishlist]
            [wishare.friends :as friends]
            [wishare.profile :as profile]))


(defn dashboard
  [inner]
  (q/component
   (fn [readonly? data]
     (let [heading (d/div
                    {:className "panel-heading"}
                    (d/ul {:className "nav nav-pills nav-justified"
                           :role"tablist"}
                          (d/li {:className "active"}
                                "Wishlist")))]
       (d/div {:className "col-md-8 dashboard"}
              (inner heading readonly? data))))))


(q/defcomponent STUB
  [& whatever]
  (d/div {} "STUB!"))


(q/defcomponent Page
  "Typical page with header, dashboard and timeline"
  [header-comp dashboard-comp timeline-comp
   readonly?
   {:keys [header dashboard timeline] :as data}]
  (d/div
   {:className "container"}
   ;; header
   (header-comp readonly? header)
   (d/div
    {:className "content col-md-12 panel panel-default"}
    ;; dashboard
    (dashboard-comp readonly? dashboard)
    ;; timeline
    (timeline-comp readonly? timeline))))


(def ProfilePage (partial Page
                          profile/UserHeader
                          (dashboard wishlist/Wishlist)
                          STUB))


(defn ^:export renderProfile
  []
  (let [fake {:header {:name "Vault Boy"
                       :nickname "vault_boy"
                       :avatar "http://www.g0l.ru/imgs/avatars/263.jpg"}
              :dashboard {:my-own? true
                          :items [{:title "iPhone6"
                                   :id 1
                                   :image "http://www.fordesigner.com/imguploads/Image/cjbc/zcool/png20080526/1211811605.png"}
                                  {:title "Tesla"
                                   :id 2
                                   :image "http://ev-cars.ru/sites/default/files/styles/icon-64x64/public/gallery/2012/12/04/2013-Tesla-Model-S-front-1.jpg"}]}}]
    (q/render (ProfilePage false ;; readonly flag!
                           fake)
              (.getElementById js/document "root"))))
