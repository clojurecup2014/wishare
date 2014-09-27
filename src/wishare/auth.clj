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
  [req]
  (twi/oauth-authorize (:oauth-token twitter-request-token))
  {:headers {"Content-Type" "text/plain"}
   :body "Redirecting..."})

(defn twitter-auth
  "/signin/auth - callback for Twitter OAuth API"
  [req]
  (def twitter-oauth-verifier ((req :params) :oauth_verifier))
  (def twitter-oauth-token ((req :params) :oauth_token))
  (def twitter-access-token
    (twi/oauth-access-token
     twitter-consumer-key
     twitter-oauth-token
     twitter-oauth-verifier))
  ; (def twitter-client
  ;   (twi/oauth-client
  ;    twitter-consumer-key
  ;    twitter-consumer-secret
  ;    (:oauth-token twitter-access-token)
  ;    (:oauth-verifier twitter-access-token)))
  ; (def twitter-credentials (twitter-client
  ;   {:method :get
  ;    :url "https://api.twitter.com/1.1/account/verify_credentials.json"}))
  {:headers {"Content-Type" "text/plain"}
   :body (:screen-name twitter-access-token)})
