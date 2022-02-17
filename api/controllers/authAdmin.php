<?php

session_start();

if(isset($_SERVER['REQUEST_METHOD'])) {
   
    if($_SERVER['REQUEST_METHOD'] === 'GET') {
        
        if (isset($_SESSION["loggedInAdmin"])) {
         
             $userObj = unserialize($_SESSION["loggedInAdmin"]);
             echo json_encode($userObj);
            
             
            /*  echo json_encode(true); */
     } else {
         echo json_encode(false);
     }




    
   
}

}
?> 
