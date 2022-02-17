<?php

class Size {

    public $ID;
    public $ProductId;
    public $sizesInStock; 
    public $size; 

    function __construct($id, $productId, $sizesInStock, $size) {
        $this->ID = $id;
        $this->ProductId = $productId;
        $this->sizesInStock = $sizesInStock;
        $this->size = $size;
    }

}

?>