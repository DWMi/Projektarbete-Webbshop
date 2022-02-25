<?php

include_once("../controllers/mainController.php");

class CartController extends MainController {

    function __construct() {
        parent::__construct("cart", "cart");
    }

    function cartReturn(){

        if(isset($_SESSION["cart"])) {
            return $_SESSION["cart"];
        }
        else {
            return false;
        }

    }

    function addCart($newCartItems){

        if(isset($_SESSION["cart"])) {

            $cart = $_SESSION["cart"];

            foreach((array)$newCartItems as $key => $product) {

                $foundIndex = array_search($product["ID"], array_column($cart, "ID"));

                if($foundIndex === false){
                    $product["Quantity"] = 1;
                    array_push($cart, $product);
                } else {
                    $cart[$foundIndex]["Quantity"] += 1;
                }

            }

        } else {

            $cart = [];
            foreach((array)$newCartItems as $key => $product) {

                $product["Quantity"] = 1;
                array_push($cart, $product);

            }

        }

        $_SESSION["cart"] = $cart;
        return true;

    }

    function quantityMinus($cartItem) {

        $cart = $_SESSION["cart"];

        $foundIndex = array_search($cartItem["ID"], array_column($cart, "ID"));

        $cart[$foundIndex]["Quantity"] -= 1;

        $_SESSION["cart"] = $cart;
        return true;

    }

    function quantityPlus($cartItem) {

        $cart = $_SESSION["cart"];

        $foundIndex = array_search($cartItem["ID"], array_column($cart, "ID"));

        $cart[$foundIndex]["Quantity"] += 1;

        $_SESSION["cart"] = $cart;
        return true;

    }

    function removeCartItem($cartItem) {

        $cart = $_SESSION["cart"];

        $foundIndex = array_search($cartItem["ID"], array_column($cart, "ID"));

        array_splice($cart, $foundIndex, 1); 

        $_SESSION["cart"] = $cart;
        return true;

    }




}





?>