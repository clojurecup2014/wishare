(ns wishare.storage
  (:require [datomic.api :as d]
            [carica.core :refer [config]]))

(def uri (config :db :uri))
(def conn (d/connect uri))

(defn find-wish-user-id [user-login]
  (ffirst (d/q '[:find ?eid
                 :in $ ?user-login
                 :where [?eid :user/login ?user-login]]
               (d/db conn)
               user-login)))

(defn add-user [real-name email]
  @(d/transact conn [{:db/id (d/tempid :db.part/user)
                      :user/real-name real-name
                      :user/date-created (java.util.Date.)
                      :user/login email}]))


(defn add-wish [user-login user-created-email title description url]
  @(d/transact conn [{:db/id (d/tempid :db.part/user)
                      :wish/description description
                      :wish/url url
                      :wish/title title
                      ;;:wish/user (find-wish-user-id user-login)
                      ;;:wish/user-created (find-wish-user-id user-created-email)
                      }]))


(defn add-firendship-request
  "Friendship request creation"
  [user-sender user-receiver message])

(defn cancel-firendship-request
  "Canceling friendship request"
  ([user-sender user-receiver] ())
  ([friendship-request-id]()))

(defn accept-friendship-request
  "Accept friendship. Besause it's a magic!"
  ([user-sender user-receiver]()) ([friendship-request-id]()))

(defn add-wish-comment
  "Adding comment"
  [wish-id body])
(defn remove-comment
  "Remove comment"
  [comment-id]())


(defn set-wish-user-status
  "Set wish user status"
  [wish user-login status])

(defn clear-wish-user-status
  "Clear wish status user"
  [wish user-login])


(defn find-all-users []
  (d/q '[:find ?email ?real-name :where [_ :user/login ?email]
                                        [_ :user/real-name ?real-name]]
       (d/db conn)))

(defn find-all-user-self-wishes
  "Find all wishes of one user who add it themself"
  [user-email])

(defn find-all-user-offered-wishes
  "Find all wished to user offered from anothers"
  [user-email])

(defn find-all-wish-comments [wish-id])

(defn find-all-user-friends [user-login])


(defn find-wish-for-user [user-login]
  (d/q '[:find ?wish-name
         :in $ ?user-login
         :where [?eid :user/login ?user-login]
         ;[?eid :user/wish ?wish]
         [?wish :wish/title ?wish-name]]
       (d/db conn)
       user-login))
