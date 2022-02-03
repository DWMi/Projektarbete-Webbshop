<?php

include_once("../classes/createInstanceFunctions.php");
include_once("../controllers/mainController.php");

class ProductController extends MainController {

    private $createFunction = "createProduct";

    function __construct() {
        parent::__construct("product", "product");
    }

    public function getAll(){
        return $this->database->fetchAll($this->createFunction);
    }

}



?>