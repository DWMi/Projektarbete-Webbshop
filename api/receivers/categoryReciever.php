<?php

    try {
        include_once("../controllers/categoryController.php");
        include_once("../controllers/fileController.php");
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
            

            if($_GET["action"] == "addCategory"){
                $body = json_decode($_POST["category"], true);

                $changeCategoryController = new CategoryController();
                echo json_encode($changeCategoryController->addCategory($body));
            } 

            if($_GET["action"] == "checkLogoImage") {

                $uploadStatus = checkImage($_FILES["image"], "1.LOGOS/");
        
                echo json_encode($uploadStatus);
        
            }

            if($_GET["action"] == "checkBackgroundImage") {
        
                $uploadStatus = checkImage($_FILES["image"], "Backgrounds/");
        
                echo json_encode($uploadStatus);
        
            }
        
            if($_GET["action"] == "uploadLogoImage") {
        
        
                $uploadStatus = uploadImage($_FILES["image"], "1.LOGOS/");
        
                echo json_encode($uploadStatus);
        
            }

            if($_GET["action"] == "uploadBackgroundImage") {
        
        
                $uploadStatus = uploadImage($_FILES["image"], "Backgrounds/");
        
                echo json_encode($uploadStatus);
        
            }
    }


        


            





    } catch (Exception $e) {
        error_log($e);
    }



?>