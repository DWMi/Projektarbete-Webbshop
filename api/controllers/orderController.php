<?php

    include_once("../classes/createInstanceFunctions.php");
    include_once("../controllers/mainController.php");

    class OrderController extends MainController {

        private $createFunction = "createOrder";

        function __construct() {
            parent::__construct("orders", "order");
        }

        public function getOrders($userID){

            $result = $this->database->fetchOrders($userID, $this->createFunction);
            return $result;
        }


    

    }



?>