<?php

class Image {
    public $ID;
    public $ProductId;
    public $ImageType;
    public $ImageSrc; 

    function __construct($id, $productId, $imageType, $imageSrc) {
        $this->ID = $id;
        $this->ProductId = $productId;
        $this->ImageType = $imageType;
        $this->ImageSrc = $imageSrc;
    }

}

?>