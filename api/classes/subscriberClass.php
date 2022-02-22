<?php

class Subscriber {
    public $ID;
    public $Email;


    function __construct($id, $email) {
        $this->ID = $id;
        $this->Email = $email;

    }
}

?>