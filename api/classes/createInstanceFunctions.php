<?php


include_once("../classes/productClass.php");

function createProduct($id, $name, $description, $price) {
    return new Product((int)$id, $name, $description, $price);
}


include_once("../classes/imageClass.php");

function createImage($id, $productId, $imageType, $imageSrc) {
    return new Image((int)$id, $productId, $imageType, $imageSrc);
}


include_once("../classes/sizeClass.php");

function createSize($id, $productId, $sizesInStock, $size) {
    return new Size((int)$id, $productId, (int)$sizesInStock, $size);
}


include_once("../classes/categoryClass.php");

function createCategory($id, $categoryName, $categoryDescription, $categoryImg) {
    return new Category((int)$id, $categoryName, $categoryDescription, $categoryImg);
}

// CREATES A NEW USER FROM THE UserClass
include_once("../classes/userClass.php");

function createUser($UserID, $UserEmail, $UserPassword, $UserRegisterDate, $UserFirstName, $UserLastName,
$Newsletter, $TermsConditions, $UserIsAdmin,  $UserCountry, $UserCity,  $UserStreet, $UserZipCode) {
    
    return new User((int)$UserID, $UserEmail, $UserPassword, (int)$UserRegisterDate, $UserFirstName, $UserLastName,
    (int)$Newsletter, (int)$TermsConditions, (int)$UserIsAdmin,  $UserCountry, $UserCity,  $UserStreet, $UserZipCode);
} 


?>