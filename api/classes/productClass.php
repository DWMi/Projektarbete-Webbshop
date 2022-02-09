<?php

class Product {
    public $ProductId;
    public $ProductName;
    public $ProductDescription;
    public $ProductPrice;
    public $Images;
    public $Sizes;

    function __construct($id, $name, $description, $price) {
        $this->ProductId = $id;
        $this->ProductName = $name;
        $this->ProductDescription = $description;
        $this->ProductPrice = $price;
    }
}


?>