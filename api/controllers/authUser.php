<?php

session_start();

if(isset($_SERVER['REQUEST_METHOD'])) {
   
    if($_SERVER['REQUEST_METHOD'] === 'GET') {
        
        if (isset($_SESSION["loggedInUser"])) {
         
             $userObj = unserialize($_SESSION["loggedInUser"]);
             echo json_encode($userObj);

     } else {
         echo json_encode(false);
     }




    
   
}

}
?> 