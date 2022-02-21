<?php

function checkImage($image){
    $target_dir = "../../ASSETS/PRODUCTS/";
    $target_file = $target_dir . basename($image["name"]);
    // php generate random string på namnet
    $file_type = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

    $check = getimagesize($image["tmp_name"]);
    if(!$check) {
        return "notAnImage";
    } else if(file_exists($target_file)) {
        return "existingFile";
    } else if($image["size"] > 5000000) {
        return "fileSize";
    } else if($file_type != "jpg" && $file_type != "png" && $file_type != "jpeg" && $file_type != "gif") {
        return "format";
    } else {
        return $image;
    }

}

function uploadImage($image) {

    $target_dir = "../../ASSETS/PRODUCTS/";
    // HASHA INNAN MAN TAR IN NAMNET?? basename image name är vad som ska hashas. 
    $target_file = $target_dir . basename($image["name"]);

    $uploadStatus = move_uploaded_file($image["tmp_name"], $target_file);
    if($uploadStatus) {
        return true;
    } else {
        return "error";
    }
}

?>