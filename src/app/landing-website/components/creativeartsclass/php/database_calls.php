<?php   
include("../connection/conn.php");  
if(isset($_POST['firstname'])){
    
$target_dir = "../uploads/";
$target =basename($_FILES["fileToUpload"]["name"]);    
$file_ext = pathinfo($_FILES["fileToUpload"]["name"])['extension']; 
$posting_file = 'creativechild' . rand(1, 99999999) . '.' . $file_ext;
$target_file = $target_dir . $posting_file;
    
//"creativechild" . rand(1, 99999999) .
//Check file size//
if($_FILES["fileToUpload"]["size"] > 50000000){
echo "Sorry, your file is too large.";
$uploadOk = 0;
}
//Allow certain file formats//
if($file_ext != "jpg" && $file_ext != "png" && $file_ext != "jpeg" && $file_ext != "gif"){

}
else{
if(move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)){
    
}else{
echo "Sorry, there was an error uploading your file.";
}
    
}    

$Image = $posting_file;     
$FirstName = isset($_POST['firstname']) ? $_POST['firstname'] : '';
$OtherNames = isset($_POST['othernames']) ? $_POST['othernames'] : '';      
$LastName = isset($_POST['lastname']) ? $_POST['lastname'] : '';
$Birthday = isset($_POST['birthday']) ? $_POST['birthday'] : '';
$Gender = isset($_POST['gender']) ? $_POST['gender'] : '';
$MobileNumber = isset($_POST['mobilenumber']) ? $_POST['mobilenumber'] : '';
$Email = isset($_POST['email']) ? $_POST['email'] : '';
$HomeAddress = isset($_POST['address']) ? $_POST['address'] : '';
$SchoolName = isset($_POST['schoolname']) ? $_POST['schoolname'] : '';      
$Class = isset($_POST['class']) ? $_POST['class'] : '';
$PreferedLibrary = isset($_POST['preferedlibrary']) ? $_POST['preferedlibrary'] : '';

//$dateOfBirth = "17-10-1985";
$year = date("Y");
$Batch = $year. " Batch";  
$today = date("Y-m-d");
$diff = date_diff(date_create($Birthday), date_create($today));
$Age = $diff->format('%y');           

$Image = addslashes($Image);
$FirstName = addslashes($FirstName);
$OtherNames = addslashes($OtherNames);
$LastName = addslashes($LastName);
$Birthday = addslashes($Birthday);
$Gender = addslashes($Gender);
$MobileNumber = addslashes($MobileNumber);
$Email = addslashes($Email);
$HomeAddress = addslashes($HomeAddress);
$SchoolName = addslashes($SchoolName);
$Class = addslashes($Class);
$PreferedLibrary = addslashes($PreferedLibrary);
    

     
$sql=("INSERT INTO  registration (Image, FirstName, OtherNames, LastName, Birthday, Age, Gender, MobileNumber, Email, HomeAddress, SchoolName, Class, PreferedLibrary, Batch) VALUES ('$Image','$FirstName','$OtherNames','$LastName','$Birthday','$Age','$Gender','$MobileNumber','$Email','$HomeAddress','$SchoolName','$Class','$PreferedLibrary','$Batch')");
if (mysqli_query($conn,$sql)) {
echo 1; 
} else {
    echo "Error: " .mysqli_error($conn);
}
    
/*$query=mysqli_query($conn, "SELECT *, TIMESTAMPDIFF(YEAR,DateOfBirth,CURDATE()) AS Age FROM registration WHERE MobileNumber = '$MobileNumber'");  
while($spec=mysqli_fetch_assoc($query)){  
echo $Age = $spec['Age'];   
}*/
    
    
    
    
}



?>
    
    
    
  