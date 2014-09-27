(ns wishare.storage
  (:require [datomic.api :as d]
            [carica.core :refer [config]]))

(def uri (config :db :uri))
(def conn (d/connect uri))

;;(defn now [] (new java.util.Date))

(defn add-user [real-name email]
  @(d/transact conn [{:db/id (d/tempid :db.part/user)
                      :user/real-name real-name
                      :user/date-created (java.util.Date.)
                      :user/email email}]
               ))
(defn find-all-users []
  (d/q '[:find ?email ?real-name :where [_ :user/email ?email]
                                        [_ :user/real-name ?real-name] ]
       (d/db conn)))
