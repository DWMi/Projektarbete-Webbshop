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



}


?>
