<?php

    try {

        include_once("../controllers/newsletterController.php");

        if($_SERVER["REQUEST_METHOD"] == "GET") {

            if($_GET["action"] == "getAll") {
                $newsletterController = new NewsletterController();
                echo json_encode($newsletterController->getAll());
                exit;
            }

            if($_GET["action"] == "getById") {
                $newsletterController = new NewsletterController();     
                echo json_encode($newsletterController->getById((int)$_GET["id"]));
            }

        }

        if($_SERVER["REQUEST_METHOD"] == "POST") {

            $body = json_decode($_POST["newsletter"], true);
            
            
            $newsletterController = new NewsletterController();
            echo json_encode($newsletterController->newNewsletter($body));

        }


    } catch (Exception $e){
        error_log($e);
    }






?>