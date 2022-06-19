<?php

include __DIR__ . '/game_data.php';

$filterKey = $_GET['query'];
$response = $gameData[$filterKey];

$response_json = json_encode($response);

header("Access-Control-Allow-Origin: *"); //CORS
header('Content-Type: application/json');

echo $response_json;
?>