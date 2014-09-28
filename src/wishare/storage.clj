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

(defn get-user-login-by-id [user-id]
  (ffirst (d/q '[:find ?login
         :in $ ?user-id
         :where [?user-id :user/login ?login]]
       (d/db conn)
       user-id)))

;; ----- User -----

(defn add-user [real-name email & {:keys [avatar-url] :or {avatar-url ""}}]
  @(d/transact conn [{:db/id (d/tempid :db.part/user)
                      :user/real-name real-name
                      :user/date-created (java.util.Date.)
                      :user/date-modified (java.util.Date.)
                      :user/date-last-login (java.util.Date.)
                      :user/avatar-url avatar-url
                      :user/login email}]))

(defn get-user-by-id [user]
  "Отдает все данные по пользователю по его id."
  (let [fields [:real-name :login :avatar-url :date-created :date-last-login :date-modified]
        user-id (find-wish-user-id user)]
    (zipmap fields
            (first (d/q '[:find ?real-name ?login ?avatar-url ?date-created ?date-last-login ?date-modified
                          :in $ ?u
                          :where [?u :user/real-name ?real-name]
                          [?u :user/login ?login]
                          [?u :user/avatar-url ?avatar-url]
                          [?u :user/date-created ?date-created]
                          [?u :user/date-last-login ?date-last-login]
                          [?u :user/date-modified ?date-modified]
                          ]
                        (d/db conn)
                        user-id)))))

;; ----- Wish -----


(defn get-wish-by-id [wish-id]
  "Вернет все поля подарка по его id"
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
  "Вернет список подарков пользователя в виде списка id"
  (let [wishes (d/q '[:find ?w
                      :in $ ?user-login
                      :where [?wish-user :user/login ?user-login]
                      [?w :wish/user ?wish-user]]
                    (d/db conn)
                    user-login)]
    (map (partial apply get-wish-by-id) wishes)))


(defn find-offered-wish-for-user [user-login]
  "Вернет список подарков пользователя в виде списка id"
  (let [wishes (d/q '[:find ?w
                      :in $ ?user-login
                      :where [?wish-user :user/login ?user-login]
                      [?w :wish/user ?wish-user]
                      [?w :wish/user-created ?wish-user-created]
                      [(not= ?wish-user ?wish-user-created)]]
                    (d/db conn)
                    user-login)]
    (map (partial apply get-wish-by-id) wishes)))

(defn find-own-wish-for-user [user-login]
  "Вернет список подарков пользователя в виде списка id"
  (let [wishes (d/q '[:find ?w
                      :in $ ?user-login
                      :where [?wish-user :user/login ?user-login]
                      [?w :wish/user ?wish-user]
                      [?w :wish/user-created ?wish-user-created]
                      [(= ?wish-user ?wish-user-created)]]
                    (d/db conn)
                    user-login)]
    (map (partial apply get-wish-by-id) wishes)))





(defn add-wish [user-login user-created-login title description & {:keys [url photo-url] :or {url "" photo-url ""}}]
  "Добавление подарка"
  @(d/transact conn [{:db/id (d/tempid :db.part/user)
                      :wish/description description
                      :wish/url url
                      :wish/photo-url photo-url
                      :wish/title title
                      :wish/user         (find-wish-user-id user-login)
                      :wish/user-created (find-wish-user-id user-created-login)
                      :wish/date-created (java.util.Date.)
                      :wish/date-modified (java.util.Date.)}]))

;; ----- Friendship -----

(defn find-user-freinds [user-id]
  "Вернет всеъ друзей пользователя"
  ())

(defn add-firendship-request [user-sender-id user-receiver-id message]
  "Friendship request creation"
  @(d/transact conn [{:db/id (d/tempid :db.part/user)
                      :friendship-request/sender user-sender-id
                      :friendship-request/receiver user-receiver-id
                      :friendship-request/message message}]))

(defn cancel-firendship-request
  "Canceling friendship request"
  ([user-sender-id user-receiver-id] ())
  ([friendship-request-id]()))

(defn accept-friendship-request
  "Accept friendship. Besause it's a magic!"
  ([user-sender-id user-receiver-id]()) ([friendship-request-id]()))


;; ----- Comment -----

(defn add-wish-comment [wish-id author-id body]
  "Adding comment"
  @(d/transact conn [{:db/id (d/tempid :db.part/user)
                      :wish-comment/author author-id
                      :wish-comment/wish wish-id
                      :wish-comment/timestamp (java.util.Date.)
                      :wish-comment/body body}]))

(defn get-comment-by-id [comment-id]
  "Отдает все данные по комменту по его id."
  (let [fields [:real-name :login :avatar-url :date-created :date-last-login :date-modified]]
    (zipmap fields
            (first (d/q '[:find ?author ?wish ?timestamp ?body
                          :in $ ?u
                          :where [?u :user/author ?author]
                          [?u :user/wish ?wish]
                          [?u :user/timestamp ?timestamp]
                          [?u :user/body ?body]])))))

(defn find-comments-for-wish [wish-id]
  "Вернет список комментариев к подарку в виде списка id"
  (let [comments (d/q '[:find ?c
                        :in $ ?wish-id
                        :where [?c :wish-comment/wish ?wish-id]]
                      (d/db conn)
                      wish-id)]
    (map (partial apply get-wish-by-id) comments)))


(defn remove-comment
  "Remove comment"
  [comment-id]())


;; ----- Status -----

(defn set-wish-user-status [wish-id user-id status]
  "Set wish user status"
  @(d/transact conn [{:db/id (d/tempid :db.part/user)
                      :wish-user-status/user user-id
                      :wish-user-status/wish wish-id
                      :wish-user-status/timestamp (java.util.Date.)
                      :wish-user-status/status status}]))

(defn get-user-status-for-wish [wish-id user-id]
  "Вернет статус подарка для юзера"
  (let [comments (d/q '[:find ?wuc
                        :in $ ?wish-id
                        :where [?wuc]
                        [?w :wish-user-status/wish ?wish-id]
                        [?u :wish-user-status/user ?user-id]]
                      (d/db conn)
                      wish-id)]
    (map (partial apply get-wish-by-id) comments)))



(defn clear-wish-user-status
  "Clear wish status user"
  [wish user-login]
  ())


;; -----

(defn find-all-wish-comments [wish-id])

(defn find-all-user-friends [user-login])



(defn find-all-users []
  (d/q '[:find ?email ?real-name :where     [_ :user/login ?email]
         [_ :user/real-name ?real-name]]
       (d/db conn)))


; ----- TIMELINE -----

(defn add-timeline [user-id text]
  "Adding timeline record"
  @(d/transact conn [{:db/id (d/tempid :db.part/user)
                      :timeline/user user-id
                      :timeline/text text
                      :timeline/timestamp (java.util.Date.)}]))

(defn get-timeline-record-by-id [comment-id]
  "Отдает все данные по таймлайну по его id."
  (let [fields [:user :text :timestamp]]
    (zipmap fields
            (first (d/q '[:find ?user ?text ?timestamp
                          :in $ ?t
                          :where [?t :timeline/user ?user]
                          [?u :timeline/text ?text]
                          [?u :timeline/timestamp ?timestamp]])))))


(defn find-user-own-timeline [{:keys [user limit] :or {limit 10}}]
  "Вернет статус подарка для юзера"
  (let [user-id (find-wish-user-id user)
        timeline (d/q '[:find (sample limit ?t)
                        :in $ ?user-id
                        :where
                        [?t :timeline/user ?user-id]]
                      (d/db conn)
                      user-id)]
    (map (partial apply get-wish-by-id) timeline)))



(defn find-user-timeline [{:keys [user-id linit]
                           :or {limit 10}}])

;; ----- Friendship -----

(defn add-friend [iniciator acceptor]
  @(d/transact conn [{:db/id (d/tempid :db.part/user)
                      :friendship/acceptor (find-wish-user-id acceptor)
                      :friendship/iniciator (find-wish-user-id iniciator)}]))

(defn find-friends [user]
  (let [user-id (find-wish-user-id user)]
    (let [acceptors (d/q '[:find ?acceptor
                           :in $ ?user-id
                           :where [_ :friendship/acceptor ?acceptor]
                           [_ :friendship/iniciator ?user-id]]
                         (d/db conn)
                         user-id)
          iniciators  (d/q '[:find ?iniciator
                             :in $ ?user-id
                             :where [_ :friendship/iniciator ?iniciator]
                             [_ :friendship/acceptor ?user-id]]
                           (d/db conn)
                           user-id)]
      (map get-user-login-by-id (distinct (into (apply concat iniciators) (apply concat acceptors))))
      )))
