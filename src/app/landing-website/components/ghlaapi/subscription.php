<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$host = "localhost";
$db_name = "ghlaweb";
$username = "root";
$password = "password";
  
try {
    $con = new PDO("mysql:host={$host};dbname={$db_name}", $username, $password);
}
  
// show error
catch(PDOException $exception){
    echo "Connection error: " . $exception->getMessage();
}


if($_POST){

  // include database connection
  
  try{
  
  // insert query
  $query = "INSERT INTO tblnewsletter SET email=:name";
  // prepare query for execution
  $stmt = $con->prepare($query);
  // posted values
  $email = $_POST['email'];
  
  // bind the parameters
  $stmt->bindParam(':name', $email);
  // Execute the query
  if($stmt->execute()){
      echo json_encode(array('result'=>'success'));
  }else{
      echo json_encode(array('result'=>'fail'));
  }
  }
  // show error
  catch(PDOException $exception){
  die('ERROR: ' . $exception->getMessage());
  }
  }