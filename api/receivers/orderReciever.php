<?php


    try {

        include_once("../controllers/orderController.php");
        if($_SERVER["REQUEST_METHOD"] == "POST") {

            if($_GET["action"] == "newOrder") {

                $body = json_decode($_POST["cart"], true);

                $orderController = new OrderController();

                echo json_encode($orderController->newOrder($body));

            }


        }



    } catch (Exception $e) {
        error_log($e);
    }









?>