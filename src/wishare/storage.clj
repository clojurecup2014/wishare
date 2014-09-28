(ns wishare.storage
  (:require [datomic.api :as d]

            [carica.core :refer [config]]))

(def uri (config :db :uri))
(def conn (d/connect uri))

(defn find-wish-user-id [user-login]
  (ffirst (d/q '[:find ?user
                 :in $ ?user-login
                 :where [?user :user/login ?user-login]]
               (d/db conn)
               user-login)))

;; ----- User -----

(defn add-user [real-name email]
  @(d/transact conn [{:db/id (d/tempid :db.part/user)
                      :user/real-name real-name
                      :user/date-created (java.util.Date.)
                      :user/login email}]))

(defn get-user-by-id [user-id]
  "Отдает все данные по пользователю по его id."
  (let [fields [:real-name :login :avatar-url :date-created :date-last-login :date-modified]]
    (zipmap fields
            (first (d/q '[:find ?real-name ?login ?avatar-url ?date-created ?date-last-login ?date-modified
                          :in $ ?u
                          :where [?u :user/real-name ?real-name]
                          [?u :user/login ?login]
                          [?u :user/avatar-url ?avatar-url]
                          [?u :user/date-created ?date-created]
                          [?u :user/date-last-login ?date-last-login]
                          [?u :user/date-modified ?date-modified]])))))

;; ----- Wish -----


(defn get-wish-by-id [wish-id]
  (let [fields [:title :creator :created :modified :description :url :photo-url]]
    (zipmap fields
          (first (d/q '[:find ?title ?creator ?created ?modified ?description ?url ?photo-url
                :in $ ?w
                :where [?w :wish/title ?title]
                [?w :wish/user-created ?creator]
                [?w :wish/date-created ?created]
                [?w :wish/date-modified ?modified]
                [?w :wish/description ?description]
                [?w :wish/url ?url]
                [?w :wish/photo-url ?photo-url]]
              (d/db conn)
              wish-id)))))



(defn find-wish-for-user [user-login]
  (let [wishes (d/q '[:find ?w
                      :in $ ?user-login
                      :where [?wish-user :user/login ?user-login]
                      [?w :wish/user ?wish-user]]
                    (d/db conn)
                    user-login)]
    (map (partial apply get-wish-by-id) wishes)))


(defn add-wish [user-login user-created-login title description & {:keys [url photo-url] :or {url "" photo-url ""}}]
  @(d/transact conn [
                     {:db/id (d/tempid :db.part/user)
                      :wish/description description
                      :wish/url url
                      :wish/photo-url photo-url
                      :wish/title title
                      :wish/user (find-wish-user-id user-login)
                      :wish/user-created (find-wish-user-id user-created-login)
                      :wish/date-created (java.util.Date.)
                      :wish/date-modified (java.util.Date.)
                      }]))

;; ----- Friendship -----

(defn find-user-freinds [user-id]
  "Вернет всеъ друзей пользователя"
  ())

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


;; ----- Comment -----

(defn add-wish-comment
  "Adding comment"
  [wish-id body])
(defn remove-comment
  "Remove comment"
  [comment-id]())


;; ----- Status -----


(defn set-wish-user-status
  "Set wish user status"
  [wish user-login status])

(defn clear-wish-user-status
  "Clear wish status user"
  [wish user-login])


;; -----

(defn find-all-user-self-wishes
  "Find all wishes of one user who add it themself"
  [user-email])

(defn find-all-user-offered-wishes
  "Find all wished to user offered from anothers"
  [user-email])

(defn find-all-wish-comments [wish-id])

(defn find-all-user-friends [user-login])



(defn find-all-users []
  (d/q '[:find ?email ?real-name :where     [_ :user/login ?email]
                                            [_ :user/real-name ?real-name]]
       (d/db conn)))
