(ns wishare.core
  (:require [enfocus.core :as ef]
            [enfocus.events :as events])
  (:require-macros [enfocus.macros :as em]))


(def wishes ["iPhone6"
             "Tesla"
             "Hoverboard"])

(def timestamps [{:description "Wished an iPhone6" :time "5 min"}
                 {:description "Gifted a bat" :time "2 days"}])


(em/defsnippet wish
  :compiled "templates/template.html" ["div.wishlist .wishlist li"]
  [title]
  ["a.title"] (ef/content title))


(em/defsnippet timestamp
  :compiled "templates/template.html" [".timeline li"]
  [{:keys [description time]}]
  [".description"] (ef/content description)
  [".timestamp"] (ef/content time))


(em/defsnippet profile-page
  :compiled "templates/template.html" ["body"]
  []
  [".page-header h1"] (ef/content "Moe")
  ["div.wishlist"] (ef/remove-attr "style")
  ["div.wishlist .wishlist"] (ef/content (map wish wishes))
  [".timeline ul"] (ef/content (map timestamp timestamps)))


(defn ^:export renderProfile
  []
  (ef/at js/document
         ["body"]
         (ef/content (profile-page))))
