<?php
session_start();
error_reporting(0);
header("Access-Control-Allow-Origin: *");
$servername = "creativearts.db.11793723.69c.hostedresource.net";
$username = "creativearts";
$password = "Creative@1";
$dbname = "creativearts";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
?>