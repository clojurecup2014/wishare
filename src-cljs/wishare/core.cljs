(ns wishare.core
  (:require [quiescent :as q :include-macros true]
            [quiescent.dom :as d]
            [ajax.core :as ajax :refer [GET POST]]
            [wishare.wishlist :as wishlist]
            [wishare.friends :as friends]
            [wishare.profile :as profile]
            [wishare.timeline :as timeline]))


;; ------------------------------ local state -------------------------------------
(def state
  (atom {}
   ;; {:flag false
   ;;  :mode :friend
   ;;  :header {:name "Vault Boy"
   ;;           :nickname "vault_boy"
   ;;           :avatar "http://www.g0l.ru/imgs/avatars/263.jpg"}
   ;;  :dashboard {:active :wishlist
   ;;              :items [{:title "PipBoy 3K"
   ;;                       :id 1
   ;;                       :badges #{:gifted :got-it}}
   ;;                      {:title "Tesla"
   ;;                       :id 2
   ;;                       :badges #{:in-tought}}]}
   ;;  :dashboard-backup {:active :friends
   ;;                     :items [{:real-name "John Dowe"
   ;;                              :login "jd"
   ;;                              :id 100}
   ;;                             {:real-name "Moe"
   ;;                              :login "moe"
   ;;                              :id 101}]}
   ;;  :timeline '()}
   ))


(defn show-page!
  [page]
  (let [url ({[:my-own :wishlist] "/api/wishlist"} page)]
    (GET url {:handler (fn [res] (swap! state merge (read-string res)))})))


(defn use-the-force!
  "Use the force to refresh the UI!"
  [] (swap! state update-in [:flag] not))

;; -----------------------------------------------------------------------------

(defn dashboard
  [tabs]
  (let [config (map vec (partition 2 tabs))
        tabs (map first config)
        config (reduce conj {} config)]
    (q/component
     (fn [{:keys [active items]} mode]
       (let [heading (d/div
                      {:className "panel-heading"}
                      (apply d/ul {:className "nav nav-pills nav-justified"
                                   :role"tablist"}
                             (for [tab tabs
                                   :let [{:keys [title modes]} (config tab)]
                                   :when (modes mode)]
                               (if (= tab active)
                                 (d/li {:className "active"} (d/a {} title))
                                 (d/li {} (d/a {:onClick
                                                (fn [_] (show-page! [mode tab]))
                                                :style {:cursor "pointer"}}
                                               title))))))
             comp (get-in config [active :comp])
             available-modes (get-in config [active :modes])]
         (if (available-modes mode)
           (d/div {:className "col-md-8 dashboard"}
                  (comp items heading mode))
           (throw (str "Tab " active " is not available in mode " mode "!"))))))))


(defn mk-page
  "Page maker.
   Makes the typical page with header, dashboard and timeline"
  [header-comp dashboard-comp timeline-comp]
  (q/component
   (fn [{:keys [mode header dashboard timeline] :as data}
       mode ;; mode is second arg, because of "static arguments"
       ]
     (d/div
      {:className "container"}
      ;; navbar
      (d/nav {:className "navbar navbar-default"}
             (d/div {:className "container-fluid"}
                    (d/div {:className "navbar-header"}
                           (d/a {:className "navbar-brand"
                                 :href "https://clojurecup.com/#/apps/wishare"}
                                (d/img {:src "/img/logo128x128.png"})
                                (d/img {:src "img/vote-for-us.jpg"})))
                    (d/div {:className "collapse navbar-collapse"}
                           (d/ul {:className "nav navbar-nav"}
                                 (d/li {}
                                       (d/h2 {}
                                             (d/a {:href "https://clojurecup.com/#/apps/wishare"}
                                                  "WiShare! Vote for us!"))))))
             ;; header
             (header-comp header mode))
      (d/div
       {:className "content col-md-12 panel panel-default"}
       ;; dashboard
       (dashboard-comp dashboard mode)
       ;; timeline
       (timeline-comp timeline mode))))))


(def Page
  (mk-page
   profile/UserHeader
   (dashboard [:wishlist {:comp wishlist/Wishlist
                          :title "Wishlist"
                          :modes #{:my-own :readonly :friend}}
               :friends {:comp friends/FriendList
                         :title "Friends"
                         :modes #{:my-own :friend}}])
   timeline/Timeline))


(add-watch state ::render
           (fn [_ atm _ data]
             (q/render (Page data)
                       (.getElementById js/document "root"))))


(defn ^:export renderProfile
  []
  (show-page! [:my-own :wishlist])
  ;;(use-the-force!)
  )
