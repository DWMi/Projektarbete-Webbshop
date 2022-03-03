<?php

    try {
        session_start();
        include_once("../controllers/newsletterController.php");

        if($_SERVER["REQUEST_METHOD"] == "GET") {
            if(isset($_SESSION["loggedInAdmin"]) ){


                if($_GET["action"] == "getAll") {
                    $newsletterController = new NewsletterController();
                    echo json_encode($newsletterController->getAll());
                    exit;
                }
    
                if($_GET["action"] == "getById") {
                    $newsletterController = new NewsletterController();     
                    echo json_encode($newsletterController->getById((int)$_GET["id"]));
                }
    
                if($_GET["action"] == "showEmailSubs") {
                    $newsletterController = new SubscriberController();     
                    echo json_encode($newsletterController->showEmailSubs((int)$_GET["id"]));
                }
    
                if($_GET["action"] == "showNameSubs") {
                    $newsletterController = new SubscriberController();     
                    echo json_encode($newsletterController->showNameSubs((int)$_GET["id"]));
                }

            }else{
                echo json_encode("Unauthorized");
            }

        }
    
        if($_SERVER["REQUEST_METHOD"] == "POST") {
            if(isset($_SESSION["loggedInAdmin"]) ){


                if($_GET["action"] == "newNewsletter") {
                    $body = json_decode($_POST["newsletter"], true);
                    
                    
                    $newsletterController = new NewsletterController();
                    echo json_encode($newsletterController->newNewsletter($body));
                }

            }else{
                echo json_encode("Unauthorized");
            }
        }


    } catch (Exception $e){
        error_log($e);
    }






?>