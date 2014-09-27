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
        (handler request)))))


(defn signin
  "/signin - Twitter authorization handler"
  [params cookies]
  (let [key (config :auth :twitter :key)
        sec (config :auth :twitter :secret)
        verifier (params :oauth_verifier nil)
        token (params :oauth_token nil)
        oauth-req (twi/oauth-request-token key sec)]
    (if-not verifier
      {:headers {"Location" (twi/oauth-authorization-url (:oauth-token oauth-req))}
       :status 302}
      (let [access-token (twi/oauth-access-token key token verifier)]
        {:headers {"Location" "/"}
         :status 302
         :cookies {"twitter-user" {:value (:screen-name access-token) :path "/"}
                   "twitter-id" {:value (:user-id access-token) :path "/"}}}))))
