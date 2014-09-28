(ns wishare.core
  (:require [quiescent :as q :include-macros true]
            [quiescent.dom :as d]
            [wishare.wishlist :as wishlist]
            [wishare.friends :as friends]
            [wishare.profile :as profile]
            [wishare.timeline :as timeline]))


(defn dashboard
  [tabs]
  (let [config (map vec (partition 2 tabs))
        tabs (map first config)
        config (reduce conj {} config)]
    (q/component
     (fn [mode {:keys [active items]}]
       (let [heading (d/div
                      {:className "panel-heading"}
                      (apply d/ul {:className "nav nav-pills nav-justified"
                                   :role"tablist"}
                             (for [tab tabs
                                   :let [{:keys [title modes]} (config tab)]
                                   :when (modes mode)]
                               (if (= tab active)
                                 (d/li {:className "active"} (d/a {} title))
                                 (d/li {} (d/a {:href "#"} title))))))
             comp (get-in config [active :comp])
             available-modes (get-in config [active :modes])]
         (if (available-modes mode)
           (d/div {:className "col-md-8 dashboard"}
                  (comp mode heading items))
           (throw (str "Tab " active " is not available in mode " mode "!"))))))))


(q/defcomponent STUB
  [& whatever]
  (d/div {} "STUB!"))


(q/defcomponent Page
  "Typical page with header, dashboard and timeline"
  [header-comp dashboard-comp timeline-comp
   mode {:keys [header dashboard timeline] :as data}]
  (d/div
   {:className "container"}
   ;; header
   (header-comp mode header)
   (d/div
    {:className "content col-md-12 panel panel-default"}
    ;; dashboard
    (dashboard-comp mode dashboard)
    ;; timeline
    (timeline-comp mode timeline))))


(def ProfilePage
  (partial Page
           profile/UserHeader
           (dashboard [:wishlist {:comp wishlist/Wishlist
                                  :title "Wishlist"
                                  :modes #{:my-own :readonly :friend}}
                       :friends {:comp friends/FriendList
                                 :title "Friends"
                                 :modes #{:my-own :friend}}])
           timeline/Timeline))


(defn ^:export renderProfile
  []
  (let [frs {:active :friends
             :items [{:real-name "John Dowe"
                      :login "jd"
                      :id 100}
                     {:real-name "Moe"
                      :login "moe"
                      :id 101}]}

        wss {:active :wishlist
             :items [{:title "PipBoy 3K"
                      :id 1
                      :image "http://www.fordesigner.com/imguploads/Image/cjbc/zcool/png20080526/1211811605.png"}
                     {:title "Tesla"
                      :id 2
                      :image "http://ev-cars.ru/sites/default/files/styles/icon-64x64/public/gallery/2012/12/04/2013-Tesla-Model-S-front-1.jpg"}]}

        fake {:header {:name "Vault Boy"
                       :nickname "vault_boy"
                       :avatar "http://www.g0l.ru/imgs/avatars/263.jpg"}
              :dashboard (get {:w wss
                               :f frs} :w)
              :timeline [{:title "Wish the PipBoy 3K"
                          :timestamp "5 min"}
                         {:title "Gifted a bramin"
                          :timestamp "30 days"}
                         {:title "Gifted a health kit"
                          :timestamp "1 day"}]}]
    (q/render (ProfilePage :my-own fake)
              (.getElementById js/document "root"))))
