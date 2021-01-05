<?php

require(__DIR__ . '/BienesIntelCost.php');
require(__DIR__ . '/bd.php');

if($_SERVER['REQUEST_METHOD'] == 'POST'){

    if(!empty($_REQUEST['bienes_id'])){
        $bienes_id = $_REQUEST['bienes_id'];
        $mysqli = new mysqli($bd_host, $bd_user, $bd_password, $bd_bd);

        $bd_result = $mysqli->query("SELECT * FROM BienesGuardados WHERE bienes_id=".$bienes_id);

        if (mysqli_num_rows($bd_result)==0) {
            $mysqli->query("INSERT INTO BienesGuardados(bienes_id) VALUES (".$bienes_id.")");
        } 
    }

    header('Content-type: application/json');
    echo json_encode(["status" => "ok"]);
}