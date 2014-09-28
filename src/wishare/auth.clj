(ns wishare.auth
  (:require [wishare.utils :as utils]
            [oauth.twitter :as twi]
            [carica.core :refer [config]]))


(defn with-auth
  "auth middleware"
  [handler & {:keys [api-route exclude]
              :or {api-route "/api" exclude #{}}}]
  (fn [request]
    (let [uri (request :uri)]
      (if (or (exclude uri) (utils/static-resource-uri? uri))
        (handler request)
        (do
          (if-not ((:cookies request) "twitter-id")
            (if (re-find (re-pattern (str "^" api-route)) uri)
              {:status 401
               :body "401 Unauthorized"}
              (handler {:request-method :get
                        :uri "/welcome"}))
            (handler request)))))))


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
