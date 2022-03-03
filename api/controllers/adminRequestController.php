<?php 

include_once("../classes/createInstanceFunctions.php");
include_once("../controllers/mainController.php");


class adminRequestController extends MainController {

    private $createFunction = "createUser";

    function __construct() {
        parent::__construct("users", "user");
    }


public function sendAdminRequest($adminRequestValues){
    $result = $this->database->updateAdminRequestRow($adminRequestValues->ID, $adminRequestValues->AdminRequest);
    return true;
    
}

public function getAdminRequests(){
    $query = "SELECT * FROM users WHERE AdminRequest = 1";
    $result = $this->database->freeQuery($query, "createUser");
    return $result;
}


public function acceptAdminRequest($id){
    $query = "UPDATE users SET AdminRequest = '0', UserIsAdmin = '1' WHERE ID = $id";
    $result = $this->database->freeQuery($query, null);
    return $result;
}





}


?>
