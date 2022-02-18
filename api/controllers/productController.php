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

        $product = $this->database->fetchById($id, $this->createFunction);

        $imageController = new ImageController();
        $images = $imageController->getAll();

        $sizeController = new SizeController();
        $sizes = $sizeController->getAll();


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

        return $product;

    }



    public function newProduct($newProduct){

        $productInformation = $newProduct[0];
        $productName = $productInformation[name];
        $productDescription = $productInformation[description];
        $productPrice = $productInformation[price];

        $product = new ProductToBeAdded(null, $productName, $productDescription, $productPrice);

        $productId = $this->database->insert($product);

        $sizeInformation = $newProduct[1];

        foreach((array)$sizeInformation as $key => $sizes) {

            foreach((array)$sizes as $key => $value) {
                if ($key == "stock") {
                    $stock = $value;
                }
                if ($key == "size") {
                    $size = $value;
                }

            }

            $size = new Size(null, $productId, $stock, $size);

            $sizeController = new SizeController();
            $return = $sizeController->newProduct($size);

        }

        $images = $newProduct[2];

        foreach((array)$images as $object => $image) {

            foreach((array)$image as $key => $value) {
                if($key == "imgType"){
                    $imgType = $value;
                }
                if($key == "src") {
                    $imgSrc = $value;
                }
            }

            $image = new Image(null, $productId, $imgType, $imgSrc);

            $imageController = new ImageController();
            $return = $imageController->newProduct($image);

        }

        return $productId;

    }


}



?>