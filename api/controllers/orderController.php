<?php


include_once("../controllers/mainController.php");
include_once("../controllers/orderDetailsController.php");
include_once("../classes/orderClass.php");

class OrderController extends MainController {

    private $createFunction = "createOrder";

    function __construct() {
        parent::__construct("orders", "orders");
    }

    public function newOrder($cart) {

        session_start();

        $userId = $this->getUserId();

        $shippingId = $cart[0][ID];

        $orderStatus = "orderPlaced";

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