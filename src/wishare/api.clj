(ns wishare.api
  (:require [wishare.storage :as storage]
            [ring.util.response :refer [redirect]]))


(defn get-request-user-id [request]
  1
  ; TODO
  )


(defn is-friends? [user1 user2]
    (contains?
     (:username user2)
     (map :username (storage/find-all-user-friends user1))))


(defn get-current-user [request]
  (let [user-id (get-request-user-id request)]
    (storage/get-user-by-id user-id)))


(defn my-wishlist [{:keys [read-only]
                    :or {read-only false}
                    :as request}]
  (let [user (get-current-user request)
        wishes (storage/find-own-wish-for-user (:username user))
        timeline (storage/find-user-own-timeline (:username user))]
    {:readonly? read-only
     :header user
     :dashboard {:mode :wishlist
                 :my-own? true
                 :items wishes}
     :timeline timeline})
  )


(defn my-friends [request]
  (let [user (get-current-user request)
        friends (storage/find-all-user-friends (:username user))
        timeline (storage/find-user-own-timeline (:username user))]
    {:readonly? false
     :header user
     :dashboard {:mode :friends
                 :my-own? true
                 :items friends}
     :timeline timeline}
    ))


(defn user-wishlist [{{username :username} :params :as request} ]
  (let [current-user (get-current-user request)
        other-user (storage/get-user-by-id username)]
    (if (= (:username current-user) username)
      (redirect "/wishlist")
      (if (is-friends? current-user other-user)
        (let [wishes (storage/find-all-user-offered-wishes
                      (:username other-user))
              timeline (storage/find-user-timeline
                        (:username other-user))]
          {:readonly? false
           :header other-user
           :dashboard {:mode :wishlist
                       :my-own? false
                       :items wishes}
           :timeline timeline})
        (my-wishlist (assoc request :read-only true))))))


(defn user-friends [request]
  ())
