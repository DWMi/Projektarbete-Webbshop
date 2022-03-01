<?php 

Class Category {

    public $ID;
    public $CategoryName;
    public $CategoryDescription;
    public $CategoryIMG;
    public $CategoryBackGround;

    function __construct($id, $categoryName, $categoryDescription, $categoryImg, $categoryBackground){
        $this->ID = $id;
        $this->CategoryName = $categoryName;
        $this->CategoryDescription = $categoryDescription;
        $this->CategoryIMG = $categoryImg;
        $this->CategoryBackGround = $categoryBackground;
    }

}

?>