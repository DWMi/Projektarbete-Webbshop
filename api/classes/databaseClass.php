<?php 

class Database {

    public $db;
    public $selectedTable;
    public $selectedClass;


    function __construct($table, $class) {

        $dns = "mysql:host=localhost;dbname=webbshop";
        $user = "root";
        $password = "root";

        $this->db = new PDO($dns, $user, $password);
        $this->db->exec("set names utf8");

        $this->selectedTable = $table;
        $this->selectedClass = $class;

    }

    public function fetchAll($createInstanceFunction) {
        // This query is only for a test. We need to update this query for future updates.
        $query = $this->db->prepare("SELECT * FROM " . $this->selectedTable . ";");
        $query->execute();
        $result = $query->fetchAll(PDO::FETCH_FUNC, $createInstanceFunction);
        return $result;

    }

    public function fetchById($id, $createInstanceFunction){
        $query = $this->db->prepare("SELECT * FROM " . $this->selectedTable . "WHERE ID = " . $id . ";");
        $query->execute();
        $result = $query->fetchAll(PDO::FETCH_FUNC, $createInstanceFunction);
        return $result;
    }

}

// QUERY SOM HÄMTAR ALLT SELECT * FROM `product` INNER JOIN size ON product.productID = size.ProductID INNER JOIN images ON product.productID = images.ProductID WHERE product.productID = 3
// SELECT * FROM `product` INNER JOIN size ON product.productID = size.ProductID INNER JOIN images ON product.productID = images.ProductID WHERE product.productID = 3 AND images.ImageType  = 1
// Göra flera querys från controller och inte från klienten

?>