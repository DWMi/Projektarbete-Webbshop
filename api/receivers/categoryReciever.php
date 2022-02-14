<?php

    try {

        include_once("../controllers/categoryController.php");

        if($_SERVER["REQUEST_METHOD"] == "GET") {

            if($_GET["action"] == "getAll") {
                $categoryController = new CategoryController();
                echo json_encode($categoryController->getAll());
                exit;
            }

            if($_GET["action"] == "getAllById") {
                $categoryController = new CategoryController();
                echo json_encode($categoryController->getAllProductsByCategory((int)$_GET["id"]));
                exit;
            }

            if($_GET["action"] == "getById") {
                $categoryController = new CategoryController();
                echo json_encode($categoryController->getById((int)$_GET["id"]));
                exit;
            }


        }





    } catch (Exception $e) {
        error_log($e);
    }



?>