(ns wishare.utils
  (:require [carica.core :refer [config]]
            [net.cgrand.enlive-html :as html]))

(defn fetch-url [url]
  (html/html-resource (java.net.URL. url)))

(def image-paths {"amazon." [:div.imgTagWrapper :img]})

(defn product-picture-url
  "Parse Amazon/eBay/etc page and return product image URL if available"
  [url]
  (first (map #(if (.contains url %)
      (try
        (let [http-params (config :http)
              page-content (fetch-url url)]
          (((first (html/select page-content (image-paths %))) :attrs) :src))
        ; TODO: logging for failed HTTP queries
        (catch Exception e nil))
      nil)
    (keys image-paths))))
