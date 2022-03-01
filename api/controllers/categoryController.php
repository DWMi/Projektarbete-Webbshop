<?php

include_once("../classes/createInstanceFunctions.php");
include_once("../controllers/mainController.php");
include_once("../controllers/imageController.php");
include_once("../controllers/sizeController.php");

class CategoryController extends MainController {

    private $createFunction = "createCategory";

    function __construct() {
        parent::__construct("category", "category");
    }

    public function getAll() {
        return $this->database->fetchAll($this->createFunction);
    }

    public function getById($id) {
        return $this->database->fetchById($id, $this->createFunction);
    }

    public function addCategory($body){
        
        $category = new Category(null, $body[1]["name"], $body[1]["description"], $body[0][0]["src"], $body[0][1]["src"]);
        return $this->database->insert($category);
    }

    public function getAllProductsByCategory($id) {
        $query = "SELECT product.ID, product.ProductName, product.ProductDescription, product.ProductPrice FROM productincategory INNER JOIN product ON ProductID = product.ID WHERE CategoryID = " . $id . ";";
        $products = $this->database->freeQuery($query, "createProduct");

        $imageController = new ImageController();
        $images = $imageController->getAll();

        $sizeController = new SizeController();
        $sizes = $sizeController->getAll();

        foreach((array)$products as $key => $product) {

            $imageList = [];
            foreach((array)$images as $key => $image){
                if($product->ProductId == $image->ProductId){
                    array_push($imageList, $image);
                }
            }

            $sizeList = [];
            foreach((array)$sizes as $key => $size){
                if($product->ProductId == $size->ProductId){
                    array_push($sizeList, $size);
                }
            }

            $product->Images = $imageList;
            $product->Sizes = $sizeList;
        }

        return $products;

    }

}


?>