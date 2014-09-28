(ns wishare.api
  (:require [wishare.storage :as storage]
            [ring.util.response :refer [redirect]]))


(defn get-request-user-id
  [request]
  (get-in request [:cookies :twitter-id]))


(defn is-friends?
  [user1 user2]
  (contains?
   (:username user2)
   (map :username (storage/find-all-user-friends user1))))


(defn get-current-user
  [request]
  (let [uid (get-request-user-id request)]
    (if (nil? uid)
      (let [{{{u :value} "twitter-user"} :cookies} request]
        (println u)
        (storage/add-user u u)
        (storage/get-user-by-id u))
      (storage/get-user-by-id uid))))


(defn my-wishlist
  [request]
  (let [user (get-current-user request)
        wishes (storage/find-own-wish-for-user (:login user))
        timeline (storage/find-user-own-timeline (:login user))
        ]
    (pr-str {:mode :my-own
             :header user
             :dashboard {:active :wishlist
                         :items wishes}
             :timeline '() ;;timeline
             })))


(defn my-friends
  [request]
  (let [user (get-current-user request)
        friends (storage/find-all-user-friends (:username user))
        timeline (storage/find-user-own-timeline (:username user))]
    (pr-str {:readonly? false
             :header user
             :dashboard {:mode :friends
                         :my-own? true
                         :items friends}
             :timeline timeline})))


(defn user-wishlist
  [{{username :username} :params :as request}]
  (let [current-user (get-current-user request)
        other-user (storage/get-user-by-id username)]
    (if (= (:username current-user) username)
      (redirect "wishlist")
      (if (is-friends? current-user other-user)
        (let [wishes (storage/find-wish-for-user
                      (:username other-user))
              timeline (storage/find-user-timeline
                        (:username other-user))]
          (pr-str {:readonly? false
                   :header other-user
                   :dashboard {:mode :wishlist
                               :my-own? false
                               :items wishes}
                   :timeline timeline}))
        (my-wishlist (assoc request :read-only true))))))


(defn user-friends-mock
  [{{username :username} :params :as request}]
  (let [is-friend
        (is-friends? (get-current-user request)
                     (storage/get-user-by-id username))
        ]
    (pr-str {:readonly? (not is-friend)
             :header {:login "joe_the_hacker"
                      :real-name "Joe"
                      :avatar-url "/img/noavatar.png"}
             :dashboard {:mode :friends
                         :my-own? (not is-friend)
                         :items [{:login "jd"
                                  :real-name "John Dowe"
                                  :id 33
                                  :avatar-url "http://img.jpg"}]}
             :timeline [{:title "Wished the bike"
                         :timestamp "5 min"}]})))


(defn user-friends
  [{{username :username} :params :as request}]
  (let [current-user (get-current-user request)
        other-user (storage/get-user-by-id username)]
    (if (= (:username current-user) username)
      (redirect "friends")
      (pr-str {:read-only? false
               :header other-user
               :dashboard {:mode :friends
                           :my-own? false
                           :items (storage/find-all-user-friends username)}
               :timeline (storage/find-user-timeline username)}))))


(defn wish-item-mock
  [request]
  (pr-str {:id 123
           :title "iPhone6"
           :description "World the most wanted cell phone!!!"
           :url "/url"
           :photo-url "/img/nophoto.png"
           :user-status :in-thought
           :comments [{:id 3534
                       :username "joe"
                       :body "Hello world!"
                       :timestamp "01-01-1991"}
                      {:id 2355
                       :username "black"
                       :body "Hello world!!!"
                       :timestamp "13-01-1991"}
                      {:id 3231
                       :username "joe"
                       :body "Hello world!"
                       :timestamp "11-01-1991"}]}))


(defn wish-item-submit
  [{{:keys [id title user description url photo-url]} :params
    :as request}]
  (let [user-created (get-current-user request)
        to-user (storage/get-user-by-id user)]

    (storage/add-wish user-created to-user title description url photo-url)))


(defn wish-item-create [{{title :title
                          user :user
                          description :description
                          url :url
                          photo-url :photo-url
                          } :params :as request}]
  (let [user (get-current-user request)
        user-to (get-current-user user)]
    (storage/add-wish user-to user title description url photo-url)))

;;[wish-id author-id body]

(defn wish-comment-create [{{wish :wish
                             body :body} :params :as request}]
  (let [user (get-current-user request)]
    (storage/add-wish-comment wish user body)))


(defn wish-status-submit
  [request])

(defn add-friend
  [request])


(defn remove-friend
  [request])
