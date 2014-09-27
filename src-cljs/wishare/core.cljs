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
  :compiled "templates/template.html" [".timeline li:first-child"]
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

(em/defsnippet my-profile
  :compiled "templates/template.html" [".container"]
  []
  [".dashboard .panel:not(.wishlist), .panel.item-statuses, .page-header button"]
    (ef/remove-node)
  [".wish-item span.badge:not(:first-child)"] (ef/remove-node)
  [".wish-item"] (em/clone-for [row [{:title "iPhone6" :gifted false}
                                     {:title "NVidia Shield" :gifted true}]]
                               ".title" (ef/content (:title row))
                               "span.badge" (when (not (:gifted row))
                                              (ef/remove-node))
                               "button.edit" (when (:gifted row)
                                               (ef/remove-node)))
  [".timeline li"] (ef/remove-node)
  [".timeline"] (ef/append (map timestamp timestamps)))


(defn ^:export renderProfile
  []
  (ef/at ["body"] (ef/append (my-profile))))

