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
        $query = $this->db->prepare("SELECT * FROM " . $this->selectedTable . ";");
        $query->execute();
        $result = $query->fetchAll(PDO::FETCH_FUNC, $createInstanceFunction);
        return $result;
    }

    public function fetchById($id, $createInstanceFunction){
        $query = $this->db->prepare("SELECT * FROM " . $this->selectedTable . " WHERE ID = " . $id . ";");
        $query->execute();
        $result = $query->fetchAll(PDO::FETCH_FUNC, $createInstanceFunction);
        return $result[0];
    }

    public function freeQuery($freeQuery, $createInstanceFunction) {
        $query = $this->db->prepare($freeQuery);
        $query->execute();
        $result = $query->fetchAll(PDO::FETCH_FUNC, $createInstanceFunction);
        return $result;
    }

}

?>