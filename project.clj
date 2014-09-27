(defproject wishare "0.1.0-SNAPSHOT"
  :description "Wishlist sahring service"
  :url "http://wishare.clojurecup.com"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 ;; server-side
                 [compojure "1.1.8"]
                 [prone "0.6.0"]
                 [com.taoensso/timbre "3.3.1"]
                 [sonian/carica "1.1.0" :exclusions [[cheshire]]]
                 [oauth-clj "0.1.13"]
                 ;; client-side
                 ;; TODO
                 ]
  :plugins [[lein-ring "0.8.11"]]
  :ring {:handler wishare.handler/app
         :init wishare.handler/init})
