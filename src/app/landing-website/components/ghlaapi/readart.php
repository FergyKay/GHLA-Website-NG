<?php

require 'database.php';

$id = $_GET['id'];
$article = [];

$sqlarticle = "SELECT * FROM tblarticle WHERE articleid ='$id' ";

if ($result2 = mysqli_query($con, $sqlarticle))
{   
  
  $row = mysqli_fetch_assoc($result2);
  
    $article['id']    = $row['articleid'];
    $article['title'] = $row['articletitle'];
    $article['article'] = $row['article'];
    $article['description'] = $row['artdescription'];
    $article['date'] = $row['artdate'];
    $article['type'] = $row['articletype'];
    
    
    
  echo json_encode($article);
}
else
{
  http_response_code(404);
}