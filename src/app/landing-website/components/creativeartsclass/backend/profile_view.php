<?php
include("session.php"); 

$isbn = $_GET['isbn'];


$query=mysqli_query($conn, "SELECT * FROM catalogue WHERE ISBN = '$isbn'");
while($spec=mysqli_fetch_assoc($query)){ 

$MaterialType = $spec['MaterialType'];  
$Vendor = $spec['Vendor'];
$PublicationType = $spec['PublicationType'];
$CollectionType = $spec['CollectionType'];
$AreaOfResponsibility = $spec['AreaOfResponsibility'];    
$SystemOfClassification = $spec['SystemOfClassification']; 
$image = $spec['Image']; 
    
$ClassNumber = $spec['ClassNumber'];  
$AuthorName = $spec['AuthorName'];
$Title = $spec['Title'];
$AreaOfResponsibility = $spec['AreaOfResponsibility'];
$EditionStatement = $spec['EditionStatement'];
$PlaceOfPublication = $spec['PlaceOfPublication'];
$PublisherName = $spec['PublisherName'];
$YearOfPublication = $spec['YearOfPublication'];
$PreliminaryPages = $spec['PreliminaryPages'];
$NumberOfPages = $spec['NumberOfPages'];

$Illustration = $spec['Illustration'];
$Height = $spec['Height'];
$Series = $spec['Series'];
$Notes = $spec['Notes'];
$ISBN = $spec['ISBN'];
$Subject = $spec['Subject'];
$BoxAddress = $spec['BoxAddress'];
$BoxLocation = $spec['BoxLocation'];
    
$Telephone = $spec['Telephone'];
$Email = $spec['Email'];
$Website = $spec['Website'];
$addedentry1 = $spec['AddedEntry1']; 
$addedentry2 = $spec['AddedEntry2']; 
$addedentry3 = $spec['AddedEntry3']; 
$addedentry4 = $spec['AddedEntry4']; 
$GNBNumber = $spec['GNBNumber'];
$dateofinput = $spec['DateOfInput'];
    
}    
?>

    
<div class="card-body" >
    
<div class='row'>
<div class='col-md-12' style="text-align:center">
<h1 style="font-size:20px; color:#693910;"><u>BOOK PROFILE</u></h1>    
</div>    
</div>    
    
<div class='row' style="padding:0px;">
<div class='col-md-6'>
<table>
<tr>
<th>
<div class='title' style="text-align:center;">BOOK INFO</div>
</th>
</tr>
</table>    
<div style='border: 1px solid #cccccc; padding:1px;'> 

<div class='row' >
<?php

if(empty($image)){ 
echo "<div class='col-md-12'> 
<img class='' src='../library/img/no-image.jpg' style='width:347px; margin-left:65px;' alt='Card image cap'>
</div>";
}else{
echo "<div class='col-md-12'> 
<img class='' src='../uploads/book_images/$image' style='width:100%;' alt='Card image cap'>
</div>";
}
?>


</div>
    
<div style='padding: 20px 10px;'>
  
<div class='row'>
<div class='col-md-6'>
Publication Type:   
</div>
    
<div class='col-md-6'>
<?php echo $PublicationType;?>   
</div>
</div>
    
    
<div class='row'>
<div class='col-md-6'>
Collection Type:   
</div>
    
<div class='col-md-6'>
<?php echo $CollectionType;?>   
</div>
</div>
    
    
<div class='row'>
<div class='col-md-6'>
Title:   
</div>
    
<div class='col-md-6'>
<?php echo $Title;?>   
</div>
</div>
     
<div class='row'>
<div class='col-md-6'>
Edition Statement:   
</div>
    
<div class='col-md-6'>
<?php echo $EditionStatement;?>   
</div>
</div>    
    
<div class='row'>
<div class='col-md-6'>
Area Of Responsibility:   
</div>
    
<div class='col-md-6'>
<?php echo $AreaOfResponsibility;?>   
</div>
</div>
    
<div class='row'>
<div class='col-md-6'>
Preliminary Pages:   
</div>
    
<div class='col-md-6'>
<?php echo $PreliminaryPages;?>   
</div>
</div>
    
<div class='row'>
<div class='col-md-6'>
Number Of Pages:   
</div>
    
<div class='col-md-6'>
<?php echo $NumberOfPages;?>   
</div>
</div>
    
<div class='row'>
<div class='col-md-6'>
Illustration:   
</div>
    
<div class='col-md-6'>
<?php echo $Illustration;?>   
</div>
</div>
    
<div class='row'>
<div class='col-md-6'>
Height:   
</div>
    
<div class='col-md-6'>
<?php echo $Height;?>   
</div>
</div>
    
<div class='row'>
<div class='col-md-6'>
Series:   
</div>
    
<div class='col-md-6'>
<?php echo $Series;?>   
</div>
</div>
    
<div class='row'>
<div class='col-md-6'>
Notes:   
</div>
    
<div class='col-md-6'>
<?php echo $Notes;?>   
</div>
</div>
  
<div class='row'>
<div class='col-md-6'>
ISBN:   
</div>
    
<div class='col-md-6'>
<?php echo $ISBN;?>  
</div>
</div>
   
    
<div class='row'>
<div class='col-md-6'>
Year Of Publication:   
</div>
    
<div class='col-md-6'>
<?php echo $YearOfPublication;?>   
</div>
</div>
    

    
</div>
      
</div>
</div> 
    
   
<div class='col-md-6'>
    
<table>
<tr>
<th>
<div class='title' style="text-align:center;">AUTHOR / PUBLISHER INFO</div>
</th>
</tr>
</table>
<div style='border: 1px solid #cccccc; padding:20px 10px; margin-bottom:20px;'> 
    
<div class='row'>
<div class='col-md-6'>
Author Name:   
</div>
    
<div class='col-md-6'>
<?php echo $AuthorName;?>   
</div>
</div>

<div class='row'>
<div class='col-md-6'>
Place Of Publication:   
</div>
    
<div class='col-md-6'>
<?php echo $PlaceOfPublication;?>   
</div>
</div>
    
<div class='row'>
<div class='col-md-6'>
Publisher  Name:   
</div>
    
<div class='col-md-6'>
<?php echo $PublisherName;?>   
</div>
</div>
    
<div class='row'>
<div class='col-md-6'>
Publisher Address:   
</div>
    
<div class='col-md-6'>
<?php echo $BoxAddrress;?>  
</div>
</div>
    
<div class='row'>
<div class='col-md-6'>
Address Location:   
</div>
    
<div class='col-md-6'>
<?php echo $BoxLocation;?>   
</div>
</div>
    
<div class='row'>
<div class='col-md-6'>
Telephone:   
</div>
    
<div class='col-md-6'>
<?php echo $Telephone;?>
</div>
</div>
    
<div class='row'>
<div class='col-md-6'>
Email:   
</div>
    
<div class='col-md-6'>
<?php echo $Email;?>   
</div>
</div>
    
<div class='row'>
<div class='col-md-6'>
Website:   
</div>
    
<div class='col-md-6'>
<?php echo $Website;?>  
</div>
</div>
    
</div>
    
    
<table>
<tr>
<th>
<div class='title' style="text-align:center;">ClASSIFICATION INFO</div>
</th>
</tr>
</table>
<div style='border: 1px solid #cccccc; padding:20px 10px; margin-bottom:20px;'> 
    
<div class='row'>
<div class='col-md-6'>
D.D.C:   
</div>
    
<div class='col-md-6'>
<?php echo $SystemOfClassification;?>   
</div>
</div>
    
<div class='row'>
<div class='col-md-6'>
GNB:   
</div>
    
<div class='col-md-6'>
<?php echo $GNBNumber;?>   
</div>
</div>
    
<div class='row'>
<div class='col-md-6'>
Class Number:   
</div>
    
<div class='col-md-6'>
<?php echo $ClassNumber;?>   
</div>
</div>
    
<div class='row'>
<div class='col-md-6'>
Date:   
</div>
    
<div class='col-md-6'>
<?php echo $DateReceived;?>   
</div>
</div>
    
<div class='row'>
<div class='col-md-6'>
Material Type:   
</div>
    
<div class='col-md-6'>
<?php echo $MaterialType;?>   
</div>
</div>
    
<div class='row'>
<div class='col-md-6'>
Vendor:   
</div>
    
<div class='col-md-6'>
<?php echo $Vendor;?>   
</div>
</div>
    
<div class='row'>
<div class='col-md-6'>
Content Description:   
</div>
    
<div class='col-md-6'>
<?php echo $PublicationType;?>   
</div>
</div>
</div>
    
<table hidden>
<tr>
<th>
<div class='title' style="text-align:center;">ADDED ENTRIES</div>
</th>
</tr>
</table>
<div style='border: 1px solid #cccccc; padding:20px 10px; margin-bottom:20px;' hidden> 
    
<div class='row'>
<div class='col-md-6'>
Added Entry 1:   
</div>
    
<div class='col-md-6'>
<?php echo $addedentry1;?>   
</div>
</div>
    
<div class='row'>
<div class='col-md-6'>
Added Entry 2:   
</div>
    
<div class='col-md-6'>
<?php echo $addedentry2;?>   
</div>
</div>
    
<div class='row'>
<div class='col-md-6'>
Added Entry 3:   
</div>
    
<div class='col-md-6'>
<?php echo $addedentry3;?>   
</div>
</div>
    
<div class='row'>
<div class='col-md-6'>
Added Entry 4:   
</div>
    
<div class='col-md-6'>
<?php echo $addedentry4;?>   
</div>
</div>
    
</div>

    

</div>
    
</div>  
</div>
