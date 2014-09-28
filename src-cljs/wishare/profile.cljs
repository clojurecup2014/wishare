(ns wishare.profile
  (:require [quiescent :as q :include-macros true]
            [quiescent.dom :as d]))


(q/defcomponent UserHeader
  "User profile header"
  [{:keys [avatar id name nickname friend?]
    :or {avatar nil
         friend? false}}
   mode]
  (d/div
   {:className "page-header panel panel-default col-md-12"}
   (d/div
    {:className "panel-body"}
    (d/img {:src (or avatar "/img/noavatar.png")
            :alt "avatar"
            :className "img-thumbnail pull-left avatar image120x120"})
    (d/h1 {:className "user"}
          name
          (d/small {} nickname))
    (when-not (#{:readonly :my-own} mode)
      (if friend?
        (d/button {:className "btn btn-xs btn-danger remove-friend"}
                  "Remove from friends")
        (d/button {:className "btn btn-xs btn-success add-friend"}
                  "Add to friends"))))))
