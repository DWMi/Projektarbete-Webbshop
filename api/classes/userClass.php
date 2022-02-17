<?php 

class User {
    public $UserID;
    public $UserEmail;
    public $UserPassword;
    public $UserRegisterDate;
    public $UserFirstName;
    public $UserLastName;
    public $Newsletter;
    public $TermsConditions;
    public $UserIsAdmin;
    public $UserCountry;
    public $UserCity;
    public $UserStreet;
    public $UserZipCode;
    

    function __construct($UserID, $UserEmail, $UserPassword, $UserRegisterDate,
         $UserFirstName,  $UserLastName, $Newsletter, $TermsConditions, $UserIsAdmin,
         $UserCountry, $UserCity,  $UserStreet, $UserZipCode) {
        
        $this->UserID = $UserID;
        $this->UserEmail = $UserEmail;
        $this->UserPassword = $UserPassword;
        $this->UserRegisterDate = $UserRegisterDate;
        $this->UserFirstName = $UserFirstName;
        $this->UserLastName = $UserLastName;
        $this->Newsletter = $Newsletter;
        $this->TermsConditions = $TermsConditions;
        $this->UserIsAdmin = $UserIsAdmin;
        $this->UserCountry = $UserCountry;
        $this->UserCity = $UserCity;
        $this->UserStreet = $UserStreet;
        $this->UserZipCode = $UserZipCode;


    }
}



?>