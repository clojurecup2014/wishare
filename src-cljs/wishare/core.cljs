(ns wishare.core
  (:require [enfocus.core :as ef]
            [enfocus.events :as events]
            [wishare.wishlist :as wishlist]
            [wishare.friends :as friends])
  (:require-macros [enfocus.macros :as em]))


(def wishes ["iPhone6"
             "Tesla"
             "Hoverboard"])

(def timestamps [{:description "Wished an iPhone6" :time "5 min"}
                 {:description "Gifted a bat" :time "2 days"}])


(em/defsnippet timestamp
  :compiled "templates/template.html" [".timeline li"]
  [{:keys [description time]}]
  [".description"] (ef/content description)
  [".timestamp"] (ef/content time))


(em/defsnippet profile-page
  :compiled "templates/template.html" ["body"]
  []
  [".page-header h1"] (ef/content "Moe")

  ;;["div.wishlist .wishlist"] (ef/content (map wish wishes))
  ["div.dashboard"] (ef/content
                     (wishlist/items {:rows [{:title "111111" :editable? true}
                                             {:title "222222"}]}))
  [".timeline ul"] (ef/content (map timestamp timestamps)))


(defn ^:export renderProfile
  []
  (ef/at js/document
         ["body"]
         (ef/content (profile-page))))
