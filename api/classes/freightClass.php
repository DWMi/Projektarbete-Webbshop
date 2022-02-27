<?php

    class FreightOption {

        public $ID;
        public $ShippingType;
        public $ShippingCost;

        function __construct($id, $type, $cost) {
            $this->ID = $id;
            $this->ShippingType = $type;
            $this->ShippingCost = $cost;
        }



    }




?>