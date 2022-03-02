<?php


    try {

        include_once("../controllers/orderController.php");

        if($_SERVER["REQUEST_METHOD"] == "POST") {

            if($_GET["action"] == "newOrder") {

                $body = json_decode($_POST["cart"], true);
                //echo json_encode($body);
                $orderController = new OrderController();

                echo json_encode($orderController->newOrder($body));

            }

            if($_GET["action"] == "getOrders") {

                $orderController = new OrderController();
                $userID = json_decode($_POST["userID"], true);
                echo json_encode($orderController->getOrders($userID));

            } 

            if($_GET["action"] == "sendOrderReceived") {

                $orderController = new OrderController();
                $orderID = json_decode($_POST["orderID"], true);
                echo json_encode($orderController->sendOrderReceived($orderID));
              

            } 

            
        }

        if($_SERVER["REQUEST_METHOD"] == "GET"){

            if($_GET["action"] == "getAllOrder") {
                $orderController = new OrderController();
                echo json_encode($orderController->getAllOrder());

            } 

        }   

    } catch (Exception $e) {
        error_log($e);
    }






?>