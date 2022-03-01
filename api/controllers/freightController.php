<?php

    include_once("../controllers/mainController.php");
    include_once("../classes/freightClass.php");

    class FreightController extends MainController {

        private $createFunction = "createFreightOption";

        function __construct() {
            parent::__construct("shipping", "shipping");
        }


        public function getAll() {
            return $this->database->fetchAll($this->createFunction);
        }




    }















?>