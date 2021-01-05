<?php

require(__DIR__ . '/BienesIntelCost.php');

if($_SERVER['REQUEST_METHOD'] == 'GET'){
    $city = null;
    $type = null;

    if(!empty($_REQUEST['ciudad'])){
        $city = $_REQUEST['ciudad'];
    }

    if(!empty($_REQUEST['tipo'])){
        $type = $_REQUEST['tipo'];
    }



    header('Content-type: application/json');

    $data = new BienesIntelCost();
    echo json_encode($data->filter($city, $type));
}