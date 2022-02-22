<?php

    try {

        include_once("../controllers/newsletterController.php");

        if($_SERVER["REQUEST_METHOD"] == "GET") {

            if($_GET["action"] == "getAll") {
                $subscriberController = new SubscriberController();
                echo json_encode($subscriberController->getAll());
                exit;
            }

            if($_GET["action"] == "getById") {
                $subscriberController = new SubscriberController();     
                echo json_encode($subscriberController->getById((int)$_GET["id"]));
            }

        }

        if($_SERVER["REQUEST_METHOD"] == "POST") {

            $body = json_decode($_POST["subtonewsletter"], true);
            $subscriberController = new SubscriberController();
            echo json_encode($subscriberController->newSubscriber($body));

        }


    } catch (Exception $e){
        error_log($e);
    }






?>