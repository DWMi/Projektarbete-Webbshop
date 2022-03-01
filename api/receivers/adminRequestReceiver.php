<?php

include_once("../controllers/adminRequestController.php");


if(isset($_SERVER['REQUEST_METHOD'])) {

    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        

        if(isset($_POST['adminRequest'])){
             
 
            $controller = new adminRequestController();
            
            echo json_encode($controller->sendAdminRequest(json_decode($_POST["adminRequest"])));
            error_log($userObj[0]);
    
         
        } else {
            echo json_encode(false);
        }

        exit;

    }    
}

?>