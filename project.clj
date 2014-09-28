(defproject wishare "0.1.0-SNAPSHOT"
  :description "Wishlist sahring service"
  :url "http://wishare.clojurecup.com"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2356"]
                 ;; server-side
                 [ring "1.3.1"]
                 [compojure "1.1.8"]
                 [prone "0.6.0"]
                 [com.taoensso/timbre "3.3.1"]
                 [sonian/carica "1.1.0" :exclusions [[cheshire]]]
                 [com.datomic/datomic-free "0.9.4899"]
                 [expectations "2.0.9"]
                 [clj-redis-session "2.1.0"]
                 [commons-codec "1.4"]
                 [oauth-clj "0.1.13"]
                 [ring-mock "0.1.5"]
                 [fogus/ring-edn "0.2.0"]
                 [enlive "1.1.5"]]

  :plugins [[lein-ring "0.8.11"]
            [lein-depgraph "0.1.0"]]

  :ring {:handler wishare.handler/app
         :init wishare.handler/init}

  :main wishare.main

  :datomic {:schemas ["resources/datomic" ["schema.edn"]]}

  :profiles {;; Dev profile
             :dev {:plugins [[lein-datomic "0.2.0"]]
                   :datomic {:config "resources/datomic/free-transactor-template.properties"
                             :db-uri "datomic:free://localhost:4334/wishare-db"
                             :install-location "/tmp/datomic/datomic-free-0.9.4899"}
                   :dependencies [[javax.servlet/servlet-api "2.5"]
                                  [ring-mock "0.1.5"]]}

             ;; Profile for building ClJS
             :cljs {:plugins [[lein-cljsbuild "1.0.3"]]
                    :dependencies [[com.facebook/react "0.11.1"]
                                   [quiescent "0.1.4"]
                                   [sablono "0.2.21"]
                                   [cljs-ajax "0.3.0"]]
                    :cljsbuild
                    {:builds {:dev
                              {:source-paths ["src-cljs"]
                               :compiler {:output-to "resources/public/js/main.js"
                                          ;;:output-dir "resources/public/js"
                                          :optimization :none}}

                              :prod
                              {:source-paths ["src-cljs"]
                               :compiler {:output-to "resources/public/js/main.js"
                                          :optimization :advanced
                                          :pertty-print false
                                          :preamble ["react/react.min.js"]
                                          :externs ["react/externs/react.js"]}}}}}

             ;; Uberjar settings
             :uberjar {:aot [wishare.main]}})
