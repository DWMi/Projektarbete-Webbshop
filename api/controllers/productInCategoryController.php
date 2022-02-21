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

}

?>