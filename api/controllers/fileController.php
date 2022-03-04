<?php

function checkImage($image, $pathName){
    $target_dir = "../../ASSETS/" .$pathName;
    $target_file = $target_dir . basename($image["name"]);
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

function uploadImage($image, $pathName) {


    $target_dir = "../../ASSETS/" .$pathName;
    $target_file = $target_dir . basename($image["name"]);

    $uploadStatus = move_uploaded_file($image["tmp_name"], $target_file);
    if($uploadStatus) {
        return true;
    } else {
        return "error";
    }
}

?>