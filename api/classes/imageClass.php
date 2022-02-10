<?php

class Image {

    public $ProductId;
    public $ImageType;
    public $ImageSrc; 

    function __construct($id, $imageType, $imageSrc) {
        $this->ProductId = $id;
        $this->ImageType = $imageType;
        $this->ImageSrc = $imageSrc;
    }

}

?>