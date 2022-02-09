<?php

    // Här ska alla endpoints kollas och tas vidare. 


    try {

        include_once("../controllers/productController.php");
        include_once("../controllers/imageController.php");

        if($_SERVER["REQUEST_METHOD"] == "GET") {

            if($_GET["action"] = "getAll"){
                $productController = new ProductController();
                echo json_encode($productController->getAll());
                exit;
            }



        }


    } catch (Exception $e){
        error_log($e);
    }






?>