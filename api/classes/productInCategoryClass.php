<?php 

    Class ProductInCategory {
        public $ProductId;
        public $CategoryId;

        function __construct($productId, $categoryId) {
            $this->ProductId = $productId;
            $this->CategoryId = $categoryId;
        }
    }

?>