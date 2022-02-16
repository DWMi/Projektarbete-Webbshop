<?php

    include_once("../classes/createInstanceFunctions.php");
    include_once("../controllers/mainController.php");

    class ImageController extends MainController {

        private $createFunction = "createImage";

        function __construct() {
            parent::__construct("images", "images");
        }

        public function getAll(){
            return $this->database->fetchAll($this->createFunction);
        }

        public function getById($id){}

        public function getByIdProductId($id) {
            return $this->database->fetchById($id, $this->createFunction);
        }

        public function newProduct($image) {
            return $this->database->insertWithForeignKey($image);
        }

    }



?>