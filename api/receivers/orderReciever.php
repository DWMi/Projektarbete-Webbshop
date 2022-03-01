<?php

include_once("../controllers/orderController.php");

if(isset($_SERVER['REQUEST_METHOD'])) {

    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        

        if($_GET["action"] == "getOrders") {

            $orderController = new OrderController();
            $userID = json_decode($_POST["userID"], true);
            echo json_encode($orderController->getOrders($userID));
           

        } else {

            echo json_encode(false);
        }

    }

}




?>