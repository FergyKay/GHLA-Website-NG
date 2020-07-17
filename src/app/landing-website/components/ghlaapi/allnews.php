<?php
/**
 * Returns the list of policies.
 */
require 'database.php';

$allnews = [];


$sqlarticle = "SELECT * FROM tblarticle WHERE articletype= 'News' ORDER BY artdate DESC";


if ( $result2 = mysqli_query($con,$sqlarticle))
{  
  $i = 0;
  while($row = mysqli_fetch_assoc($result2))
  {
    $allnews[$i]['id']    = $row['articleid'];
    $allnews[$i]['title'] = $row['articletitle'];
    $allnews[$i]['article'] = $row['article'];
    $allnews[$i]['description'] = $row['artdescription'];
    $allnews[$i]['date'] = $row['artdate'];
    $allnews[$i]['type'] = $row['articletype'];
    // $article[$i]['adminid'] = $row['adminid'];
    $i++;
  }

    
  echo json_encode($allnews);
}
else
{
  http_response_code(404);
}