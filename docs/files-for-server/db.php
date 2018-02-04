<?php
/* Database connection settings */
$server = '185.119.174.179';
$username = 'lybhy';
$password = 'udacitywall';
$database_name = 'udacitywall';
$mysqli = new mysqli($server,$username,$password,$database_name) or die($mysqli->error);

$result = $mysqli->query("SELECT * FROM users");

$user = $result->fetch_assoc();

echo $user['name'];
