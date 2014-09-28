(ns wishare.handler
  (:require [carica.core :refer [config]]
            [compojure.core :refer :all]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [taoensso.timbre :as timbre]
            [prone.middleware :as prone]
            [ring.middleware.cookies :refer [wrap-cookies]]
            [ring.middleware.content-type :refer [wrap-content-type]]
            [ring.middleware.session :refer [wrap-session]]
            [ring.middleware.edn :refer [wrap-edn-params]]
            [clj-redis-session.core :refer [redis-store]]
            [wishare.auth :refer [with-auth signin]]
            [wishare.api :as api]))


(def debug? (config :debug?))


(defn wrap-edn-content-type [handler]
  (wrap-content-type handler "application/edn"))

; TODO wrap-edn middleware
(defroutes api-routes
  (GET "/wishlist" [] (api/my-wishlist))
  (GET "/wishlist/:username" [] (api/user-wishlist))
  (GET "/friends" [] api/my-friends)
  (GET "/friends/:username" request (api/user-friends-mock request))
  (GET "/item/:id" request (api/wish-item-mock request))
  (POST "item/:id" [] api/wish-item-submit)
  (POST "item" [] api/wish-item-create)
  (GET "/test" request (str (:session request)))
  )


(defroutes app-routes
  (GET "/" [] (slurp "resources/public/index.html"))
  (GET "/profile" [] (slurp "resources/public/profile.html"))
  (context "/api" [] (-> api-routes
                         (wrap-edn-content-type)
                         (wrap-edn-params)))
  ;;(GET "/signin" {cookies :cookies} (auth/twitter-signin cookies))
  ;;(GET "/signin/auth" {params :params cookies :cookies} (auth/twitter-auth params cookies))
  ;;(GET "/user" {cookies :cookies} (auth/user cookies))
  (GET "/signin" {params :params cookies :cookies} (signin params cookies))
  (GET "/test" request (str {:test 123}))
  (route/resources "/")
  (route/not-found "Not Found"))


(defn with-logging
  "Exception logging middleware"
  [handler]
  (fn [request]
    (try
      (handler request)
      (catch Exception e
        (timbre/error e)
        (throw e)))))

(def app
  (->
   (cond-> app-routes
           debug? prone/wrap-exceptions)
   with-logging
   ; (with-auth :api-route "/api"
   ;            :exclude #{"/signin" "/"})
   wrap-cookies
   (wrap-session
    {:store (redis-store
             {:pool {}
              :spec (config :redis-conn)}
             {:prefix "wishare-session"})})
   handler/site))


(defn init
  "App initialization"
  []
  (timbre/info "Started!")

  (when debug?
    (timbre/info "Debug mode: ON"))

  ;; file logging
  (when (config :log-to-file?)
    (let [filename (config :log-file-name)]
      (timbre/info (str "Log file: \"" filename "\""))
      (timbre/set-config! [:appenders :spit :enabled?] true)
      (timbre/set-config! [:shared-appender-config :spit-filename] filename))))
