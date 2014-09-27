(ns wishare.storage-test
  (:require [expectations :refer :all]
            [wishare.storage :refer :all]
            [datomic.api :as d]))

(defn create-empty-im-memory-db []
  (let [uri "datomic:mem://wishare-db"]
    (d/delete-database uri)
    (d/create-database uri)
    (let [conn (d/connect uri)
          schema (load-file "resources/datomic/schema.edn")]
      (d/transact conn schema)
      conn)))

;; Adding one owner should allow up to find that owner
(expect #{["Jhon"]}
        (with-redefs [conn (create-empty-im-memory-db )]
        (do
          (add-user "Jhon")
          (find-all-users))))
