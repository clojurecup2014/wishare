(ns wishare.wishlist
  (:require [enfocus.core :as ef]
            [enfocus.events :as events])
  (:require-macros [enfocus.macros :as em]))


(em/defsnippet item
  :compiled "templates/template.html" ["div.wishlist .wishlist li.list-group-item"]
  [{:keys [title editable? badges]
    :or {badges #{} editable? false}}]

  ["a.title"] (ef/content title)
  ["button"] (if editable?
               (ef/remove-style :display)
               (ef/set-style :display "none"))
  ["span.badge"] (ef/add-class "alert-success"))


(em/defsnippet items
  :compiled "templates/template.html" ["div.wishlist"]
  [{:keys [rows]}]
  [".nav li:last-child" (ef/remove-node)]
  ["ul.wishlist"] (ef/content (map item rows)))
