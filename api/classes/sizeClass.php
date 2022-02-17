<?php

class Size {

    public $ID;
    public $ProductId;
    public $SizesInStock; 
    public $Size; 

    function __construct($id, $productId, $sizesInStock, $size) {
        $this->ID = $id;
        $this->ProductId = $productId;
        $this->SizesInStock = $sizesInStock;
        $this->Size = $size;
    }

}

?>