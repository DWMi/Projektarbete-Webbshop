<?php

class Subscriber {
    public $ID;
    public $Name;
    public $Email;


    function __construct($id, $name, $email) {
        $this->ID = $id;
        $this->Name = $name;
        $this->Email = $email;

    }
}

?>