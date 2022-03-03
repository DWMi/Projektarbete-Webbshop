<?php

    try {
        session_start();
        include_once("../controllers/productController.php");

        if($_SERVER["REQUEST_METHOD"] == "GET") {

            if($_GET["action"] == "getAll") {
                $productController = new ProductController();
                echo json_encode($productController->getAll());
                exit;
            }

            if($_GET["action"] == "getById") {
                $productController = new ProductController();
                echo json_encode($productController->getById((int)$_GET["id"]));
            }

        }

        if($_SERVER["REQUEST_METHOD"] == "POST") {
            if(isset($_SESSION["loggedInAdmin"]) ){
                include_once("../controllers/fileController.php");

                if($_GET["action"] == "newProduct") {

                    $body = json_decode($_POST["product"], true);

                    $productController = new ProductController();
                    echo json_encode($productController->newProduct($body));

                }

                if($_GET["action"] == "checkImage") {

                    $uploadStatus = checkImage($_FILES["image"]);

                    echo json_encode($uploadStatus);

                }

                if($_GET["action"] == "uploadImage") {


                    $uploadStatus = uploadImage($_FILES["image"], "PRODUCTS/");

                    echo json_encode($uploadStatus);

                }

                if($_GET["action"] == "updateStock") {

                    $body = json_decode($_POST["sizes"], true);

                    $productController = new ProductController();

                    echo json_encode($productController->updateStock($body));

                }
            }else{
                echo json_encode("Unauthorized");
            }
            
        }
        
        if($_SERVER["REQUEST_METHOD"] == "DEL"){
            if(isset($_SESSION["loggedInAdmin"]) ){

                if($_GET["action"] == "deleteProduct") {

                    $body = json_decode($_POST["product"], true);

                    

                    $productController = new ProductController();

                    echo json_encode($productController->deleteProduct($body));

                }
            }else{
                echo json_encode("Unauthorized");
            }
        }


    } catch (Exception $e){
        error_log($e);
    }






?>