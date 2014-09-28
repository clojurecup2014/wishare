(ns wishare.utils
  (:require [carica.core :refer [config]]
            [net.cgrand.enlive-html :as html]))

(defn fetch-url [url]
  (html/html-resource (java.net.URL. url)))

; Enlive selectors syntax can be found at https://github.com/cgrand/enlive#selector-syntax
(def image-paths {"amazon." [:div.imgTagWrapper :img]
                  "ebay.com" [:td.img300 :img#icImg]})

(defn product-picture-url
  "Parse Amazon/eBay/etc page and return product image URL if available"
  [url]
  (first (map #(if (.contains url %)
      (try
        (let [http-params (config :http)
              page-content (fetch-url url)]
          (((first (html/select page-content (image-paths %))) :attrs) :src))
        ; TODO: logging for failed HTTP queries
        (catch Exception e "Error"))
      nil)
    (keys image-paths))))


(def static ["ico" "png" "jpg" "jpeg" "gif" "css" "js"])

(defn static-resource-uri?
  "check is the URI links to static resource"
  [uri]
  (not-every? nil? (map #(re-find (re-pattern (str "\\." % "$")) uri) static)))
