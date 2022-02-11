<?php 

Class Category {

    public $CategoryId;
    public $CategoryName;
    public $CategoryDescription;
    public $CategoryImg;

    function __construct($id, $categoryName, $categoryDescription, $categoryImg){
        $this->CategoryId = $id;
        $this->CategoryName = $categoryName;
        $this->CategoryDescription = $categoryDescription;
        $this->CategoryImg = $categoryImg;
    }

}

?>