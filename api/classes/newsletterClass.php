<?php

class Newsletter {
    public $ID;
    public $Title;
    public $Description;


    function __construct($id, $title, $description) {
        $this->ID = $id;
        $this->Title = $title;
        $this->Description = $description;



    }
}

?>