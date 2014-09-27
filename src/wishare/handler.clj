(ns wishare.handler
  (:require [compojure.core :refer :all]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [taoensso.timbre :as timbre]
            [prone.middleware :as prone]))

(defroutes app-routes
  (GET "/" [] (slurp "resources/public/index.html"))
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
  (-> app-routes
      with-logging
      prone/wrap-exceptions
      handler/site))

(defn init
  "App initialization"
  []
  (println "Started!"))
