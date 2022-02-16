<?php

include_once("../classes/createInstanceFunctions.php");
include_once("../controllers/mainController.php");
include_once("../controllers/sizeController.php");
include_once("../controllers/imageController.php");

class ProductController extends MainController {

    private $createFunction = "createProduct";

    function __construct() {
        parent::__construct("product", "product");
    }

    public function getAll(){
        $products = $this->database->fetchAll($this->createFunction);

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

    public function getById($id){

        return $this->database->fetchById($id, $this->createFunction);

    }


    public function newProduct($product){

        return $product;



    }


}



?>