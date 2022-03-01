<?php

include_once("../classes/createInstanceFunctions.php");
include_once("../controllers/mainController.php");

class ProductInCategoryController extends MainController {

    private $createFunction = "createProductInCategory";

    function __construct() {
        parent::__construct("productincategory", "productincategory");
    }

    public function insert($combination){
        $this->database->insert($combination);
    }
    public function delCategoryByProductId($productId,$categoryId){
        $query = "DELETE FROM `productincategory` WHERE ProductID = " . $productId . " AND CategoryID = " . $categoryId . ";";
        $category = $this->database->freeQuery($query, "createProductInCategory");
        return $category;
        
    }
    public function addCategory($list){
        $productId = $list[0];
        $addCategoryId = $list[1];   
        $products = $this->database->fetchAll($this->createFunction);
        $addNewCategory = new ProductInCategory($productId, $addCategoryId); 
        $newCategory = $this->database->insert($addNewCategory);
        
        return $products;  
        
    }
}

?>