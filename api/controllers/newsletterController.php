<?php

    include_once("../classes/createInstanceFunctions.php");
    include_once("../controllers/mainController.php");
    include_once("../classes/newsletterClass.php");

    class NewsletterController extends MainController {

        private $createFunction = "createNewsletter";

        function __construct() {
            parent::__construct("newsletter", "newsletter");
        }

        public function getAll(){
            return $this->database->fetchAll($this->createFunction);
        }

        public function getById($id){}

        public function getByIdNewsletterId($id) {
            return $this->database->fetchById($id, $this->createFunction);
        }

        public function newNewsletter($newNewsletter){
    
            $newsLetterInformation = $newNewsletter[0];
            $newsLetterName = $newsLetterInformation[name];
            $newsLetterDescription = $newsLetterInformation[description];

    
            $newsletter = new Newsletter(null, $newsLetterName, $newsLetterDescription);
    
             $newsletterId = $this->database->insert($newsletter);            
    
            return $newsletterId;
    
        }

    }




?>

