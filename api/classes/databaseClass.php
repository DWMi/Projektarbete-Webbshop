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
        $query = $this->db->prepare("SELECT * FROM `users`");
        $query->execute();
        $result = $query->fetchAll(PDO::FETCH_FUNC, $createInstanceFunction);
        return $result;

    }

}


?>