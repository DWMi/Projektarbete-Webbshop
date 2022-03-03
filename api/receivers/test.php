<?php

if($_SERVER["REQUEST_METHOD"] == "POST") {
            
    if($_GET["action"] == "acceptAdminRequest") {
        
        echo json_encode(true);
        
    }



}

?>