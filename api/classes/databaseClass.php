<?php 

include_once("../classes/createInstanceFunctions.php");

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

    public function insert($entity) {

        $columns = "";
        $values = [];
        $questionmark = "";

        foreach((array)$entity as $key => $value) {
            if($key != "ID"){
                $columns .= $key . ",";
                $questionmark .=  "?,";
                array_push($values, $value);
            }

        } 

        $columns = substr($columns, 0, -1);
        $questionmark = substr($questionmark, 0, -1);

        $query = $this->db->prepare("INSERT INTO ". $this->selectedTable ." (" . $columns . ") VALUES ($questionmark)");
        $status = $query->execute($values);

        if (!$status) {
            return false;
        }

        // Returns the last inserted ID for further inserting to other tables.
        return $this->db->lastInsertId();

    }

    public function insertWithForeignKey($entity){


        $columns = "";
        $values = [];

        foreach((array)$entity as $key => $value) {
            if($key != "ID"){
                $columns .= $key . ",";
                array_push($values, $value);
            }

        } 

        $columns = substr($columns, 0, -1);

        $query = $this->db->prepare("INSERT INTO ". $this->selectedTable ." (" . $columns . ") VALUES (?,?,?)");
        $query->execute($values);

    }


    public function freeQuery($freeQuery, $createInstanceFunction) {
        $query = $this->db->prepare($freeQuery);
        $query->execute();
        $result = $query->fetchAll(PDO::FETCH_FUNC, $createInstanceFunction);
        return $result;
    }


    // USER AND LOGIN QUERIES

    public function fetchUser($email, $createInstanceFunction) {

        $query = $this->db->prepare("SELECT * FROM " . $this->selectedTable . " WHERE UserEmail=" .  $email .  ";"  );
        $query->execute();
        $result = $query->fetchAll(PDO::FETCH_FUNC, $createInstanceFunction);

        error_log(json_encode($result));

        return $result; 
        
    }



    public function getUserEmail($email){
        $query = $this->db->prepare("SELECT * FROM " . $this->selectedTable . " WHERE UserEmail=" . $email . ";");
        $query->execute();
        return $query;
     
    }


    public function insertNewUser($user) {
        $columns = "";
        $values = [];

        foreach((array)$user as $key => $value) {
            if($key != "ID" && $key != "UserRegisterDate" ) {
                $columns .= $key . ",";
                array_push($values, $value);
            }
        }



        $columns = substr($columns, 0, -1);

        $query = $this->db->prepare("INSERT INTO ". $this->selectedTable ." (" .$columns. ") VALUES (?,?,?,?,?,?,?,?,?,?,?)");
        $query->execute($values);

      
        return "New " . $this->selectedClass . " saved!";

        
        
    }

    public function insertNewsLetter($email){
        $query = $this->db->prepare("INSERT INTO subtonewsletter(`Email`) VALUES ($email)");
        $query->execute();
    }


    public function updateAdminRequestRow($id, $adminReq){
         
        $query = $this->db->prepare("UPDATE users SET AdminRequest = $adminReq WHERE ID = $id");
        $query->execute();
        return true;

    }

    public function fetchOrders($userID, $createInstanceFunction){
        $query = $this->db->prepare("SELECT * FROM " . $this->selectedTable . " WHERE UserID=" .  $userID .  ";"  );
        $query->execute();
        $result = $query->fetchAll(PDO::FETCH_FUNC, $createInstanceFunction);
        return $result;
    }

    // freeQuery som bara ger tillbaka en assosiativ lista


}

?>