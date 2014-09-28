(ns wishare.timeline
  (:require [quiescent :as q :include-macros true]
            [quiescent.dom :as d]))


(q/defcomponent Event
  "Timeline event"
  [{:keys [title timestamp]}]
  (d/li {:className "list-group-item"}
        (d/p {}
             (d/span {:className "description"}
                     title)
             (d/small {:className "pull-right timestamp"}
                      timestamp))))


(q/defcomponent Timeline
  "Timeline List"
  [items mode]
  (d/div {:className "col-md-4 side-pane"}
         (d/div {:className "panel panel-default timeline"}
                (d/div {:className "panel-heading"}
                       (d/h2 {:className "panel-title"}
                             "Recent events"))
                (apply d/ul {:className "list-group"}
                       (when-not (= mode :readonly)
                         (map Event items))))))
