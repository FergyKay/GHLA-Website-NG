<?php
/**
 * Returns the list of policies.
 */
require 'database.php';
// $email=$_POST["e"];

$article = [];

$resultemail=$con->query("SELECT email FROM tblarticle WHERE email = 'mawulidakudzie@yahoo.com");
if($row = $resultemail->fetch_assoc()){

 //////

  if($row == 0)
  {
    $resultnletter=$conn->query("INSERT INTO tblnewsletter (email) VALUES ('$email')");
    
    // echo json_encode($article);
    http_response_code('inserted', 200);
  }
  else 
  {
    http_response_code('exiists', 400);
  }
}else{
  http_response_code('error found', 404);
}
