<?php


include_once("../classes/productClass.php");

function createProduct($id, $name, $description, $price) {
    return new Product((int)$id, $name, $description, $price);
}


include_once("../classes/imageClass.php");

function createImage($id, $imageType, $imageSrc) {
    return new Image((int)$id, $imageType, $imageSrc);
}


include_once("../classes/sizeClass.php");

function createSize($id, $productId, $sizesInStock, $size) {
    return new Size((int)$id, $productId, $sizesInStock, $size);
}



?>