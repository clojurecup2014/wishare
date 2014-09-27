(ns wishare.core)

(def state (atom 0))

(.setInterval js/window
 (fn [] (swap! state
              (fn [x]
                (let [el (.getElementById js/document "animation")]
                  (set! (.-textContent el)
                        ({0 "(o  )..(o  )"
                          1 "( o )..( o )"
                          2 "(  o)..(  o)"
                          3 "( o )..( o )"} x))
                  (if (< x 3) (inc x) 0)))))
 500)
