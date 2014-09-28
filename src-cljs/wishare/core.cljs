(ns wishare.core
  (:require [quiescent :as q :include-macros true]
            [quiescent.dom :as d]
            [ajax.core :as ajax :refer [GET POST]]
            [wishare.wishlist :as wishlist]
            [wishare.friends :as friends]
            [wishare.profile :as profile]
            [wishare.timeline :as timeline]))


;; ------------------------------ local state ----------------------------------
(def suffix (atom nil))
(def state (atom {}))

(defn ^:export show
  [target suff]
  (let [suff (or @suffix suff)]
    (GET (str "/api/"
              (if (not (#{"" nil} suff)) (str target "/" suff) target))
         {:handler (fn [res]
                     (do
                       (reset! suffix suff)
                       (swap! state merge
                              (cljs.reader/read-string res))))})))


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
                                   :let [{:keys [title modes route]} (config tab)]
                                   :when (modes mode)]
                               (if (= tab active)
                                 (d/li {:className "active"} (d/a {} title))
                                 (d/li {} (d/a {:onClick
                                                (fn [_] (show route @suffix))
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
                                (d/img {:src "/img/vote-for-us.jpg"})))
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
   (dashboard [:wishlist {:route "wishlist"
                          :comp wishlist/Wishlist
                          :title "Wishlist"
                          :modes #{:my-own :readonly :friend}}
               :friends {:route "friends"
                         :comp friends/FriendList
                         :title "Friends"
                         :modes #{:my-own :friend}}])
   timeline/Timeline))


(add-watch state ::render
           (fn [_ atm _ data]
             (q/render (Page data)
                       (.getElementById js/document "root"))))
