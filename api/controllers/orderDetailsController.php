<?php

include_once("../controllers/mainController.php");


class OrderDetailsController extends MainController {

    private $createFunction = "createOrderDetails";

    function __construct() {
        parent::__construct("orderdetails", "orderdetails");
    }

    public function newOrderDetails($entity) {
        $this->database->insert($entity);
    }


}

?>