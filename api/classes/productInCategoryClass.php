<?php 

    Class ProductInCategory {
        public $ProductId;
        public $CategoryId;

        function __construct($productId, $categoryId) {
            $this->ProductId = $productId;
            $this->CategoryId = $categoryId;
        }
    }
    Class CategoryInProduct {
        public $CategoryId;
        public $ProductId;
        public $CategoryName;
        public $CategoryIMG;

        function __construct($categoryId,$productId, $categoryName,$categoryIMG) {
            $this->CategoryId = $categoryId;
            $this->ProductId = $productId;
            $this->CategoryName = $categoryName;
            $this->CategoryIMG = $categoryIMG;
        }
    }
?>