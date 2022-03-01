<?php

include_once("../controllers/mainController.php");
include_once("../classes/databaseClass.php");
include_once("../classes/createInstanceFunctions.php");

class ChangeCategoryController extends MainController {
    //lägg till klass
    //skapa en funktion i instancefunktion
    /* private $createFunction = "createCategory"; */
    private $createFunction = "createProductInCategory";

    function __construct() {
        parent::__construct("productincategory", "productincategory");
    }
    public function getAll(){

        return $this->database->fetchAll($this->createFunction);
    }

    public function allCategoryInProduct($id){
        $query = "SELECT product.ID, product.ProductName, product.ProductDescription, product.ProductPrice FROM productincategory INNER JOIN product ON ProductID = product.ID WHERE CategoryID = " . $id . ";";
        $products = $this->database->freeQuery($query, "createProduct");
    }

    public function addCategory($list){
        //insert
        
        $productId = $list[0][productId];
        $currentCategoryId = $list[1][currentCategoryId];
        $addCategoryId = $list[2][addCategoryId];
        
        $products = $this->database->fetchAll($this->createFunction);
       

        $addNewCategory = new ProductInCategory($productId, $addCategoryId); 

        $newCategory = $this->database->insert($addNewCategory);
        
        return  $products; 
        
    }
    public function changeCategory($list){
        //freequer
        $productId = $list[0][productId];
        $currentCategoryId = $list[1][currentCategoryId];
        $changeCategoryId = $list[2][changeCategoryId];
        return $changeCategoryId;
    }
    public function changeAndAddCategory($list){
        //insert
        //freequer
        $productId = $list[0][productId];
        $currentCategoryId = $list[1][currentCategoryId];
        $addCategoryId = $list[2][addCategoryId];
        $changeCategoryId = $list[3][changeCategoryId];
        return $addCategoryId . $changeCategoryId ;
    }
}
    //testing
   /*  public function getAllProductsByCategory($id) {
        $query = "SELECT product.ID, product.ProductName, product.ProductDescription, product.ProductPrice FROM productincategory INNER JOIN product ON ProductID = product.ID WHERE CategoryID = " . $id . ";";
        $products = $this->database->freeQuery($query, "createProduct"); */
?>