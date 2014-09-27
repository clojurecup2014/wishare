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
                 ;; client-side
                 ;; TODO
                 ]

  :plugins [[lein-ring "0.8.11"]
            [lein-cljsbuild "1.0.3"]]

  :ring {:handler wishare.handler/app
         :init wishare.handler/init}

  :main wishare.main

  :cljsbuild {:builds
              {:dev {:source-paths ["src-cljs"]
                     :compiler {:output-to "resources/public/js/main.js"
                                :optimization :whitespace
                                :pretty-print true}}
               :prod {:source-paths ["src-cljs"]
                      :compiler {:output-to "resources/public/js/main.min.js"
                                 :optimization :advance
                                 :pertty-print false}}}
              }

  :datomic {:schemas ["resources/datomic" ["schema.edn"]]}

  :profiles {:dev
             {:datomic {:config "resources/datomic/free-transactor-template.properties"
                        :db-uri "datomic:free://localhost:4334/wishare-db"}
              :dependencies [[javax.servlet/servlet-api "2.5"]]}
             :uberjar {:aot [wishare.main]}})
