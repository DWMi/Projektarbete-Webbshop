<?php


class Order {

    public $ID;
    public $UserID;
    public $ShippingID;
    public $DateCreated;
    public $OrderStatus;

    function __construct($id, $userId, $shippingId, $dateCreated, $orderStatus) {
        $this->ID = $id;
        $this->UserID = $userId;
        $this->ShippingID = $shippingId;
        $this->DateCreated = $dateCreated;
        $this->OrderStatus = $orderStatus;
    }

}

class OrderDetails {

    public $ProductID;
    public $OrderID;
    public $SizesID;
    public $OrderDetailsPrice;
    public $OrderDetailsQuantity;

    function __construct($productId, $orderId, $sizesId, $orderDetailsPrice, $orderDetailsQuantity) {
        $this->ProductID = $productId;
        $this->OrderID = $orderId;
        $this->SizesID = $sizesId;
        $this->OrderDetailsPrice = $orderDetailsPrice;
        $this->OrderDetailsQuantity = $orderDetailsQuantity;
    }


}








?>