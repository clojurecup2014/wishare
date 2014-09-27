(ns wishare.auth
  (:require [oauth.twitter :as twi]
            [carica.core :refer [config]]))

;; Twitter authorization token
(def ^:private twitter-token
  (let [key (config :auth :twitter :key)
        sec (config :auth :twitter :secret)]
    (assert (and key sec) "No twitter authorization data in config!")
    [key sec]
    ;; (twi/oauth-request-token
    ;;  twitter-consumer-key
    ;;  twitter-consumer-secret)
    ))

(defn with-auth
  "auth middleware"
  [handler & {:keys [exclude]
      :or {exclude #{}}}]
  (fn [request]
    (if (exclude (request :uri))
      (handler request)
      (do
        ;; TODO do some auth
        (handler request)))))

;; (defn twitter-signin
;;   "/signin - Twitter authorization handler"
;;   [cookies]
;;   (if (empty? (:value (cookies "twitter-user")))
;;     (do (twi/oauth-authorize (:oauth-token twitter-request-token))
;;         {:headers {"Content-Type" "text/plain"}
;;          :body "Authentication..."})
;;     {:status 302
;;      :headers {"Location" "/user"}}))

;; (defn twitter-auth
;;   "/signin/auth - callback for Twitter OAuth API"
;;   [params cookies]
;;   (def twitter-oauth-verifier (params :oauth_verifier))
;;   (def twitter-oauth-token (params :oauth_token))
;;   (def twitter-access-token
;;     (twi/oauth-access-token
;;      twitter-consumer-key
;;      twitter-oauth-token
;;      twitter-oauth-verifier))
;;   {:headers {"Content-Type" "text/plain"}
;;    :cookies {"twitter-user" {:value (:screen-name twitter-access-token) :path "/"}
;;              "twitter-id" {:value (:user-id twitter-access-token) :path "/"}}
;;    :body (:screen-name twitter-access-token)})

;; (defn user
;;   "Possible it will be user's profile page"
;;   [cookies]
;;   (if (not (empty? (:value (cookies "twitter-user"))))
;;     (def response (str "You are logged in as @" (:value (cookies "twitter-user"))))
;;     (def response "Please sign in"))
;;   {:headers {"Content-Type" "text/plain"}
;;    :body response})
