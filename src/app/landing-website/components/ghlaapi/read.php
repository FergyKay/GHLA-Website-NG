<?php
/**
 * Returns the list of policies.
 */
require 'database.php';

$article = [];

$sqlabout = "SELECT * FROM tblarticle WHERE articleid ='GL6yO5' ";
$sqlarticle = "SELECT * FROM tblarticle WHERE articletype= 'News' ORDER BY artdate DESC LIMIT 3 ";


if ( $result2 = mysqli_query($con,$sqlarticle))
{
  $j = 3;
  $result1 = mysqli_query($con, $sqlabout);
  $row1 = mysqli_fetch_assoc($result1);
  
    $article[$j]['id']    = $row1['articleid'];
    $article[$j]['title'] = $row1['articletitle'];
    $article[$j]['article'] = $row1['article'];
    $article[$j]['description'] = $row1['artdescription'];
    $article[$j]['date'] = $row1['artdate'];
    $article[$j]['type'] = $row1['articletype'];
    // $article[$j]['adminid'] = $row1['adminid'];
  
  $i = 0;
  while($row = mysqli_fetch_assoc($result2))
  {
    $article[$i]['id']    = $row['articleid'];
    $article[$i]['title'] = $row['articletitle'];
    $article[$i]['article'] = $row['article'];
    $article[$i]['description'] = $row['artdescription'];
    $article[$i]['date'] = $row['artdate'];
    $article[$i]['type'] = $row['articletype'];
    // $article[$i]['adminid'] = $row['adminid'];
    $i++;
  }

    
  echo json_encode($article);
}
else
{
  http_response_code(404);
}