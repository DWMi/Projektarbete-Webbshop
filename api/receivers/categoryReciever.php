<?php

    try {
        include_once("../controllers/categoryController.php");
        include_once("../controllers/changeCategoryController.php");
       

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
            
            if($_GET["action"] == "getAllProductsInCategory") {
                
                $productInCategoryController = new ChangeCategoryController();
                echo json_encode($productInCategoryController->getAll());
                exit; 
            }
            

        }

       
        if($_SERVER["REQUEST_METHOD"] == "POST"){
            
            if($_GET["action"] == "addCategory"){
                $body = json_decode($_POST["changeOrAddCategory"], true);

                $changeCategoryController = new ChangeCategoryController();
                echo json_encode($changeCategoryController->addCategory($body));
                
            }
            if($_GET["action"] == "changeCategory"){
                $body = json_decode($_POST["changeOrAddCategory"], true);

                $changeCategoryController = new ChangeCategoryController();
                echo json_encode($changeCategoryController->changeCategory($body));
            }
            if($_GET["action"] == "changeAndAddCategory"){
                $body = json_decode($_POST["changeOrAddCategory"], true);

                $changeCategoryController = new ChangeCategoryController();
                echo json_encode($changeCategoryController->changeAndAddCategory($body));
            }
        }




    } catch (Exception $e) {
        error_log($e);
    }



?>