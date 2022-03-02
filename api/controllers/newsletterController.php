<?php

    include_once("../classes/createInstanceFunctions.php");
    include_once("../controllers/mainController.php");
    include_once("../classes/newsletterClass.php");
    include_once("../classes/subscriberClass.php");


    class NewsletterController extends MainController {

        private $createFunction = "createNewsletter";

        function __construct() {
            parent::__construct("newsletter", "newsletter");
        }

        public function getAll(){
            return $this->database->fetchAll($this->createFunction);
        }


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

    class SubscriberController extends MainController {

        private $createFunction = "createSubscriber";


        function __construct() {
            parent::__construct("subtonewsletter", "subtonewsletter");
        }

        public function getAll(){
            return $this->database->fetchAll($this->createFunction);
        }

        public function getById($id){}

        public function getByIdNewsletterId($id) {
            return $this->database->fetchById($id, $this->createFunction);
        }
        
            
        function newSubscriber($newSubscriber){
    
        $subscriberInformation = $newSubscriber[0];
        $subscriberName = $subscriberInformation[name];
        $subscriberEmail = $subscriberInformation[email];
    
        $subscriber = new Subscriber(null, $subscriberName, $subscriberEmail);
    
            $subscriberId = $this->database->insert($subscriber);            
            
            if (!$subscriberId) {
                return "You are already subscribed to our newsletter.";
            }
        return "You have subscribed to our newsletter!";
    }

    public function showEmailSubs() {
        return $this->database->fetchAll($this->createFunction);
    }

    public function showNameSubs() {
        return $this->database->fetchAll($this->createFunction);
    }

    }




?>

