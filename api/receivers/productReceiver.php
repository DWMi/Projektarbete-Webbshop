<?php

    try {

        include_once("../controllers/productController.php");

        if($_SERVER["REQUEST_METHOD"] == "GET") {

            if($_GET["action"] == "getAll") {
                $productController = new ProductController();
                echo json_encode($productController->getAll());
                exit;
            }

        }

        if($_SERVER["REQUEST_METHOD"] == "POST") {

            $body = json_decode($_POST["product"], true);
            
            $productInformation = $body[0];
            $sizeInformation = $body[1];
            $images = $body[2];
            
            // new product
            // insert product och få tillbaka id´t

            // new image och insert med loop från productController? 
            // insert bildernas src.
            // kolla om det går bra annars ta bort produkten igen.

            // new size och insert med loop?
            // insert sizes.
            // kolla om det går bra annars ta bort bilder och produkten??


            echo json_encode($productInformation);
            // $productController = new ProductController();
            // echo json_encode($productController->newProduct($product));

        }


    } catch (Exception $e){
        error_log($e);
    }






?>