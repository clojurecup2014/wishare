(ns wishare.main
  (:gen-class)
  (:require [wishare.handler :refer [init app]]
            [ring.adapter.jetty :refer [run-jetty]]
            [carica.core :refer [config]]))

(defn -main
  "Main funciton"
  []
  (let [port (or (config :port) 8080)]
    (init)
    (run-jetty app {:port port})))
