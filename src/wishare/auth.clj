(ns wishare.auth
  (:require [oauth.twitter :as twi]))


;; Twitter authorization
(def twitter-consumer-key "5xkYaeCYatqGTpCLHOcq26o03")
(def twitter-consumer-secret "sre9DvhrzklrJSkIh9C4xCzTjdmlMrkmfw8sgykl03dlFTxErh")
(def twitter-request-token (twi/oauth-request-token
                            twitter-consumer-key
                            twitter-consumer-secret))

(defn twitter-signin
  "/signin - Twitter authorization handler"
  [cookies]
  (if (empty? (:value (cookies "twitter-user")))
    ((twi/oauth-authorize (:oauth-token twitter-request-token))
      {:headers {"Content-Type" "text/plain"}
       :body "Authentication..."})
    {:status 302
     :headers {"Location" "/user"}}))

(defn twitter-auth
  "/signin/auth - callback for Twitter OAuth API"
  [params cookies]
  (def twitter-oauth-verifier (params :oauth_verifier))
  (def twitter-oauth-token (params :oauth_token))
  (def twitter-access-token
    (twi/oauth-access-token
     twitter-consumer-key
     twitter-oauth-token
     twitter-oauth-verifier))
  {:headers {"Content-Type" "text/plain"}
   :cookies {"twitter-user" {:value (:screen-name twitter-access-token) :path "/"}
             "twitter-id" {:value (:user-id twitter-access-token) :path "/"}}
   :body (:screen-name twitter-access-token)})

(defn user
  "Possible it will be user's profile page"
  [cookies]
  (if (not (empty? (:value (cookies "twitter-user"))))
    (def response (str "You are logged in as @" (:value (cookies "twitter-user"))))
    (def response "Please sign in"))
  {:headers {"Content-Type" "text/plain"}
   :body response})
