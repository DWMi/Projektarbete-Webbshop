<?php

    // Här ska alla endpoints kollas och tas vidare. 


    try {

        include_once("../controllers/productController.php");

        if($_SERVER["REQUEST_METHOD"] == "GET") {

            if($_GET["action"] = "getAll"){

                $controller = new ProductController();

                echo json_encode($controller->getAll());
                exit;
            }



        }


    } catch (Exception $e){
        error_log($e);
    }






?>