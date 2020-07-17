<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<link rel="apple-touch-icon" sizes="76x76" href="assets/img/apple-icon.png">
	<link rel="icon" type="image/png" href="assets/img/favicon.png">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<title>Creative Arts  Class - GhLA</title>

	<link rel="apple-touch-icon" sizes="57x57" href="assets/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="assets/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="assets/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="assets/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="assets/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="assets/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="assets/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="assets/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="assets/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="assets/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png">
    <link rel="manifest" href="assets/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <meta name="viewport" content="width=device-width" />

	<!--     Fonts and icons     -->
    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.css" rel="stylesheet">
     <link rel="stylesheet" type="text/css" href="assets/css/animate.css">
	<!-- CSS Files -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
	<link href="assets/css/gsdk-bootstrap-wizard.css" rel="stylesheet" />

	<!-- CSS Just for demo purpose, don't include it in your project -->
	<link href="assets/css/demo.css" rel="stylesheet" />
</head>

<body>
<style>
[type="radio"]:checked,
[type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label
{
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 24px;
    display: inline-block;
    color: #666;
}
[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 28px;
    height: 28px;
    border: 1px solid #9f9f9f;
    border-radius: 100%;
    background: #fff;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
    content: '';
    width: 22px;
    height:22px;
    background: red;
    position: absolute;
    top: 3px;
    left: 3px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
}
[type="radio"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
}
[type="radio"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
}    
    
    
input{
 border:1px solid black;
}    
    
</style>

    
<div class="container">
        <div class="row">
        <div  class="col-sm-8 col-sm-offset-2">

            <!--      Wizard container        -->
            <div class="wizard-container">
                
                
            <div class='watermark'>

                <div class="card wizard-card watermark1" data-color="red" id="wizardProfile">
                    <form action=""  method="POST" id='form_applicant' enctype="multipart/form-data">
                
                    	<div class="wizard-header">
                            
         
                         <!-- <div style='text-align:center;'>
                             <img src="assets/img/ghlaLogo.png" width="57px"> <br>Ghana Library Authority
                        </div>-->
                        	<h3>
                        	   <b>Register</b> <br>
                        	   <small>Provide your registration details.</small>
                        	</h3>
                    	</div>

						<div class="wizard-navigation">
							<ul>
	                            <li><a href="#about" data-toggle="tab">Personal</a></li>
	                            <li><a href="#account" data-toggle="tab">Your School</a></li>
	                            <li><a href="#address" data-toggle="tab">Finished</a></li>
	                        </ul>

						</div>

                        <div class="tab-content">
                            <div class="tab-pane" id="about">
                              <div class="row" style="text-align: center;">
                                  <h4 class="info-text"> Let's start with the basic information (with validation)</h4>
                                  <div class="col-sm-10 col-sm-offset-1" >
                                     <div class="picture-container">
                                          <div class="picture">
                                              <img src="assets/img/default-avatar.png" class="picture-src" id="wizardPicturePreview" title=""/>
                                              <input type="file" name='fileToUpload' id="wizard-picture" >
                                          </div>
                                          <h6>Choose Picture</h6>
                                      </div>
                                  </div>
                                 
                              </div>
                              
                              <div class='row' style="padding-left: 50px; padding-right: 50px;">
                                 <div class="col-sm-4">
                                
                                      <div class="form-group">
                                        <label>First Name <small>(required)</small></label>
                                        <input name="firstname" style='border:1px solid #9f9f9f;' type="text" class="form-control" placeholder="Elikem">
                                      </div>
                            
                                  </div>
                                  
                                  <div class='col-md-4'>
                                     <div class="form-group">
                                        <label>Other Names </label>
                                        <input name="othernames" style='border:1px solid #9f9f9f;' type="text" class="form-control" placeholder="Yaw Anto">
                                          </div>
                                      
                                  </div>
                                  
                                  <div class='col-md-4'>
                                     <div class="form-group">
                                        <label>Last Name <small>(required)</small></label>
                                        <input name="lastname" style='border:1px solid #9f9f9f;' type="text" class="form-control" placeholder="Quaye">
                                          </div>
                                      
                                  </div>
                                  
                                  
                                  
                                  <div class="col-sm-6 ">
                                      <div class="form-group">
                                          <label>Birthday <small>(required)</small></label>
                                          <input name="birthday" style='border:1px solid #9f9f9f;' type="date" class="form-control" placeholder="0244444444">
                                      </div>
                                  </div>
                               <div class="col-sm-6 ">
                                      <div class="form-group">
                                          <label>Gender <small>(required)</small></label>
    
         
 <div class='row'>
    <div class='col-md-3'>
  <p>
    <input type="radio" id="test1" name="gender" value='Boy' class="form-control" required>
    <label for="test1">&nbsp;<span style="line-height:28px;">Boy</span></label>
  </p>
    </div>
     
  <div class='col-md-6' style="text-align:left;">
  <p>
    <input type="radio" id="test2" name="gender" value='Girl' class="form-control" required>
    <label for="test2">&nbsp;<span style="line-height:28px;">Girl</span></label>
  </p>
  </div>
  </div>
                                      </div>
                                  </div>
                                  
                              
                               <div class="col-sm-6 ">
                                      <div class="form-group">
                                          <label>Mobile Number <small>(required)</small></label>
                                          <input name="mobilenumber" style='border:1px solid #9f9f9f;' type="tel" class="form-control" placeholder="0244444444" required>
                                      </div>
                                  </div>
                               <div class="col-sm-6 ">
                                      <div class="form-group">
                                          <label>Email </label>
                                          <input name="email" style='border:1px solid #9f9f9f;' type="email" class="form-control" placeholder="andrew@creative-tim.com">
                                      </div>
                                  </div>
                                  
                                <div class="col-sm-12 ">
                                      <div class="form-group">
                                          <label>Address <small>(required)</small></label>
                                          <textarea name="address" style='border:1px solid #9f9f9f;' type="text" class="form-control" placeholder="Home addrees" required></textarea>
                                      </div>
                                  </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="account">
                                <h4 class="info-text"> Give us your school info and choose a branch to take up classes! </h4>
                                <div class='row' style="padding-left: 50px; padding-right: 50px;">
                            
                                    
                                 <div class="col-sm-12">
                                
                                      <div class="form-group">
                                        <label>School Name <small>(required)</small></label>
                                        <input name="schoolname" style='border:1px solid #9f9f9f;' type="text" class="form-control" placeholder="St. Louis Basic School" required>
                                      </div>
                            
                                  </div>
                                  
                                   <div class="col-sm-12">
                                         <div class="form-group">
                                            <label>Class / Stage</label><br>
                                             <select name="class" style='border:1px solid #9f9f9f;' class="form-control stage" required>
                                                <option value="..." >......</option>
                                                <option value="Primary 1"> Primary 1</option>
                                                <option value="Primary 2"> Primary 2 </option>
                                                <option value="Primary 3"> Primary 3 </option>
                                                <option value="Primary 4"> Primary 4 </option>
                                                <option value="Primary 5"> Primary 5 </option>
                                                <option value="Primary 6"> Primary 6 </option>
                                                
                                            </select>
                                          </div>
                                    </div>
                                    
                                    <div class="col-sm-12">
                                         <div class="form-group">
                                            <label>Preferable GhLA Branch To Take Up Classes</label><br>
                                             <select name="preferedlibrary" style='border:1px solid #9f9f9f;' class="form-control courseVenues" required>
                                                <option value="..." >......</option>
                                                <option value="Greater Accra Central Library"> Greater Accra Central Library </option>
                                                <option value="Frafraha Library"> Frafraha Library </option>
                                                <option value="Laterbiokorshie Library"> Laterbiokorshie Library </option>
                                                <option value="Teshie Library"> Teshie Library </option>
                                                <option value="Airpot Children's Library"> Airpot Children's Libarary </option>
                                            </select>
                                          </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                            <div class="tab-pane" id="address" >
                                <h4 class="info-text"> Here are the details for the class and branch you selected. <br> Please click <i><b>confirm</b></i> to save or <i><b>previous</b></i> to go back and change info.</h4>
                                
                                <div class="row" style='padding:20px;'>
                                      
                                        
                                    
                                    <div class="col-md-12" >
                                      
                                     <h3 style='font-size:19px;'><u>Courses Up For</u></h3>
                                        
                                    <div class="col-md-6">
                                    <div class='coursesHeading'></div>
                                    </div>
                                      <div class="col-md-6" style='margin:0% auto;'>
                                      <table class='courses'>
                                        
                                      </table>
                                      </div>
                                    </div>
                                    
                                    <div class="col-md-12">
                                     <h3 style='font-size:19px;'><u>Scheduled Dates For</u></h3>
                                    <div class="col-md-6">
                                    <div class='venueDatesHeading'></div>    
                                    </div>
                                     <div class="col-md-6" style='margin:0% auto;'>
                                      <table class='venueDates'>
                                        
                                      </table>
                                    </div>
                                    </div>
                                
                                    <div class="col-md-12">
                                     <h3 style='font-size:19px;'><u>Rate & Contact to make payment into</u></h3>
                                    <div class="col-md-12">
                                    <div>
                                       <p class='rate'></p>
                                        
                                       <p>+233 (0)248800349<br>+233 (0)208085117</p>    
                                        
                                    </div>    
                                    </div>
                                    </div>
                                    
                                     
                                </div>
                            </div>
                        </div>
                        
                        
                        <div class="wizard-footer height-wizard">
                            <div class="pull-right">
                                <input type='button' class='btn btn-next btn-fill btn-success btn-wd btn-sm' name='next' value='Next' />
                                <input type='submit' id='submit_applicant' class='btn btn-finish btn-fill btn-warning btn-wd btn-sm' name='finish' value='Confirm' />

                            </div>

                            <div class="pull-left">
                                <input type='button' class='btn btn-previous btn-fill btn-default btn-wd btn-sm' name='previous' value='Previous' />
                            </div>
                            <div class="clearfix"></div>
                        </div>

                    </form>
                </div>
            </div>
            </div> <!-- wizard container -->
        </div>
        </div>
</div> 

<div class="footer">
 <div class="container" style='color:#ffd600; text-shadow:1px 1px 1px black;'>
 Created  by the <a href="http://www.ghanalibrary.org" style="color:red;">Ghana Library Authority</a>. <span style='color:green;'>All rights reserved 2020</span>
 </div>
</div>
    
<div class="containerr" style='display:none;'>
  <div class="dot dot-1"></div>
  <div class="dot dot-2"></div>
  <div class="dot dot-3"></div>
</div>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1" style='display:none;'>
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"/>
    </filter>
  </defs>
</svg>


<?php
include_once('php/message.php');    
?>    
 
</body>

	<!--   Core JS Files   -->
	<script src="assets/js/jquery-2.2.4.min.js" type="text/javascript"></script>
	<script src="assets/js/bootstrap.min.js" type="text/javascript"></script>
	<script src="assets/js/jquery.bootstrap.wizard.js" type="text/javascript"></script>

	<!--  Plugin for the Wizard -->
	<script src="assets/js/gsdk-bootstrap-wizard.js"></script>

	<!--  More information about jquery.validate here: http://jqueryvalidation.org/	 -->
	<script src="assets/js/jquery.validate.min.js"></script>
	<script src="library/js/database_calls.js"></script>

</html>
