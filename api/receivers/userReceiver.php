<?php

session_start();


include_once("../controllers/userController.php");
include_once("../controllers/authAdmin.php");
include_once("../controllers/authUser.php");





if(isset($_SERVER['REQUEST_METHOD'])) {

    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        

        if(isset($_POST['user'])){
             

            $controller = new UserController();
            
            $controller->checkUserExists(json_decode($_POST["user"]));

            if($controller->checkUserExists(json_decode($_POST["user"])) === true) {
                echo json_encode(true);
            } else {
                 echo(json_encode($controller->addUser(json_decode($_POST["user"]))));
            } 

            
            exit; 
            
        }

        if(isset($_POST['userLogIn'])){


            $controller = new UserController();
            
            $controller->logInUser(json_decode($_POST["userLogIn"])); 

             if($controller->logInUser(json_decode($_POST["userLogIn"])) == true) {
               
                $controller->checkUserAdmin(json_decode($_POST["userLogIn"])); 
                echo json_encode(true);
                

            } 

      
            
            else {
                echo json_encode(false); 
            } 
              
            
            exit;
          
           
            
        } 

    }
            
       
}




?>