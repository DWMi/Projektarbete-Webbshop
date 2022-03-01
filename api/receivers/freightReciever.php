<?php

    include_once("../controllers/freightController.php");

    try {

        if($_SERVER["REQUEST_METHOD"] == "GET") {

            if($_GET["action"] == "getAll") {
                $freightController = new FreightController();
                echo json_encode($freightController->getAll());
                exit;
            }

        }



    } catch (Exception $e) {
        error_log($e);
    }









?>