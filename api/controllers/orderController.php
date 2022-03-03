<?php

    include_once("../classes/createInstanceFunctions.php");
    include_once("../controllers/orderDetailsController.php");
    include_once("../controllers/mainController.php");
    include_once("../classes/orderClass.php");
    include_once("../classes/databaseClass.php");

    class OrderController extends MainController {

        private $createFunction = "createOrder";

        function __construct() {
            parent::__construct("orders", "order");
        }

        public function getOrders($id){
            $query = "SELECT ID, UserID, ShippingID, DateCreated, OrderStatus, SUM(orderdetails.OrderDetailsPrice) AS TotalPrice FROM `orders` INNER JOIN orderdetails ON orders.ID = orderdetails.orderID WHERE UserID = $id GROUP BY ID";
            $result = $this->database->freeQuery($query, "createOrderMyPages");
            return $result;
        }

        public function sendOrderReceived($id){
            $query = "UPDATE orders SET OrderStatus = 'Received' WHERE ID = $id";
            $result = $this->database->freeQuery($query, null);
            return $result;
        }

        public function sendOrderSent($id){
            $query = "UPDATE orders SET OrderStatus = 'Sent' WHERE ID = $id";
            $result = $this->database->freeQuery($query, null);
            return $result;
        }

        public function getAllOrder(){

            return $this->database->fetchAll($this->createFunction);

        }

        public function newOrder($cart) {

            session_start();

            $userId = $this->getUserId();

            $shippingId = $cart[0][ID];

            $orderStatus = "Placed";

            $order = new Order(null, $userId, $shippingId, null, $orderStatus);

            $orderId = $this->database->insert($order);

            foreach((array)$cart as $key => $product) {

                if(!$key == 0) {

                    $productId = $product["ProductId"];
                    $sizesId = $product["ID"];
                    $price = $product["Price"];
                    $quantity = $product["Quantity"];

                    $orderDetails = new OrderDetails($productId, $orderId, $sizesId, $price, $quantity);
                    $orderDetailsController = new OrderDetailsController();

                    $orderDetailsController->newOrderDetails($orderDetails);

                    $query = "UPDATE size SET SizesInStock = SizesInStock-" . $quantity .  " WHERE ID = " . $sizesId . ";";
                    $result = $this->database->freeQuery($query, null);

                }

            }

        unset($_SESSION["cart"]);

        return $orderId;

    }

    public function getUserId() {

        if (isset($_SESSION["loggedInUser"])) {
            $user = unserialize($_SESSION["loggedInUser"]);
            return $user[0]->ID;
        } 
        else if (isset($_SESSION["loggedInAdmin"])) {
            $user = unserialize($_SESSION["loggedInAdmin"]);
            return $user[0]->ID;
        }

    }


    

}













?>