<?php


    try {

        include_once("../controllers/orderController.php");

        session_start();
        if($_SERVER["REQUEST_METHOD"] == "POST") {

            if($_GET["action"] == "newOrder") {

            if(isset($_SESSION["loggedInUser"]) || isset($_SESSION["loggedInAdmin"])){

                $body = json_decode($_POST["cart"], true);

                $orderController = new OrderController();

                echo json_encode($orderController->newOrder($body));

            }

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