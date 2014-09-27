(ns wishare.handler
  (:require [carica.core :refer [config]]
            [compojure.core :refer :all]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [taoensso.timbre :as timbre]
            [prone.middleware :as prone]
            [ring.middleware.cookies :refer [wrap-cookies]]
            [ring.middleware.session :refer [wrap-session]]
            [clj-redis-session.core :refer [redis-store]]
            [wishare.auth :as auth]))


(def debug? (config :debug?))


(defroutes app-routes
  (GET "/" [] (slurp "resources/public/index.html"))
  (GET "/signin" {cookies :cookies} (auth/twitter-signin cookies))
  (GET "/signin/auth" {params :params cookies :cookies} (auth/twitter-auth params cookies))
  (GET "/user" {cookies :cookies} (auth/user cookies))
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


(def redis-conn
  "Redis connection preferences"
  {:pool {}
   :spec {:host "127.0.0.1" :port 6379}})


(def app
  (->
   (cond-> app-routes
           debug? prone/wrap-exceptions)
   with-logging
   wrap-cookies
   (wrap-session {:store (redis-store
                          redis-conn
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

