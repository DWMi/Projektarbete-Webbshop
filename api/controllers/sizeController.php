<?php

    include_once("../classes/createInstanceFunctions.php");
    include_once("../controllers/mainController.php");

    class SizeController extends MainController {

        private $createFunction = "createSize";

        function __construct() {
            parent::__construct("size", "size");
        }

        public function getAll(){
            return $this->database->fetchAll($this->createFunction);
        }

        public function getById($id){}

        public function getByIdProductId($id) {
            return $this->database->fetchById($id, $this->createFunction);
        }

        public function newProduct($size) {
            return $this->database->insertWithForeignKey($size);
        }

    }



?>