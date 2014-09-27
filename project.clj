(defproject wishare "0.1.0-SNAPSHOT"
  :description "Wishlist sahring service"
  :url "http://wishare.clojurecup.com"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [compojure "1.1.8"]]
  :plugins [[lein-ring "0.8.11"]]
  :ring {:handler wishare.handler/app})
