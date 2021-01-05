<?php

require(__DIR__ . '/BienesIntelCost.php');
require(__DIR__ . '/bd.php');

$mysqli = new mysqli($bd_host, $bd_user, $bd_password, $bd_bd);

$bd_result = $mysqli->query("SELECT * FROM BienesGuardados");
$result = [];

$data = new BienesIntelCost();

while ($fila = $bd_result->fetch_assoc()) {
    foreach ($data->filter(null,null) as $i){
        if($i['Id'] == $fila['bienes_id']){
            $result[] = $i;
        }
    }
}
header('Content-type: application/json');
echo json_encode($result);