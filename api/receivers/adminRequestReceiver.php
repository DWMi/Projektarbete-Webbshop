<?php
session_start();
include_once("../controllers/adminRequestController.php");




    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        

        if(isset($_POST['adminRequest'])){
             
 
            $controller = new adminRequestController();
            
            echo json_encode($controller->sendAdminRequest(json_decode($_POST["adminRequest"])));
            error_log($userObj[0]);
    
         
        } 

        
        if($_GET["action"] === "acceptAdminRequest"){
             
            $userID = json_decode($_POST["userID"], true);
 
            $controller = new adminRequestController();
            
            echo json_encode($controller->acceptAdminRequest($userID));
            
    
         
        } 

    } 



    



    
    if($_SERVER['REQUEST_METHOD'] === 'GET') {
        
    if(isset($_SESSION["loggedInAdmin"]) ){    
        if($_GET["action"] == "getAdminRequests"){
             
 
            $controller = new adminRequestController();
            
            echo json_encode($controller->getAdminRequests());
            
    
         
        } 
        
    }else{
        echo json_encode("Unauthorized");
    }
       

    }



?>