<?php


    try {
        session_start();
        include_once("../controllers/cartController.php");

        if($_SERVER["REQUEST_METHOD"] == "GET") {

            if($_GET["action"] == "getCart") {

                $cartController = new CartController();
                echo json_encode($cartController->cartReturn());

            }

        }

        if($_SERVER["REQUEST_METHOD"] == "POST") {

            if($_GET["action"] == "addCart") {

                $body = json_decode($_POST["cart"], true);

                $cartController = new CartController();
                echo json_encode($cartController->addCart($body));


            } 
            
            if($_GET["action"] == "minus") {

                $body = json_decode($_POST["cartItem"], true);

                $cartController = new CartController();
                echo json_encode($cartController->quantityMinus($body));

            } 
            
            if($_GET["action"] == "plus") {

                $body = json_decode($_POST["cartItem"], true);

                $cartController = new CartController();
                echo json_encode($cartController->quantityPlus($body));

            } 
            
            if($_GET["action"] == "removeItem") {

                $body = json_decode($_POST["cartItem"], true);

                $cartController = new CartController();
                echo json_encode($cartController->removeCartItem($body));

            }


        }



    } catch(Exception $e) {
        error_log($e);
    }









?>