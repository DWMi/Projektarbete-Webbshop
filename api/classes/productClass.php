<?php

class Product {
    public $ProductId;
    public $ProductName;
    public $ProductDescription;
    public $ProductPrice;

    function __construct($id, $name, $description, $price) {
        $this->ProductID = $id;
        $this->ProductName = $name;
        $this->ProductDescription = $description;
        $this->ProductPrice = $price;
    }
}


?>