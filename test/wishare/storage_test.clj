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
(expect #{["jhon@coolmail.com" "Jhon"]}
        (with-redefs [conn (create-empty-im-memory-db )]
          (do
            (add-user "Jhon"  "jhon@coolmail.com")
            (find-all-users))))

;;Adding one user with one wish shoould allow us to fild that wish for that user
(expect #{"Bike"}
        (with-redefs [conn (create-empty-im-memory-db)]
          (do
            (add-user "Jhon" "jhon@coolmail.com")
            (add-wish "jhon@coolmail.com" "jhon@coolmail.com" "Bike" "Cool bike" :url "http://mysite.com")
            (->> (find-wish-for-user "jhon@coolmail.com")
                 (map :title)
                 set
                 ))))



;; Adding multiple users and wishes should allow us to find the pets for a particular user
(expect #{"Knife" "Kitty"}
        (with-redefs [conn (create-empty-im-memory-db)]
          (do
            (add-user "Jhon" "jhon@coolmail.com")
            (add-wish "jhon@coolmail.com" "jhon@coolmail.com" "Bike" "Cool bike" :url "http://mysite.com")
            (add-wish "jhon@coolmail.com" "jhon@coolmail.com" "Pen" "A pen with spiderman!" :url "http://amazon.com/cool-spiderman-pen")
            (add-user "Paul" "paul@maol.com")
            (add-wish "paul@maol.com" "paul@maol.com" "Kitty" "Fliffy flyffy" :url "http://howtocookacat.com")
            (add-wish "paul@maol.com" "paul@maol.com" "Knife" "The big one" :url "http://howtocookacat.com")
            (set (map :title (find-wish-for-user "paul@maol.com") ) ))))

(expect #{}
        (with-redefs [conn (create-empty-im-memory-db)]
          (do
            (add-user "Jhon" "jhon@coolmail.com")
            (add-wish "jhon@coolmail.com" "jhon@coolmail.com" "Bike" "Cool bike" :url "http://mysite.com")
            (add-wish "jhon@coolmail.com" "jhon@coolmail.com" "Pen" "A pen with spiderman!" :url "http://amazon.com/cool-spiderman-pen")
            (set (map :title (find-offered-wish-for-user "jhon@coolmail.com") ) ))))

(expect #{"Pen"}
        (with-redefs [conn (create-empty-im-memory-db)]
          (do
            (add-user "Jhon" "jhon@coolmail.com")
            (add-user "Paul" "paul@maol.com")
            (add-wish "jhon@coolmail.com" "jhon@coolmail.com" "Bike" "Cool bike" :url "http://mysite.com")
            (add-wish "jhon@coolmail.com" "paul@maol.com" "Pen" "A pen with spiderman!" :url "http://amazon.com/cool-spiderman-pen")
            (set (map :title (find-offered-wish-for-user "jhon@coolmail.com"))))))


(expect #{"Steve" "Jhon" "Paul"}
        (with-redefs [conn (create-empty-im-memory-db)]
          (do
            (add-user "Jhon" "jhon@coolmail.com")
            (add-user "Paul" "paul@maol.com")
            (add-user "Steve" "steve@chachacha.org")
            (add-user "Morgan" "some twitter id")

            (add-friend "jhon@coolmail.com" "paul@maol.com")
            (add-friend "steve@chachacha.org" "jhon@coolmail.com")

            (->> (find-friends "jhon@coolmail.com")
                 (map get-user-by-id)
                 (apply vector)
                 (map :real-name)
                 set
                 ))))

(expect "Jhon"
        (with-redefs [conn (create-empty-im-memory-db)]
          (do
            (add-user "Jhon" "jhon@coolmail.com")
            (->> (get-user-by-id "jhon@coolmail.com")
                 :real-name))))
