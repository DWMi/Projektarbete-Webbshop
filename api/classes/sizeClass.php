<?php

class Size {

    public $SizeId;
    public $ProductId;
    public $SizesInStock; 
    public $Size; 

    function __construct($id, $productId, $sizesInStock, $size) {
        $this->SizeId = $id;
        $this->ProductId = $productId;
        $this->SizesInStock = $sizesInStock;
        $this->Size = $size;
    }

}

?>