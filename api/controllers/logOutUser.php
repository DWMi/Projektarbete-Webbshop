<?php

session_start();
if(isset($_SERVER['REQUEST_METHOD'])) {
   
    if($_SERVER['REQUEST_METHOD'] === 'DELETE') {

        if (isset($_SESSION["loggedInAdmin"]) || isset($_SESSION["loggedInUser"])) {
           unset($_SESSION["loggedInAdmin"]);
           unset($_SESSION["loggedInUser"]);
           session_destroy();

           echo json_encode(true);
    }else {
        echo json_encode(false);
    }
}
}
?> 