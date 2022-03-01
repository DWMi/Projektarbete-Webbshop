<?php

    try {
        include_once("../controllers/categoryController.php");
        include_once("../controllers/changeCategoryController.php");
        include_once("../controllers/productInCategoryController.php");

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
            
          
            if($_GET["action"] == "gettAllCategoryInProduct") {
                
                $CategoryController = new CategoryController();
                echo json_encode($CategoryController->gettAllCategoryInProduct((int)$_GET["id"]));
                exit; 
            }

        }

       
        if($_SERVER["REQUEST_METHOD"] == "POST"){
            
            if($_GET["action"] == "addCategoryByProductId"){
                $body = json_decode($_POST["addCategory"], true);

                $ProductInCategoryController = new ProductInCategoryController();
                echo json_encode($ProductInCategoryController->addCategory($body));
                
            }
          
        }
        if($_SERVER["REQUEST_METHOD"] == "DEL"){

            if($_GET["action"] == "deleteCategoryByProductId") {
                
                $ProductInCategoryController = new ProductInCategoryController();
                echo json_encode($ProductInCategoryController->delCategoryByProductId((int)$_GET["id"],(int)$_GET["categoryId"]));
                exit; 
            }
        }



    } catch (Exception $e) {
        error_log($e);
    }



?>