<?php

include_once("../classes/productClass.php");

function createProduct($id, $name, $description, $price) {
    return new Product((int)$id, $name, $description, $price);
}


?>