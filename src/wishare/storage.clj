(ns wishare.storage
  (:require [datomic.api :as d]
            [carica.core :refer [config]]))

(def uri (config :db :uri))
(def conn (d/connect uri))

(defn find-wish-user-id [user-email]
  (ffirst (d/q '[:find ?eid
                 :in $ ?user-email
                 :where [?eid :user/email ?user-email]]
               (d/db conn)
               user-email)))

(defn add-user [real-name email]
  @(d/transact conn [{:db/id (d/tempid :db.part/user)
                      :user/real-name real-name
                      :user/date-created (java.util.Date.)
                      :user/email email}]
               ))


(defn add-wish [user-email user-created-email title description url]
  @(d/transact conn [{:db/id (d/tempid :db.part/user)
                      :wish/description description
                      :wish/url url
                      :wish/title title
                      ;;:wish/user (find-wish-user-id user-email)
                      ;;:wish/user-created (find-wish-user-id user-created-email)
                      }]))



(defn find-all-users []
  (d/q '[:find ?email ?real-name :where [_ :user/email ?email]
                                        [_ :user/real-name ?real-name] ]
       (d/db conn)))


(defn find-wish-for-user [user-email]
  (d/q '[:find ?wish-name
         :in $ ?user-email
         :where [?eid :user/email ?user-email]
         ;[?eid :user/wish ?wish]
         [?wish :wish/title ?wish-name]]
       (d/db conn)
       user-email))
