<?php

class Orders {
    public $ID;
    public $UserId;
    public $ShippingId;
    public $DateCreated;
    public $OrderStatus;

    function __construct($id, $userId, $shippingId, $dateCreated, $orderStatus) {
        $this->ID = $id;
        $this->UserId = $userId;
        $this->ShippingId = $shippingId;
        $this->DateCreated = $dateCreated;
        $this->OrderStatus = $orderStatus;
    }

}


?>