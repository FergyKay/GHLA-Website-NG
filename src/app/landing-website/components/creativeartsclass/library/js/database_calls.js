//-------------------------------------JQUERY------------------------------------------------------------//
$(document).ready(function(){ 
$('#submit_applicant').click(function(){ 
$("#form_applicant").submit(function(e){  
$.ajax({
url: "php/database_calls.php",
type: "POST",
data:  new FormData(this),
contentType: false,
processData:false,
beforeSend: function() {
$("#submit_applicant").prop("disabled", true);
$('.footer').hide('fast');
$('#success-navbar').show();
$('#success-navbar').addClass('animated fadeInUp');
$(".containerr").fadeIn();
},

success: function(data){ 
if(data == 1){
$('#success-navbar').css('background','#0f430f');
$('.success').css('color','white');
$('.success').removeClass('fa-hdd-o');
$('.success').addClass('fa-check');
$('#succ_info').html('Success! Saving successful.');
setTimeout(function(){ 
$('#success-navbar').fadeOut('slow');
$(".containerr").fadeOut();
location.reload();
}, 3000);

}

else if(data == 2){
/*$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Save unsuccessful!!! User with same name has already been added. Please try again with a different user details!!!</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit_addUser').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700);*/    
}


},

    
error: function (request,error) {
// This callback function will trigger on unsuccessful action 
$('#submit_applicant').removeAttr('disabled'); 
/*$('#spinner').replaceWith("<span id='button_text' style='font-size:17px;'>Proceed</span>"); 
$('#network-error-navbar').show();
setTimeout(function(){
$('#network-error-navbar').slideToggle('slow');
}, 5000);*/
},
});       
$(this).unbind();
e.preventDefault();
}); 
});
    
$('.stage').change(function(){
var stage = $('.stage option:selected').val();
    
if(stage == 'Primary 1' || stage == 'Primary 2' || stage == 'Primary 3'){
$(".coursesHeading").html("<h3 style='font-size:16px;'>Lower Primary - "+stage+"</h3>");  
$(".courses").html("<tr><td style='width:20%;'><i class='fa fa-sun-o fa fa-1x' style=''></i></td><td>Drawing & Colouring</td></tr><tr><td style='width:20%;'><i class='fa fa-sun-o fa fa-1x' style=''></i></td><td>Paper Craft</td></tr><tr><td style='width:20%;'><i class='fa fa-sun-o fa fa-1x' style=''></i></td><td>Print Making</td></tr><tr><td style='width:20%;'><i class='fa fa-sun-o fa fa-1x' style=''></i></td><td>Modeling with play dough</td></tr>"); 
$(".rate").html("Please call the ff numbers to make payment of <b>Gh<span>&#8373; </span> 40</b> as Cost for taking up classes for the above courses:");
}
else{
$(".coursesHeading").html("<h3 style='font-size:16px;'>Upper Primary("+stage+")</h3>");  
$(".courses").html("<tr><td style='width:20%;'><i class='fa fa-sun-o fa fa-1x' style=''></i></td><td>Embroidery</td></tr><tr><td style='width:20%;'><i class='fa fa-sun-o fa fa-1x' style=''></i></td><td>Weive Art</td></tr><tr><td style='width:20%;'><i class='fa fa-sun-o fa fa-1x' style=''></i></td><td>Bead Making</td></tr><td style='width:20%;'><i class='fa fa-sun-o fa fa-1x' style=''></i></td><td>Patch Making</td><tr>");   
$(".rate").html("Please call the ff numbers to make payment of <b>Gh<span>&#8373; </span> 55</b> as Cost for taking up classes for the above courses:");   
}

});
       
$('.courseVenues').change(function(){
var courseVenue = $('.courseVenues option:selected').val();
    
if(courseVenue == 'Greater Accra Central Library'){
$(".venueDatesHeading").html("<h3 style='font-size:16px;'>"+courseVenue+"</h3>");  
$(".venueDates").html("<tr><td style='width:20%;'><i class='fa fa-calendar fa fa-1x' style=''></i></td><td>14TH MARCH,2020</td></tr><tr><td style='width:1%;'><i class='fa fa-calendar fa fa-1x' style=''></i></td><td>28TH MARCH,2020</td></tr><tr><td><i class='fa fa-calendar fa fa-1x' style=''></i></td><td>4TH APRIL,2020</td><tr><tr><td><i class='fa fa-calendar fa fa-1x' style=''></i></td><td>25TH APRIL,2020</td><tr>");    
}
else if(courseVenue == 'Laterbiokorshie Library'){
$(".venueDatesHeading").html("<h3 style='font-size:16px;'>"+courseVenue+"</h3>");  
$(".venueDates").html("<tr><td style='width:20%;'><i class='fa fa-calendar fa fa-1x' style=''></i></td><td>2ND MAY, 2020</td></tr><tr><td><i class='fa fa-calendar fa fa-1x' style=''></i></td><td>30TH MAY, 2020</td><tr><tr><td><i class='fa fa-calendar fa fa-1x' style=''></i></td><td>6TH JUNE, 2020</td><tr><tr><td><i class='fa fa-calendar fa fa-1x' style=''></i></td><td>27TH JUNE, 2020</td><tr>");    
}
else if(courseVenue == 'Teshie Library'){
$(".venueDatesHeading").html("<h3 style='font-size:16px;'>"+courseVenue+"</h3>");  
$(".venueDates").html("<tr><td style='width:20%;'><i class='fa fa-calendar fa fa-1x' style=''></i></td><td>4TH JULY, 2020</td><tr><tr><td><i class='fa fa-calendar fa fa-1x' style=''></i></td><td>25TH JULY, 2020</td></tr><tr><td><i class='fa fa-calendar fa fa-1x' style=''></i></td><td>1ST AUGUST, 2020</td></tr><tr><td><i class='fa fa-calendar fa fa-1x' style=''></i></td><td>29TH AUGUST, 2020</td></tr>");    
}
else if(courseVenue == 'Frafraha Library'){
$(".venueDatesHeading").html("<h3 style='font-size:16px;'>"+courseVenue+"</h3>");  
$(".venueDates").html("<tr><td style='width:20%;'><i class='fa fa-calendar fa fa-1x' style=''></i></td><td>5TH SEPTEMBER, 2020</td></tr><tr><td><i class='fa fa-calendar fa fa-1x' style=''></i></td><td>26TH SEPTEMBER,2020</td></tr><tr><td><i class='fa fa-calendar fa fa-1x' style=''></i></td><td>3RD OCTOBER, 2020</td></tr><tr><td><i class='fa fa-calendar fa fa-1x' style=''></i></td><td>31ST OCTOBER, 2020</td><tr>");    
}
else if(courseVenue == "Airpot Children's Libarary"){
$(".venueDatesHeading").html("<h3 style='font-size:16px;'>"+courseVenue+"</h3>");  
$(".venueDates").html("<tr><td style='width:20%;'><i class='fa fa-calendar fa fa-1x' style=''></i></td><td>7TH NOVEMBER, 2020</td><tr><tr><td><i class='fa fa-calendar fa fa-1x' style=''></i></td><td>28TH NOVEMBER, 2020</td></tr><tr><td><i class='fa fa-calendar fa fa-1x' style=''></i></td><td>5TH DECEMBER, 2020</td></tr><tr><td><i class='fa fa-calendar fa fa-1x' style=''></i></td><td>19TH DECEMBER, 2020</td></tr>");    
}
    
});    
    
    

});

