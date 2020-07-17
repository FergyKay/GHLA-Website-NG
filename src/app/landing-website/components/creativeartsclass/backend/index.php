<?php
include('../connection/conn.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="theme-color" content="#818667">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">
    <!-- TODO add manifest here -->
<link rel="manifest" href="manifest.json">
    <!-- Add to home screen for Safari on iOS -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="Weather PWA">
<link rel="apple-touch-icon" href="web/images/icons/icon-152x152.png">
<meta name="msapplication-TileImage" content="web/images/icons/icon-144x144.png">
<meta name="msapplication-TileColor" content="#2F3BA2">
<meta name="msapplication-TileColor" content="#FFFFFF">
<meta name="msapplication-TileImage" content="/favicon-144.png">
<meta name="msapplication-config" content="/browserconfig.xml"> 
<link rel="icon" href="../../../../favicon.ico">

<title>Creative Arts  Class - GhLA</title>

    
    
<!-- Bootstrap core CSS -->        
<link href="../assets/bootstrap-4.1.1/css/bootstrap.min.css" rel="stylesheet">
<link href="../assets/font-awesome/css/font-awesome.min.css" rel="stylesheet">
<link rel="stylesheet" href="../assets/pushy-master/css/demo.css">
<link rel="stylesheet" href=" ../assets/pushy-master/css/pushy.css">
<link rel="stylesheet" href="../assets/css/bd.styles.css">
<link rel="stylesheet" href="../assets/css/main.css">
<link rel="stylesheet" href="../assets/css/signin.css">
<link rel="stylesheet" type="text/css" href="../assets/dataTable/media/css/dataTables.bootstrap4.css">
<script src="../assets//jquery-ui-1.11.4.custom/jquery-1.11.2.min.js"></script>
<script src="../assets/jquery-ui-1.11.4.custom/external/jquery/jquery.js"></script>
<script  src="../assets/dataTable/media/js/jquery.dataTables.min.js"></script>
<script  src="../assets/dataTable/media/js/dataTables.bootstrap4.js"></script>
<link rel="stylesheet" href="../assets/tablesorter-master/css/theme.default.css">
<script type="text/javascript" src="../assets/tablesorter-master/docs/js/jquery-latest.min.js"></script>
<script type="text/javascript" src="../assets/tablesorter-master/js/jquery.tablesorter.js"></script>
<script type="text/javascript" src="../assets/tablesorter-master/js/jquery.tablesorter.widgets.js"></script>  
<script src="../assets/tablesorter-master/js/jquery-latest.min.js"></script>
<link rel="stylesheet" href="../assets/tablesorter-master/css/theme.blue.css">
<script src="../assets/tablesorter-master/js/jquery.tablesorter.js"></script>
<link rel="stylesheet" href="../assets/tablesorter-master/addons/pager/jquery.tablesorter.pager.css">
<script src="../assets/tablesorter-master/addons/pager/jquery.tablesorter.pager.js"></script>
<script src="../assets/tablesorter-master/js/jquery.tablesorter.widgets.js"></script>
<script src="../assets/tablesorter-master/js/jquery.tablesorter.widgets.configure.js"></script>
        
<script type="text/javascript" language="javascript" class="init">
$(document).ready(function(){    
$('#example').dataTable( {
  "pageLength": 10,
  "paging":   true,
  "ordering": true,
  //"info":     true
} );
    
});

</script>
        
</head>

<body>

<section>
<nav class="navbar navbar-expand-md navbar-light fixed-top" id='header'>

<div class='row'>
<div class='col-md-3'>
<!-- Menu Button -->
<div class="menu-btn" style='text-align:left;'>&#9776; Menu</div>
</div>

<div class='col-md-3'> 
<a href="" style='float:right; margin-top:-30px;'><img src="../tmhs/library/images/images/download.png" width="20px" /></a>
<i class='fa fa-arrow-right fa-1x' style='color:#fff2f2; margin-left:15px; float:right; display:none;' id='gradingg_forward'></i>
<i class='fa fa-arrow-right fa-1x' style='color:#fff2f2; margin-left:15px; float:right; display:none;' id='adminSettings_forward'></i>
    
<i class='fa fa-arrow-left fa-1x' style='color:#fff2f2; margin-top:0px; float:right; display:none;' id='gradingg_back'></i>
<i class='fa fa-arrow-left fa-1x' style='color:#fff2f2; margin-top:0px; float:right; display:none;' id='adminSettings_back'></i> 
</div>
</div>
</nav>    
</section>      
    
<?php
require_once('loader.php');    
?>     

   
    
    
<section id='body' style='display:none;'>  
        
<?php
require_once('mobile_menu.php');  
?>     
    
        <!-- Site Overlay -->
<div class="site-overlay"></div>
    
<div class='row text-center' id='navbar'>
<div class='col-md-12'>
<?php
require_once('desk_menu_top.php');    
?>  
</div>    
</div>
    
<div class='row text-center' id='main-content' style='margin-top:50px;'>
         
<div class='col-md-2' >
  
<div class='card' style="margin-top:0px; background:rgba(244, 244, 244, 0.91); width:221px;">
<div class='card-header' style='padding:0px; font-size:10px;'>
CREATIVE ARTS CLASS
</div>  
    
       
    
<div class='card-body'>
<div style="margin-bottom:10px;" >
<div id='logo'><a href=""><img src="../assets/img/ghlaLogo.png" width="50px" /></a><br><span style='font-weight: 300; font-size:10px;'>Ghana Library Authority</span><br><br></div>  
</div>    
    
<div class='row' style='margin-bottom:30px;'>
<div class='col-md-12' >
    
<?php 
$batch = isset($_POST['Batch']) ? $_POST['Batch'] : '';  
 

    


if(empty($batch) ){
echo "<div style='background: white; padding:30px 10px 20px 10px; margin-bottom:20px; border: 1px solid #a33131;'><h1 style='font-size:12px;'>SHOWING RESULTS FOR: </h1><h1 style='font-size:18px; font-weight:600; color:#743636;'>".Date('Y')." BATCH</h1></div><br>";
$year = date('Y');
echo $batch = $year." Batch";
}
elseif(!empty($batch)){  
echo "<div style='background: white; padding:30px 10px 20px 10px; margin-bottom:20px; border: 1px solid #a33131;'><h1 style='font-size:12px;'>SHOWING RESULTS FOR: </h1><h1 style='font-size:15px; font-weight:600; color:#743636;'>".$batch."</h1></div><br>";
$batch = isset($_POST['Batch']) ? $_POST['Batch'] : '';
}  

?>
    
    

<form class="form-horizontal" method="POST" action="" id='form_stock_list'>    
    
<div class='row' style="margin-top:-20px; width:400px;">  
<div class='col-md-6' style="text-align:center; margin-left:0px;">
<span>SEARCH BATCH</span>    
</div>
</div>    

    
<div class='row' style="margin-bottom:-5px; margin-top:50px; width:400px;">    
    
<div class='col-md-12' style="text-align:center; margin-left:0px;">
<div id='cat_date' style="margin-left:0px;">
<span >SELECT BATCH <span id='required_fields'>*</span></span>
</div>
<div class="mb-2" style="">
<div class="input-group" id='cat_dat'>

<div id='containe'> 
<label id='llabel'>   
<select id='select'  name="Batch"  style='width:190px;' required>
<?php
if(!empty($_POST['Batch'])){ 
echo "<option value='".$_POST['Batch']."'>".$_POST['Batch']."</option>";
}else{
echo "<option value=''>select here.....</option>";  
$query=mysqli_query($conn, "SELECT * FROM registration GROUP BY Batch"); 
while($spec=mysqli_fetch_assoc($query)){ 
echo "<option value='".$spec['Batch']."'>".$spec['Batch']."</option>";
}
}
?>

</select>    
</label>

</div>     
</div>
</div>    
</div>  
    
</div>
    

<div class="form-group" id='f' style="margin-top:-25px;">
<button type="submit" class="btn btn-primary btn-lg btn-block login-button" name='' id='submit_stock_list' style='width:100%; margin-left:2.5%;'>Search</button>
</div>
    
</form>
</div>
</div>
 
</div>

</div>
    
</div>   
    
<div class='col-md-10'>
  
<div class='card' style="margin-top:0px; background:rgba(244, 244, 244, 0.91); ">
<div class='card-header' style='padding:0px; font-size:10px;'>
CREATIVE ARTS CLASS
</div>  
    
       
    
<div class='card-body' style='padding:0px;'>

    
<div class='row' style='margin-bottom:0px;'>
<div class='col-md-12'>
 

</div>
</div>
    
<div>    
<?php 
  
$query=mysqli_query($conn, "SELECT COUNT(*) AS TOTAL FROM registration WHERE  Gender = 'Male' AND Class = 'Primary 1' AND Batch = '$batch'"); 
while($spec=mysqli_fetch_assoc($query)){ 
$primary1_boys = $spec['TOTAL'];
}
    
$query=mysqli_query($conn, "SELECT COUNT(*) AS TOTAL FROM registration WHERE  Gender = 'Female' AND Class = 'Primary 1' AND Batch = '$batch'"); 
while($spec=mysqli_fetch_assoc($query)){ 
$primary1_girls = $spec['TOTAL'];
}
    
$query=mysqli_query($conn, "SELECT COUNT(*) AS TOTAL FROM registration WHERE  Class = 'Primary 1' AND Batch = '$batch'"); 
while($spec=mysqli_fetch_assoc($query)){
$primary1_total = $spec['TOTAL']; 
}        
    
$query=mysqli_query($conn, "SELECT COUNT(*) AS TOTAL FROM registration WHERE  Gender = 'Male' AND Class = 'Primary 2' AND Batch = '$batch'"); 
while($spec=mysqli_fetch_assoc($query)){ 
$primary2_boys = $spec['TOTAL'];
}
    
$query=mysqli_query($conn, "SELECT COUNT(*) AS TOTAL FROM registration WHERE  Gender = 'Female' AND Class = 'Primary 2' AND Batch = '$batch'"); 
while($spec=mysqli_fetch_assoc($query)){ 
$primary2_girls = $spec['TOTAL'];
}
    
$query=mysqli_query($conn, "SELECT COUNT(*) AS TOTAL FROM registration WHERE  Class = 'Primary 2' AND Batch = '$batch'"); 
while($spec=mysqli_fetch_assoc($query)){
$primary2_total = $spec['TOTAL'];     
}
    
$query=mysqli_query($conn, "SELECT COUNT(*) AS TOTAL FROM registration WHERE  Gender = 'Male' AND Class = 'Primary 3' AND Batch = '$batch'"); 
while($spec=mysqli_fetch_assoc($query)){ 
$primary3_boys = $spec['TOTAL'];
}
    
$query=mysqli_query($conn, "SELECT COUNT(*) AS TOTAL FROM registration WHERE  Gender = 'Female' AND Class = 'Primary 3' AND Batch = '$batch'"); 
while($spec=mysqli_fetch_assoc($query)){ 
$primary3_girls = $spec['TOTAL'];
}
    
$query=mysqli_query($conn, "SELECT COUNT(*) AS TOTAL FROM registration WHERE  Class = 'Primary 3' AND Batch = '$batch'"); 
while($spec=mysqli_fetch_assoc($query)){ 
$primary3_total = $spec['TOTAL'];
}
    
$query=mysqli_query($conn, "SELECT COUNT(*) AS TOTAL FROM registration WHERE  Gender = 'Male' AND Class = 'Primary 4' AND Batch = '$batch'"); 
while($spec=mysqli_fetch_assoc($query)){ 
$primary4_boys = $spec['TOTAL'];
}
    
$query=mysqli_query($conn, "SELECT COUNT(*) AS TOTAL FROM registration WHERE  Gender = 'Female' AND Class = 'Primary 4' AND Batch = '$batch'"); 
while($spec=mysqli_fetch_assoc($query)){ 
$primary4_girls = $spec['TOTAL'];
}
    
$query=mysqli_query($conn, "SELECT COUNT(*) AS TOTAL FROM registration WHERE  Class = 'Primary 4' AND Batch = '$batch'"); 
while($spec=mysqli_fetch_assoc($query)){ 
$primary4_total = $spec['TOTAL'];
}
    
$query=mysqli_query($conn, "SELECT COUNT(*) AS TOTAL FROM registration WHERE  Gender = 'Male' AND Class = 'Primary 5' AND Batch = '$batch'"); 
while($spec=mysqli_fetch_assoc($query)){ 
$primary5_boys = $spec['TOTAL'];
}
    
$query=mysqli_query($conn, "SELECT COUNT(*) AS TOTAL FROM registration WHERE  Gender = 'Female' AND Class = 'Primary 5' AND Batch = '$batch'"); 
while($spec=mysqli_fetch_assoc($query)){ 
$primary5_girls = $spec['TOTAL'];
}
    
$query=mysqli_query($conn, "SELECT COUNT(*) AS TOTAL FROM registration WHERE  Class = 'Primary 5' AND Batch = '$batch'"); 
while($spec=mysqli_fetch_assoc($query)){ 
$primary5_total = $spec['TOTAL'];
}    
    
$query=mysqli_query($conn, "SELECT COUNT(*) AS TOTAL FROM registration WHERE  Gender = 'Male' AND Class = 'Primary 6' AND Batch = '$batch'"); 
while($spec=mysqli_fetch_assoc($query)){ 
$primary6_boys = $spec['TOTAL'];
}
    
$query=mysqli_query($conn, "SELECT COUNT(*) AS TOTAL FROM registration WHERE  Gender = 'Female' AND Class = 'Primary 6' AND Batch = '$batch'"); 
while($spec=mysqli_fetch_assoc($query)){ 
$primary6_girls = $spec['TOTAL'];
}
    
$query=mysqli_query($conn, "SELECT COUNT(*) AS TOTAL FROM registration WHERE  Class = 'Primary 6' AND Batch = '$batch'"); 
while($spec=mysqli_fetch_assoc($query)){ 
$primary6_total = $spec['TOTAL'];
}    
    
$query=mysqli_query($conn, "SELECT COUNT(*) AS TOTAL FROM registration WHERE  Batch = '$batch'"); 
while($spec=mysqli_fetch_assoc($query)){ 
$sum_total = $spec['TOTAL'];
}    
    
    
$query=mysqli_query($conn, "SELECT COUNT(*) AS TOTAL FROM registration WHERE PreferedLibrary = 'Greater Accra Central Library' AND Batch = '$batch'"); 
while($spec=mysqli_fetch_assoc($query)){ 
$total_GACL = $spec['TOTAL'];
}
    
$query=mysqli_query($conn, "SELECT COUNT(*) AS TOTAL FROM registration WHERE PreferedLibrary = 'Laterbiokorshie Library' AND Batch = '$batch'"); 
while($spec=mysqli_fetch_assoc($query)){ 
$total_LLL = $spec['TOTAL'];
}
    
$query=mysqli_query($conn, "SELECT COUNT(*) AS TOTAL FROM registration WHERE PreferedLibrary = 'Frafraha Library' AND Batch = '$batch'"); 
while($spec=mysqli_fetch_assoc($query)){ 
$total_FL = $spec['TOTAL'];
}
    
$query=mysqli_query($conn, "SELECT COUNT(*) AS TOTAL FROM registration WHERE PreferedLibrary = 'Teshie Library' AND Batch = '$batch'"); 
while($spec=mysqli_fetch_assoc($query)){ 
$total_TL = $spec['TOTAL'];
}
    
$query=mysqli_query($conn, "SELECT COUNT(*) AS TOTAL FROM registration WHERE PreferedLibrary = 'Airport Children’s Library' AND Batch = '$batch'"); 
while($spec=mysqli_fetch_assoc($query)){ 
$total_ACL = $spec['TOTAL'];
}
    
    
    
  
    

    

?>
</div>    
    
<div class='row' style="padding: 10px 20px 0px 20px;">
<div class='col-md-7'>
<table style='text-align:center;'>
<tr>
<th style='padding:6px;'>REPORT ON REGISTRATION</th>
</tr>    
</table>       

    
<div class='row text-center' style="padding: 5px 0px 20px 0px;">
        
<div  class='col-md-6'>
<table style='text-align:center;'>
<tr>
<th style='padding:6px; background: #f4f2f2; border: 1px solid #dedede;'>LOWER PRIMARY</th>
</tr>    
</table>   
    
    
    
<table style='text-align:center; background: white;'>
    
<tr style="color: #7c4040;">
<td style="text-align:left; padding: 6px; "></td>
<td style='border-left: 1px solid #e3e3e3; padding: 4px; text-align:center; background: #f4f2f2;'>Boys</td>
<td style='border-left: 1px solid #ffffff; padding: 4px; text-align:center; background: #f4f2f2;'>Girls</td>
<td style='border-left: 1px solid #ffffff; padding: 4px; text-align:center; background: #f4f2f2;'>Total</td>
</tr>      
    
    
<tr style="">
<td style=" text-align:left; padding: 6px;">PRIMARY 1</td>

<td style='border: 1px solid #e3e3e3; padding: 4px;'><?php echo $primary1_boys;?></td>
    
<td style='border: 1px solid #e3e3e3; padding: 4px;'><?php echo $primary1_girls;?></td>
<td style='border: 1px solid #e3e3e3; padding: 4px;'><?php echo $primary1_total;?></td>
</tr>   
    
<tr style="">
<td style=" text-align:left; padding: 6px;">PRIMARY 2</td>

<td style='border: 1px solid #e3e3e3; padding: 4px;'><?php echo $primary2_boys;?></td>
    
<td style='border: 1px solid #e3e3e3; padding: 4px;'><?php echo $primary2_girls;?></td>
<td style='border: 1px solid #e3e3e3; padding: 4px;'><?php echo $primary2_total;?></td>
</tr>   
    
    
<tr style="">
<td style=" text-align:left; padding: 6px;">PRIMARY 3</td>

<td style='border: 1px solid #e3e3e3; padding: 4px;'><?php echo $primary3_boys;?></td>
    
<td style='border: 1px solid #e3e3e3; padding: 4px;'><?php echo $primary3_girls;?></td>
<td style='border: 1px solid #e3e3e3; padding: 4px;'><?php echo $primary3_total;?></td>
</tr>   
    

 
    
    
    
<tr style="border: 1px solid #d9d9d9; background: #f4f2f2; color:#7c4040;">
<td style='text-align:left; padding: 6px; font-weight:700; font-size:12px;'>SUM TOTAL</td>
<td style='padding: 4px; font-weight:700; font-size:12px;'><?php echo $primary1_boys + $primary2_boys + $primary3_boys;?></td>
<td style='padding: 4px;'><?php echo $primary1_girls + $primary2_girls + $primary3_girls;?></td>
<td style='padding: 4px; font-weight:700; font-size:12px;'><?php echo $primary1_total + $primary2_total + $primary3_total;?></td>
</tr>
</table> 
</div>  
       
<div  class='col-md-6'>
<table style='text-align:center;'>
<tr>
<th style='padding:6px;  background: #f4f2f2; border: 1px solid #dedede;'>UPPER PRIMARY</th>
</tr>    
</table>  
    
    
<table style='text-align:center; background: white;'>
    
<tr style="color: #7c4040;">
<td style="text-align:left; padding: 6px; "></td>
<td style='border-left: 1px solid #e3e3e3; padding: 4px; text-align:center; background: #f4f2f2;'>Boys</td>
<td style='border-left: 1px solid #ffffff; padding: 4px; text-align:center; background: #f4f2f2;'>Girls</td>
<td style='border-left: 1px solid #ffffff; padding: 4px; text-align:center; background: #f4f2f2;'>Total</td>
</tr>      
    
    
<tr style="">
<td style=" text-align:left; padding: 6px;">PRIMARY 4</td>

<td style='border: 1px solid #e3e3e3; padding: 4px;'><?php echo $primary4_boys;?></td>
    
<td style='border: 1px solid #e3e3e3; padding: 4px;'><?php echo $primary4_girls;?></td>
<td style='border: 1px solid #e3e3e3; padding: 4px;'><?php echo $primary4_total;?></td>
</tr>   
    
<tr style="">
<td style=" text-align:left; padding: 6px;">PRIMARY 5</td>

<td style='border: 1px solid #e3e3e3; padding: 4px;'><?php echo $primary5_boys;?></td>
    
<td style='border: 1px solid #e3e3e3; padding: 4px;'><?php echo $primary5_girls;?></td>
<td style='border: 1px solid #e3e3e3; padding: 4px;'><?php echo $primary5_total;?></td>
</tr>   
    
    
<tr style="">
<td style=" text-align:left; padding: 6px;">PRIMARY 6</td>

<td style='border: 1px solid #e3e3e3; padding: 4px;'><?php echo $primary6_boys;?></td>
    
<td style='border: 1px solid #e3e3e3; padding: 4px;'><?php echo $primary6_girls;?></td>
<td style='border: 1px solid #e3e3e3; padding: 4px;'><?php echo $primary6_total;?></td>
</tr>   
    

 
    
    
    
<tr style="border: 1px solid #d9d9d9; background: #f4f2f2; color:#7c4040;">
<td style='text-align:left; padding: 6px; font-weight:700; font-size:12px;'>SUM TOTAL</td>
<td style='padding: 4px; font-weight:700; font-size:12px;'><?php echo $primary4_boys + $primary5_boys + $primary6_boys;?></td>
<td style='padding: 4px;'><?php echo $primary4_girls + $primary5_girls + $primary6_girls;?></td>
<td style='padding: 4px; font-weight:700; font-size:12px;'><?php echo $primary4_total + $primary5_total + $primary6_total;?></td>
</tr>
</table> 
</div> 
    
<!--<div  class='col-md-4'>
<table style='text-align:center;'>
<tr>
<th style='padding:6px;  background: #f4f2f2; border: 1px solid #dedede;'>MAGAZINES</th>
</tr>    
</table>  
    
    
<table style='text-align:center; background: white;'>
    
<tr style="color: #7c4040;">
<td style="text-align:left; padding: 6px; "></td>
<td style='border-left: 1px solid #e3e3e3; padding: 4px; text-align:right; background: #f4f2f2;'>Itemized</td>
<td style='padding: 4px; text-align:left; background: #f4f2f2;'>Stock</td>
    
<td style='border-left: 1px solid #ffffff; padding: 4px; text-align:right; background: #f4f2f2;'>Actual</td>
<td style='padding: 4px; text-align:left;  background: #f4f2f2;'>Stock</td>
</tr>         
    
<tr style="">
<td style=" text-align:left; padding: 6px;">TOTAL FICTION</td>
<td style='border: 1px solid #e3e3e3; padding: 4px;'></td>
<td style='border: 1px solid #e3e3e3; padding: 4px;'><?php echo $total_fiction_magazine;?></td>
    
<td style='border: 1px solid #e3e3e3; padding: 4px;'></td>
<td style='border: 1px solid #e3e3e3; padding: 4px;'><?php echo $actual_fiction_magazine;?></td>
</tr>   
    
    
<tr>
<td style="text-align:left; padding: 6px;">TOTAL NON-FICTION</td>
<td style='border: 1px solid #e3e3e3; padding: 4px;'></td>
<td style='border: 1px solid #e3e3e3; padding: 4px;'><?php echo $total_nonfiction_magazine;?></td>
    
    
<td style='border: 1px solid #e3e3e3; padding: 4px;'></td>
<td style='border: 1px solid #e3e3e3; padding: 4px;'><?php echo $actual_nonfiction_magazine;?></td>
</tr> 
    
<tr>
<td style="text-align:center; padding: 6px;"><i>TEXT-BOOKS</i></td>
<td style='border: 1px solid #e3e3e3; padding: 4px;'><i><?php echo $total_textbook_magazine;?></i></td>
<td style='border: 1px solid #e3e3e3; padding: 4px;'></td>
    
<td style='border: 1px solid #e3e3e3; padding: 4px;'><i><?php echo $actual_textbook_magazine;?></i></td>
<td style='border: 1px solid #e3e3e3; padding: 4px;'></td>
</tr> 
    
<tr>
<td style="text-align:center; padding: 4px;"><i>OTHERS</i></td>
<td style='border: 1px solid #e3e3e3; padding: 4px;'><i><?php echo $total_other_magazine;?></i></td>
<td style='border: 1px solid #e3e3e3; padding: 4px;'></td>
    
<td style='border: 1px solid #e3e3e3; padding: 4px;'><i><?php echo $actual_other_magazine;?></i></td>
<td style='border: 1px solid #e3e3e3; padding: 4px;'></td>
</tr>
    
<tr>
<td style='text-align:left; padding: 6px;'>TOTAL CD / DVD</td>
<td style='border: 1px solid #e3e3e3; padding: 4px; border-bottom: 1px solid #d9d9d9;'></td>
<td style='border: 1px solid #e3e3e3; padding: 4px; border-bottom: 1px solid #d9d9d9;'><?php echo $total_cddvd_magazine;?></td>
    
<td style='border: 1px solid #e3e3e3; padding: 4px; border-bottom: 1px solid #d9d9d9;'></td>
<td style='border: 1px solid #e3e3e3; padding: 4px; border-bottom: 1px solid #d9d9d9;'><?php echo $actual_cddvd_magazine;?></td>
</tr>
    
    
<tr style="border: 1px solid #d9d9d9; background: #f4f2f2; color:#7c4040;">
<td style='text-align:left; padding: 6px; font-weight:700; font-size:12px;'>TOTAL</td>
<td style='padding: 4px;'></td>
<td style='padding: 4px; font-weight:700; font-size:12px;'><?php echo $total_sum_magazine;?></td>
    
<td style='padding: 4px;'></td>
<td style='padding: 4px; font-weight:700; font-size:12px;'><?php echo $actual_sum_magazine;?></td>
</tr>
    
</table> 
</div>--> 
        
</div>  
    
    
<div class='row text-center' style="padding: 0px 0px 20px 0px;">    
<div class='col-md-12'>
<table style='background:white; margin-top:-13px; height:47px; border: 1px solid #c4c4c4;'> 
<tr>
<td style='text-align:center; width:33.33%;'><span style='margin-left:10px; font-size:15px;'><span style='font-size:10px;'>TOTAL APPLICATION REQUEST<br> </span><span style='margin-left:0px; font-size:15px;'><?php echo $sum_total?></span></span></td>


</tr>
    

</table>
</div>
</div>
</div>
        
<div class='col-md-5'>
<table style='text-align:center;'>
<tr>
<th style='padding:6px;'>PREFERABLE LIBRARY CHOICE ANALYSIS</th>
</tr>    
</table>    
    
<table style='text-align:center; background: white;'>
<tr>
<td style="text-align:left; padding: 10px 0px 0px 20px;"><i class="fa fa-building fa-2x" style='color:gray;'></i></td> 
<td style='border: 1px solid #e3e3e3; padding: 8px; background:#c9e8b2;'>Greater Accra Central Library</td>
<td style='border: 1px solid #e3e3e3; padding: 8px; '><?php echo $total_GACL;?></td>
</tr>  
    
<tr>
<td style="text-align:left; padding: 10px 0px 0px 20px;">
<i class="fa fa-home fa-2x" style='color:gray;'></i>
</td> 
<td style='border: 1px solid #e3e3e3; padding: 8px; background:#e8cbb2;'>Laterbiokorshie Library</td>
<td style='border: 1px solid #e3e3e3; padding: 8px; '><?php echo $total_LLL;?></td>
</tr> 
    
<tr>
<td style="text-align:left; padding: 10px 0px 0px 20px;">
<i class="fa fa-database fa-2x" style='color:gray;'></i>
</td> 
<td style='border: 1px solid #e3e3e3; padding: 9px; background:#b2b4e8;'>Frafraha Library</td>
<td style='border: 1px solid #e3e3e3; padding: 9px; '><?php echo $total_FL;?></td>
</tr> 
    
<tr style="">
<td style="text-align:left; padding: 10px 0px 0px 20px; ">
<i class="fa fa-flag fa-2x" style='color:gray;'></i></td> 
<td style='border: 1px solid #e3e3e3; padding: 8px; background:#e8e8b2;'>Teshie Library</td>
<td style='border: 1px solid #e3e3e3; padding: 8px; '><?php echo $total_TL;?></td>
</tr> 
    
<tr>
<td style="text-align:left; padding: 10px 0px 0px 20px;">
<i class="fa fa-book fa-2x" style='color:gray;'></i></td> 
<td style='border: 1px solid #e3e3e3; padding: 10px; background:#dcb2e8;'>Airport Children’s Library</td>
<td style='border: 1px solid #e3e3e3; padding: 10px; '><?php echo $total_ACL;?></td>
</tr> 
    
    

<tr>
<td></td>    
</tr> 
</table>
    
<table style='background:white; margin-top:10px; height:47px; border: 1px solid #c4c4c4;'>
     
<tr>
<td style='text-align:left;'><span style='margin-left:45px; font-size:15px;'><br> </span></td>
<td style='text-align:left; '><span style='margin-left:45px; font-size:15px;'><br></span></td>
</tr>
    

</table>    
</div>
    

</div>
    
<div style="margin-top: -40px;">
<?php



echo "<div hidden><h1 style='font-size:12px;'>SHOWING RESULTS FOR STOCKING MADE ON: </h1><h1 style='font-size:18px; font-weight:600; color:#743636;'>".Date('l, d M Y' , strtotime('today'))."</h1></div><br>";      
    
echo "<div class='col-md-12' id='power' style=''>";
echo "<div class='pager'>";    


  
echo "<div class='demo-html'></div>";
echo "<table class='tablesorter'>";
echo "<thead>";
echo "<tr>";    
echo "<th>DATE</th>"; 
echo "<th>NAME</th>";
echo "<th>AGE</th>";
echo "<th>GENDER</th>";
echo "<th>SCHOOL</th>";
echo "<th>CLASS</th>";
echo "<th>PHONE NUMBER</th>";
echo "<th>EMAIL</th>";
echo "<th>FULL PROFILE</th>";
echo "</tr>";					
echo "</thead>";
    
echo "<tbody>"; 
    
    
    
$query=mysqli_query($conn, "SELECT * FROM registration WHERE Batch = '$batch'"); 
while($spec=mysqli_fetch_assoc($query)){ 
echo "<tr id=".$spec['id'].">";
echo "<td>".Date('d M, Y' , strtotime($spec['Date']))."</td>"; 
echo "<td>".$spec['FirstName']." ".$spec['OtherNames']." ".$spec['LastName']."</td>";
echo "<td>".$spec['Age']." years</td>";
echo "<td>".$spec['Gender']."</td>"; 
echo "<td>".$spec['SchoolName']."</td>";
echo "<td>".$spec['Class']."</td>";
echo "<td>".$spec['MobileNumber']."</td>";
echo "<td>".$spec['Email']."</td>";
echo "<td><a data-toggle='modal' data-target='#myModal_view' href='#' class='clickme_view'><i class='fa fa-address-card-o fa-2x' style='color:rgb(90, 90, 90); font-size:16px; color:#3a6030;'></i></a></td>";



/*echo   "<script>
         $('.clickme_addcopy').click(function(e){
         e.preventDefault();
         $('#copy').load('../tmhs/page_blocks/book_addcopy.php?isbn=".$spec['ISBN']."').dialog('open');
         });
         
         $('table tbody .clickme_edit').on('click', function(){
         
         $('#myModal_edit').modal('show'); 
         $('#edit').load('stock_edit.php?class_number=".$spec['ClassNumber']."&isbn=".$spec['ISBN']."').dialog('open');
         
         });
         
         $('.clickme_view').click(function(e){
         e.preventDefault();
         $('#view').load('../tmhs/page_blocks/book_view.php?isbn=".$spec['ISBN']."').dialog('open');
         });
         
         $('.clickme_copynumber').click(function(e){
         e.preventDefault();
         $('#copynumber').load('../tmhs/page_blocks/book_copynumber.php?isbn=".$spec['ISBN']."').dialog('open');
         });
         </script>";  */     
    
    
    
echo "</tr>";
 
}    
echo "</tbody>";   
echo "</table>";   
    
$query=mysqli_query($conn, "SELECT COUNT(*) AS TOTAL FROM Registration WHERE  Batch = '$batch'"); 
while($spec=mysqli_fetch_assoc($query)){
$total_list_items = $spec['TOTAL']; 
}
    
    
echo "<table style='background:white; margin-top:-10px; height:40px; border: 1px solid #c4c4c4;'>";
$query=mysqli_query($conn, "SELECT COUNT(*) AS TOTAL FROM Registration WHERE  Batch = '$batch' "); 
while($spec=mysqli_fetch_assoc($query)){     
echo "<tr>";
echo "<td style='text-align:left;'><span style='margin-left:10px; font-size:15px;'><span style='font-size:10px;'>FILTERED TOTAL: </span><span class='pagedisplay'></span> </span>";

echo "Page: <select class='gotoPage'></select>
<img src='../assets/tablesorter-master/addons/pager/icons/first.png' class='first' alt='First' title='First page' />
<img src='../assets/tablesorter-master/addons/pager/icons/prev.png' class='prev' alt='Prev' title='Previous page' />

<img src='../assets/tablesorter-master/addons/pager/icons/next.png' class='next' alt='Next' title='Next page' />
<img src='../assets/tablesorter-master/addons/pager/icons/last.png' class='last' alt='Last' title= 'Last page' />";
    
echo "<select class='pagesize'>
<option value='10'>10</option>
<option value='10'>10</option>
<option value='20'>20</option>
<option value='30'>30</option>
<option value='40'>40</option>
</select>";    

echo "</td>"; 
echo "<td style='text-align:right; '><span style='margin-right:10px; font-size:15px;'></span></td>"; 
echo "</tr>";
    
}
echo "</table>";
    
        
echo "</div>";    
echo "</div>";
    


?>
 
  
</div>
    
</div>

</div>
    
</div>    
</div>  
    
    
<!-- Modal -->
<div id="myModal_addcopy" class="modal fade" role="dialog">
<div class="modal-dialog">

    <!-- Modal content-->
<div class="modal-content">

<div class="modal-header" style='background-color: #2b918a;'>
<button type="button" class="close" data-dismiss="modal">&times;</button>
</div>
<div class="modal-body">
<section id='body'> 

<div class='col-md-12'>
<form method='POST' action='' id='form__Add_Copy' autocomplete="on">
<div class="card" id='copy'> 
    
</div>
    
    
<div class='col-md-12' style='text-align:center; margin-top:-40px; margin-bottom:20px;'>
<hr class="mb-7"> 
<button class="btn btn-primary btn-lg btn-block" type="submit" id="submit__Add_Copy" name=''><span id='button_texttttt' style='font-size:17px;'>Proceed</span></button>
</div>
</form>
</div>  

</section>
</div>
    
</div>
</div>


</div>    
    
<div id="myModal_view" class="modal fade" role="dialog">
<div class="modal-dialog">

    <!-- Modal content-->
<div class="modal-content" id='modal-content-view'>

<div class="modal-header" style='background-color: #2b918a;'>
<button type="button" class="close" data-dismiss="modal">&times;</button>
</div>
<div class="modal-body" style="padding:0px;">
<section id='body' style="padding:0px;"> 

<div class='col-md-12' style="padding:0px;">
<div class="card" id='view' style="padding:0px;">    
</div>
</div>  

</section>
</div>
    
</div>
</div>


</div>
    
<div id="myModal_edit" class="modal fade" role="dialog">
<div class="modal-dialog">

    <!-- Modal content-->
<div class="modal-content" style="width:260%; margin-left: -78%;">

<div class="modal-header" style='background-color: #2b918a;'>
<button type="button" class="close" data-dismiss="modal">&times;</button>
</div>
<div class="modal-body" style="padding: 0px;">
<section id='body'> 

<div class='col-md-12' style="padding: 0px;">
<form method='POST' action='../php/database_calls.php' id='form__Edit' autocomplete="on">
<div class="card" id='edit' > 

</div>
    

    
    
<div class='col-md-6' style='text-align:center; margin-bottom:40px; margin-left:300px;'>
<hr class="mb-7"> 
 <button class="btn btn-primary btn-lg btn-block" type="submit" id="submit__Edit" name=''><span id='button_texttttt' style='font-size:17px;'>Proceed</span></button> 
</div>
</form>
</div>  

</section>
</div>
    
</div>
</div>


</div>
    
<div id="myModal_copynumber" class="modal fade" role="dialog">
<div class="modal-dialog">

    <!-- Modal content-->
<div class="modal-content">
<div class="modal-header" style='background-color: #2b918a;'>
<button type="button" class="close" data-dismiss="modal">&times;</button>

</div>
<div class="modal-body">

<section id='body'> 

<div class='col-md-12' >
<div class="card" id='copynumber'>    
</div>
</div>  

</section>

 

</div>
<div class="modal-footer">
</div>
</div>

</div>
</div> 

    
<div class='row' style="margin-top:0px;" id='navbar'>
<div class='col-md-12'>

<div id="footer">
    </div>
<div class="panel panel-footer" id="panelfooter">
<strong>
<p class="footertext"><b>Ghana Library Authority </b> <br>All Rights Reserved | &copy; <?php echo Date('Y') ;?></p>
</strong>           
</div>
    
</div>    
</div>    
     
</section>    
    
    
    
    

<section id='navbar_bottom' hidden>
<nav class="navbar navbar-expand-md navbar-light fixed-bottom" id='footer'>
   
<div class='col-md-12' style='text-align:center;'>
<div class="footer-right" id="links" hidden>
<a href="#"><i class="fa fa-facebook" id='fav'></i></a>
<a href="#"><i class="fa fa-twitter" id='fav'></i></a>
<a href="#"><i class="fa fa-whatsapp" id='fav'></i></a>
<a href="#"><i class="fa fa-instagram" id='fav'></i></a>
<a href="#"><i class="fa fa-instagram" id='fav'></i></a>
</div>
<p class="mb-1" id='footer-text'>Ghana Library Authority <br>All Rights Reserved | &copy;<?php echo Date('Y') ;?></p>
<ul class="list-inline">
<li class="list-inline-item"><a href="#">Privacy</a></li>
<li class="list-inline-item"><a href="#">Terms</a></li>
<li class="list-inline-item"><a href="#">Support</a></li>
</ul>
</div>   

</nav>
    
    
</section>   
    
  
</body>

<script src="../assets/js/app.js" async></script>

<!-- Scripts -->

 <!-- Pushy JS -->
<script src="../assets/pushy-master/js/pushy.min.js"></script>
<script src="../assets/js/jquery.smoothState.min.js"></script>
<script src="../assets/js/loader.js"></script>
<script src="../assets/js/database_calls.js"></script>
<script type="text/javascript" src="../assets/bootstrap-4.1.1/js/bootstrap.js"></script>
<script src="../assets/js/bd.ui.js"></script>

</html>
