<?php

require(__DIR__ . '/BienesIntelCost.php');

if($_SERVER['REQUEST_METHOD'] == 'GET'){
    header('Content-type: application/json');

    $data = new BienesIntelCost();
    echo json_encode($data->showCities());
}