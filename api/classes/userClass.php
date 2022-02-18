<?php 

class User {
    public $ID;
    public $UserEmail;
    public $UserPassword;
    public $UserRegisterDate;
    public $UserFirstName;
    public $UserLastName;
    public $Newsletter;
    public $TermsConditions;
    public $UserIsAdmin;
    public $AdminRequest;
    public $UserCountry;
    public $UserCity;
    public $UserStreet;
    public $UserZipCode;
    

    function __construct($ID, $UserEmail, $UserPassword, $UserRegisterDate,
         $UserFirstName,  $UserLastName, $Newsletter, $TermsConditions, $UserIsAdmin, $AdminRequest,
         $UserCountry, $UserCity,  $UserStreet, $UserZipCode) {
        
        $this->ID = $ID;
        $this->UserEmail = $UserEmail;
        $this->UserPassword = $UserPassword;
        $this->UserRegisterDate = $UserRegisterDate;
        $this->UserFirstName = $UserFirstName;
        $this->UserLastName = $UserLastName;
        $this->Newsletter = $Newsletter;
        $this->TermsConditions = $TermsConditions;
        $this->UserIsAdmin = $UserIsAdmin;
        $this->AdminRequest = $AdminRequest;
        $this->UserCountry = $UserCountry;
        $this->UserCity = $UserCity;
        $this->UserStreet = $UserStreet;
        $this->UserZipCode = $UserZipCode;


    }
}



?>