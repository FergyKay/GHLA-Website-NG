//-------------------------------------JQUERY------------------------------------------------------------//


$(document).ready(function(){ 
//==================================MENU=============================================//
    
$('#catalogue').click(function(){ 
window.location = '../menu_selection/catalogue_menu.php';    
});  
    

$('#stock_list').click(function(){ 
window.location = '../menu_selection/stock_list_menu.php';    
});  
    
       
$('#generate_barcoding').click(function(){ 
window.location = '../menu_selection/generate_barcoding_menu.php';    
});  
    
 
    
    
    
$('#class_numberadd').click(function(){ 
window.location = '../menu_selection/classnumber_add_menu.php';    
});  
    

$('#stock_list_class_yes').click(function(){ 
window.location = '../menu_selection/stock_list_class_yes_menu.php';    
});  
    
    
$('#gnb').click(function(){ 
window.location = '../G_P_R_L_LIBRARIAN/gnb.php';    
});  
    
    
$('#report').click(function(){ 
window.location = '../menu_selection/report_menu.php';    
});  
    
       
$('#generate_barcodingg').click(function(){ 
window.location = '../menu_selection/generate_barcoding_menu1.php';    
});  

    
    

var sign = $('#articlee option:selected').val();
if (sign == 'Publication'){
    
$('#indexing_KEY').replaceWith("<input type='text' class='form-control' name='journal_magazine_KEY' id='journal_magazine_KEY' value='2' style='' hidden>"); 
    
$('.cat_cont').width('106px');    
$('.cat_vend').width('224px');
$('.cat_mattt').width('100px');
$(".cat_mattttt").width('110px');    
    
$(".cat_vend").attr('required',1); 
$('.cat_cont').attr('required',1);  
$(".cat_venddd").attr('required',1);
$(".cat_mattttt").attr('required',1);       
$(".cat_mat").attr('required',1);
    
    
$('#non_fiction_type').show();
$('#publisher_name').show();
$('#pub_place').show();
$('#index_vendor').show();
    
$('#form').show();
$('#cnumber').show();
}
else if (sign == 'Article'){
    
$('#journal_magazine_KEY').replaceWith("<input type='text' class='form-control' name='INDEXING_KEY' id='indexing_KEY' value='1' style='' hidden>");     
    
$('#publisher_name').hide();
$('#pub_place').hide();
$('#form').hide();
$('#cnumber').hide();    
 $(".cat_mattttt").width('438px'); 

    
    
$('#pubb_place').val('');  
$('#pub_year').val('');  
$('#pub_name').val('');
    
$('#non_fiction_type').hide();
$('.cat_mattt').width('384px');
$('.cat_mat').removeAttr('required');
$('.cat_mat').val('');  
    
    
$('#index_vendor').hide();
$('.cat_vend').removeAttr('required');
$('.cat_vend').val(''); 
    
$(".cat_vend").removeAttr('required');   
$(".cat_venddd").removeAttr('required');  
    
$(".cat_vend").val('');  
$(".cat_venddd").val('');  
}

$('#articlee').change(function(){
var sign = $('#articlee option:selected').val();
if (sign == 'Publication'){
    
$('#indexing_KEY').replaceWith("<input type='text' class='form-control' name='journal_magazine_KEY' id='journal_magazine_KEY' value='2' style='' hidden>"); 
    
$('.cat_cont').width('106px');    
$('.cat_vend').width('224px');
$('.cat_mattt').width('100px');
$(".cat_mattttt").width('110px');    
    
$(".cat_vend").attr('required',1); 
$('.cat_cont').attr('required',1);  
$(".cat_venddd").attr('required',1);
$(".cat_mattttt").attr('required',1);       
$(".cat_mat").attr('required',1);
    
    
$('#non_fiction_type').show();
$('#publisher_name').show();
$('#pub_place').show();
$('#index_vendor').show();
    
$('#form').show();
$('#cnumber').show();
}
else{
    
$('#journal_magazine_KEY').replaceWith("<input type='text' class='form-control' name='INDEXING_KEY' id='indexing_KEY' value='1' style='' hidden>");     
    
$('#publisher_name').hide();
$('#pub_place').hide();
$('#form').hide();
$('#cnumber').hide();    
 $(".cat_mattttt").width('438px'); 

    
    

    
$('#non_fiction_type').hide();
$('.cat_mattt').width('384px');
$('.cat_mat').removeAttr('required');
 
    
    
$('#index_vendor').hide();
$('.cat_vend').removeAttr('required');

    
$(".cat_vend").removeAttr('required');   
$(".cat_venddd").removeAttr('required');  
    
 
}
});    
    
    
$('#article').change(function(){
var sign = $('#article option:selected').val();
if (sign == 'Publication'){
    
$('#indexing_KEY').replaceWith("<input type='text' class='form-control' name='journal_magazine_KEY' id='journal_magazine_KEY' value='2' style='' hidden>"); 
    
$('.cat_cont').width('106px');    
$('.cat_vend').width('224px');
$('.cat_mattt').width('100px');
$(".cat_mattttt").width('110px');    
    
$(".cat_vend").attr('required',1); 
$('.cat_cont').attr('required',1);  
$(".cat_venddd").attr('required',1);
$(".cat_mattttt").attr('required',1);       
$(".cat_mat").attr('required',1);
    
    
$('#non_fiction_type').show();
$('#publisher_name').show();
$('#pub_place').show();
$('#index_vendor').show();
    
$('#form').show();
$('#cnumber').show();
}
else{
    
$('#journal_magazine_KEY').replaceWith("<input type='text' class='form-control' name='INDEXING_KEY' id='indexing_KEY' value='1' style='' hidden>");    
    
$('#lock1').replaceWith("<input type='text' class='form-control' name='Lock' id='lock' value=''  style='' hidden>"); 
$('#lock2').replaceWith("<input type='text' class='form-control' name='Lock' id='lock' value=''  style='' hidden>");
    

    
$('#publisher_name').hide();
$('#pub_place').hide();
$('#form').hide();
$('#cnumber').hide();    
 $(".cat_mattttt").width('438px'); 

    
    
$('#pubb_place').val('');  
$('#pub_year').val('');  
$('#pub_name').val('');
    
$('#non_fiction_type').hide();
$('.cat_mattt').width('384px');
$('.cat_mat').removeAttr('required');
$('.cat_mat').val('');  
    
    
$('#index_vendor').hide();
$('.cat_vend').removeAttr('required');
$('.cat_vend').val(''); 
    
$(".cat_vend").removeAttr('required');   
$(".cat_venddd").removeAttr('required');  
    
$(".cat_vend").val('');  
$(".cat_venddd").val('');  
}
});
    
    
$('#material_typ').change(function(){
var sign = $('#material_typ option:selected').val();
if (sign == 'Publication'){
    
$('#indexing_KEY').replaceWith("<input type='text' class='form-control' name='journal_magazine_KEY' id='journal_magazine_KEY' value='2' style=''>"); 
$('#non_fiction_type').show();
$('#publisher_name').show();
$('#pub_place').show();
    
$('.cat_mattt').width('100px');
$(".cat_mat").attr('required',1);
}
else{
    
$('#journal_magazine_KEY').replaceWith("<input type='text' class='form-control' name='INDEXING_KEY' id='indexing_KEY' value='1' style=''>");     
$('#publisher_name').hide();
$('#pub_place').hide();
$('#pubb_place').val('');  
$('#pub_year').val('');  
$('#pub_name').val('');
    
$('#non_fiction_type').hide();
$('.cat_mattt').width('305px');
$('.cat_mat').removeAttr('required');
$('.cat_mat').val('');  
}
});
    
var sign = $('#vendorr option:selected').val();
if (sign == 'Purchase'){
$("#vendd").css('margin-left','20px');
$(".cat_contt").css('width','100px');
$('#price').show();
}

$('#vendorr').change(function(){
var sign = $('#vendorr option:selected').val();
if (sign == 'Purchase'){
//$('.cat_mattt').width('175px');
//$(".cat_mat").attr('required',1);
$("#vendd").css('margin-left','20px');
$(".cat_contt").css('width','100px');
$('#price').show();
}
else{
$('#price').hide();
$("#vendd").css('margin-left','-40px');
$(".cat_contt").css('width','270px');
$('#p').val('');  
}
})
    
$('#material_type').change(function(){
var sign = $('#material_type option:selected').val();
if (sign == 'Non-Fiction'){
$('.cat_mattt').width('175px');
$(".cat_mat").attr('required',1);
$('#non_fiction_type').show();
}
else{
$('#non_fiction_type').hide();
$('.cat_mattt').width('360px');
$('.cat_mat').removeAttr('required');
$('.cat_mat').val('');  
}
}); 
    
var sign = $('#material_typee option:selected').val();
if (sign == 'Non-Fiction'){
$('.cat_matttt').width('175px');
$(".cat_maat").attr('required',1);
$('#non_fiction_typee').show();
}
  
$('#material_typee').change(function(){
var sign = $('#material_typee option:selected').val();
if (sign == 'Non-Fiction'){
$('.cat_matttt').width('175px');
$(".cat_maat").attr('required',1);
$('#non_fiction_typee').show();
}
else{    
$('#non_fiction_typee').hide();
$('.cat_matttt').width('360px');
$('.cat_maat').removeAttr('required');
$('.cat_maat').val('');  
}
});
    
    
   
    
    
    
    
    
    
$.get('../php/gnb_arrangements.php', function(data) {
});
    
    
//$.get('../page_blocks_tables/stock_list.php', function(data) {
//$('#stock_list').html(data);
//});
    
    
/*setInterval(function(){

$('#stock_list').fadeOut('slow', function(){
$(this).load('stock_list2.php', function(){
$(this).fadeIn('slow');    
});    
});
}, 15000);*/

    

$('#clear-form').click(function(){ 
$("#form__Non_GNB")[0].reset();

});
    
$('.cat_copy').change(function(){
var sign = $('.cat_copy').val();
if (sign !== 'All Copies'){
$('#form_gg').hide();
$('#form_g').fadeIn();
}
else{
$('#form_g').hide();
$('#form_gg').fadeIn();   
$('#p_type').val('');   
}
}); 
    
    
    
    
$('.cat_vend1').change(function(){
var sign = $('.cat_vend1 option:selected').val();
if (sign !== 'All Copies'){
$('#access').show();
$('.cat_vend1').width('200px');
$("#Accession_Number").attr('required',1);
}
else{
$('#access').hide();  
$('#Accession_Number').val(''); 
$('#Accession_Number').removeAttr('required');
}
});
    
$('#vendor').change(function(){
var sign = $('#vendor option:selected').val();
if (sign == 'Purchase'){
//$('.cat_mattt').width('175px');
//$(".cat_mat").attr('required',1);
$("#vend").css('margin-left','20px');
$(".cat_cont").css('width','100px');
$('#price').show();
}
else{
$('#price').hide();
//$(".cat_cont").css('margin-left','0px');
//$('.cat_cont').width('260px');
//$('.cat_mat').removeAttr('required');
$('.cat_cont').val('');  
}
});
    
$('#index_vendor').change(function(){
var sign = $('#index_vendor option:selected').val();
if (sign == 'Purchase'){
//$('.cat_mattt').width('175px');
//$(".cat_mat").attr('required',1);
    
$(".cat_vend").css('width','144px');
$(".cat_cont").css('width','100px');
$('#price').css('margin-left','-30px');
$('#price').show();    
}
else{
$(".cat_vend").css('width','250px');
$('#price').hide();
//$(".cat_cont").css('margin-left','0px');
//$('.cat_cont').width('260px');
//$('.cat_mat').removeAttr('required');
$('.cat_cont').val('');  
}
}); 
    
    
    
$('.cat_mat').change(function(){
var sign = $('.cat_mat').val();
if (sign == 'Student'){
$('#Year').fadeIn();
$('#id').removeClass('col-md-12').addClass('col-md-6');
$("#Year1").attr('required',1);
}
else{
$('#id').removeClass('col-md-6').addClass('col-md-12');
$('#Year1').removeAttr('required');
$('#Year').hide();
$('#Year1').val('');   
}
}); 

    
$('#submit_signin').click(function(){ 
$("#form_signin").submit(function(e){ 
$.ajax({
url: "php/database_calls.php",
type: "POST",
data: $(this).serialize(),
beforeSend: function() {  
$('#submit_signin').prop('disabled','disabled');
$('#button_texttttt').replaceWith("<span  id='spinner'><i class='fa fa-spinner fa-spin fa-1x' style='color:rgb(255, 255, 255)' ></i></span>"); 
},
    
success: function(data){ 
if(data == 1){
$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Username or Password is incorrect. Please check and try again.</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit_signin').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700);      
}
else if(data == 2){
$('#spinner').replaceWith("<span  id='spinner' style='font-size:17px;'>Fetching page....</span>");
window.location = 'EXECUTIVE_DIRECTOR/home.php';    
}
else if(data == 3){
$('#spinner').replaceWith("<span  id='spinner' style='font-size:17px;'>Fetching page....</span>");
window.location = 'REGIONAL_DIRECTOR/home.php';    
}
else if(data == 4){
$('#spinner').replaceWith("<span  id='spinner' style='font-size:17px;'>Fetching page....</span>");    
window.location = 'G_P_R_L_RESIDENT_LIBRARIAN/home.php';
}
else if(data == 5){
$('#spinner').replaceWith("<span  id='spinner' style='font-size:17px;'>Fetching page....</span>");
window.location = 'G_P_R_L_LIBRARIAN/home.php';    
}
else if(data == 6){
$('#spinner').replaceWith("<span  id='spinner' style='font-size:17px;'>Fetching page....</span>");
window.location = 'first_page/index.php';    
}
else if(data == 7){
$('#spinner').replaceWith("<span  id='spinner' style='font-size:17px;'>Fetching page....</span>");
window.location = 'CENTRAL_SUPERVISOR/home.php';    
}
else if(data == 8){
$('#spinner').replaceWith("<span  id='spinner' style='font-size:17px;'>Fetching page....</span>");
window.location = 'CENTRAL_CATALOGUING/home.php';   
}
else if(data == 9){
$('#spinner').replaceWith("<span  id='spinner' style='font-size:17px;'>Fetching page....</span>");
window.location = 'BRANCH_SUPERVISOR/home.php'; 
}
else if(data == 10){
$('#spinner').replaceWith("<span  id='spinner' style='font-size:17px;'>Fetching page....</span>");
window.location = 'BRANCH_REFERENCE/home.php'; 
}
    
else if(data == 100){
$('#spinner').replaceWith("<span  id='spinner' style='font-size:17px;'>Fetching page....</span>");
window.location = 'CIRCULATION/home.php'; 
}    
    
else if(data == 11){
$('#spinner').replaceWith("<span  id='spinner' style='font-size:17px;'>Fetching page....</span>");
window.location = 'BRANCH_BORROWING/home.php';    
}

else if(data == 12){
$('#spinner').replaceWith("<span  id='spinner' style='font-size:17px;'>Fetching page....</span>");
window.location = 'SYSTEM_ADMINISTRATOR/home.php';    
}
},
        
error: function (request,error) {
// This callback function will trigger on unsuccessful action 
$('#submit_signin').removeAttr('disabled'); 
$('#spinner').replaceWith("<span id='button_text' style='font-size:17px;'>Proceed</span>"); 
$('#network-error-navbar').show();
setTimeout(function(){
$('#network-error-navbar').slideToggle('slow');
}, 5000);

},
});      
$(this).unbind();
e.preventDefault();        
}); 
});    
    
//----------------------------------------------------------REAL DEAL-----------------------------------------------------// 
    


    
    
/*$('#submit_').click(function(){ 
$("#form_").submit(function(e){  
$.ajax({
url: "../php/database_calls.php",
type: "POST",
data:  new FormData(this),
contentType: false,
processData:false,
beforeSend: function() {
$("#submit_").prop("disabled", true);
$('#button_texttttt').replaceWith("<span  id='spinner'><i class='fa fa-spinner fa-spin fa-1x' style='color:rgb(255, 255, 255)' ></i></span>");
},

success: function(data){ 
if(data == 0){
$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Save unsuccessful!!! Both COPY & ACCESSION NUMBER has already been used. Please try again with different numbers respectively.</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit_').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700);      
}
else if(data == 1){ 
$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Save unsuccessful!!! COPY NUMBER has already been used. Please try again with a different number.</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit_').removeAttr('disabled');
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700);      
}
else if(data == 2){ 
$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Save unsuccessful!!! ACCESSION NUMBER has already been used. Please try again with a different number.</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit_').removeAttr('disabled');
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700);      
}
else if(data == 3){
$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Save unsuccessful!!! ISBN NUMBER inputed has already been used. Please try again with a different number.</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit_').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700);      
}
else if(data == 4){
$('#spinner').replaceWith("<span  id='spinner' style='font-size:17px;'>Proceed</span>");
$('#succ_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Entry has been saved successfully.</strong>"); 
$('#success-navbar').show();
setTimeout(function(){
$('#success-navbar').slideToggle('slow');
}, 5000); 
setTimeout(function(){
$('#submit_').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='succ_info'></strong>");
}, 5700);    
}


},

    
error: function (request,error) {
// This callback function will trigger on unsuccessful action 
$('#submit_').removeAttr('disabled'); 
$('#spinner').replaceWith("<span id='button_text' style='font-size:17px;'>Proceed</span>"); 
$('#network-error-navbar').show();
setTimeout(function(){
$('#network-error-navbar').slideToggle('slow');
}, 5000);
},
});       
$(this).unbind();
e.preventDefault();
}); 
}); */
      
/*$('#submit__Non_GNB').click(function(){ 
$("#form__Non_GNB").submit(function(e){  
$.ajax({
url: "../php/database_calls.php",
type: "POST",
data:  new FormData(this),
contentType: false,
processData:false,
beforeSend: function() {
$("#submit__Non_GNB").prop("disabled", true);
$('#button_texttttt').replaceWith("<span  id='spinner'><i class='fa fa-spinner fa-spin fa-1x' style='color:rgb(255, 255, 255)' ></i></span>");
},

success: function(data){ 
if(data == 0){
$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Save unsuccessful!!! Both COPY & ACCESSION NUMBER has already been used. Please try again with different numbers respectively.</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit__Non_GNB').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700);      
}
else if(data == 1){ 
$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Save unsuccessful!!! COPY NUMBER has already been used. Please try again with a different number.</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit__Non_GNB').removeAttr('disabled');
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700);      
}
else if(data == 2){ 
$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Save unsuccessful!!! ACCESSION NUMBER has already been used. Please try again with a different number.</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit__Non_GNB').removeAttr('disabled');
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700);      
}
else if(data == 3){
$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Save unsuccessful!!! ISBN NUMBER inputed has already been used. Please try again with a different number.</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit__Non_GNB').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700);      
}
else if(data == 4){
$('#spinner').replaceWith("<span  id='spinner' style='font-size:17px;'>Proceed</span>");
$('#lock').replaceWith("<input type='text' class='form-control' name='Lock1' id='lock1' value='2'  style='' hidden>"); 
    
$('#submit__Non_GNB').replaceWith("<a data-toggle='modal' data-target='#myModal_send_form' id='submit__Non_GNB_Replacement'  class='btn btn-primary btn-lg btn-block'><span id='button_text' style='font-size:17px;'>Click Again</span></a>"); 
}
    
else if(data == 5){
$('#spinner').replaceWith("<span  id='spinner' style='font-size:17px;'>Proceed</span>");
$('#succ_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Entry has been saved successfully.</strong>"); 
$('#success-navbar').show();
setTimeout(function(){
$('#success-navbar').slideToggle('slow');
}, 5000); 
setTimeout(function(){
$('#submit__Non_GNB').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='succ_info'></strong>");
}, 5700);    
}
else if(data == 6){
$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Save unsuccessful!!! Both SERIAL & ISSN NUMBERS has already been used. Please try again with different numbers respectively.</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit__Non_GNBB').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700);      
}
else if(data == 7){ 
$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Save unsuccessful!!! SERIAL NUMBER has already been used. Please try again with a different number.</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit__Non_GNBB').removeAttr('disabled');
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700);      
}
else if(data == 8){
$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Save unsuccessful!!! ISSN NUMBER inputed has already been used. Please try again with a different number.</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit__Non_GNBB').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700);      
}
else if(data == 12){
$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Save unsuccessful!!! SERIAL NO. / VOL. NO. / ISSN NUMBER inputed has already been used. Please try again with a different number.</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit__Non_GNB').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700);      
}
else if(data == 13){
$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Save unsuccessful!!! TITLE with same details cannot be used more than once. Please try again with different numbers respectively.</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit__Non_GNB').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700);      
}

},

    
error: function (request,error) {
// This callback function will trigger on unsuccessful action 
$('#submit__Non_GNB').removeAttr('disabled'); 
$('#spinner').replaceWith("<span id='button_text' style='font-size:17px;'>Proceed</span>"); 
$('#network-error-navbar').show();
setTimeout(function(){
$('#network-error-navbar').slideToggle('slow');
}, 5000);
},
});       
$(this).unbind();
e.preventDefault();
}); 
}); 
    
$('#submit__Non_GNB1').click(function(){ 
$("#form__Non_GNB").submit(function(e){
$('#myModal_send_form').modal('hide'); 
$.ajax({
url: "../php/database_calls.php",
type: "POST",
data:  new FormData(this),
contentType: false,
processData:false,
beforeSend: function() {
$("#submit__Non_GNB1").prop("disabled", true);
$('#button_texttttt').replaceWith("<span  id='spinner'><i class='fa fa-spinner fa-spin fa-1x' style='color:rgb(255, 255, 255)' ></i></span>");
},

success: function(data){ 
if(data == 5){
$('#spinner').replaceWith("<span  id='spinner' style='font-size:17px;'>Proceed</span>");
$('#lock1').replaceWith("<input type='text' class='form-control' name='Lock1' id='lock2' value='2'  style='' hidden>"); 
    
$('#submit__Non_GNB_Replacement').hide();
$('#submit__Non_GNBB').fadeIn('slow');
        
$('#succ_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Entry has been saved successfully.</strong>"); 
$('#success-navbar').show();
setTimeout(function(){
$('#success-navbar').slideToggle('slow');
}, 5000); 
setTimeout(function(){
$('#submit__Non_GNB1').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='succ_info'></strong>");
}, 5700);    
}



},

    
error: function (request,error) {
// This callback function will trigger on unsuccessful action 
$('#submit__Non_GNB1').removeAttr('disabled'); 
$('#spinner').replaceWith("<span id='button_text' style='font-size:17px;'>Proceed</span>"); 
$('#network-error-navbar').show();
setTimeout(function(){
$('#network-error-navbar').slideToggle('slow');
}, 5000);
},
});       
$(this).unbind();
e.preventDefault();
}); 
}); 
    
$('#submit__Non_GNBB').click(function(){ 
$("#form__Non_GNB").submit(function(e){  
$.ajax({
url: "../php/database_calls.php",
type: "POST",
data:  new FormData(this),
contentType: false,
processData:false,
beforeSend: function() {
$("#submit__Non_GNBB").prop("disabled", true);
$('#button_texttttt').replaceWith("<span  id='spinner'><i class='fa fa-spinner fa-spin fa-1x' style='color:rgb(255, 255, 255)' ></i></span>");
},

success: function(data){ 
if(data == 0){
$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Save unsuccessful!!! Both COPY & ACCESSION NUMBER has already been used. Please try again with different numbers respectively.</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit__Non_GNBB').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700);      
}
else if(data == 1){ 
$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Save unsuccessful!!! COPY NUMBER has already been used. Please try again with a different number.</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit__Non_GNBB').removeAttr('disabled');
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700);      
}
else if(data == 2){ 
$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Save unsuccessful!!! ACCESSION NUMBER has already been used. Please try again with a different number.</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit__Non_GNBB').removeAttr('disabled');
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700);      
}
else if(data == 3){
$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Save unsuccessful!!! ISBN NUMBER inputed has already been used. Please try again with a different number.</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit__Non_GNBB').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700);      
}
else if(data == 4){
$('#spinner').replaceWith("<span  id='spinner' style='font-size:17px;'>Proceed</span>");
$('#lock').replaceWith("<input type='text' class='form-control' name='Lock1' id='lock1' value='2'  style='' hidden>"); 
    
$('#submit__Non_GNBB').replaceWith("<a data-toggle='modal' data-target='#myModal_send_form' id='submit__Non_GNB_Replacement'  class='btn btn-primary btn-lg btn-block'><span id='button_text' style='font-size:17px;'>Click Again</span></a>"); 
}
    
else if(data == 5){
$('#spinner').replaceWith("<span  id='spinner' style='font-size:17px;'>Proceed</span>");
$('#succ_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Entry has been saved successfully.</strong>"); 
$('#success-navbar').show();
setTimeout(function(){
$('#success-navbar').slideToggle('slow');
}, 5000); 
setTimeout(function(){
$('#submit__Non_GNBB').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='succ_info'></strong>");
}, 5700);    
}
else if(data == 6){
$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Save unsuccessful!!! Both SERIAL & ISSN NUMBERS has already been used. Please try again with different numbers respectively.</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit__Non_GNBB').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700);      
}
else if(data == 7){ 
$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Save unsuccessful!!! SERIAL NUMBER has already been used. Please try again with a different number.</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit__Non_GNBB').removeAttr('disabled');
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700);      
}
else if(data == 8){
$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Save unsuccessful!!! ISSN NUMBER inputed has already been used. Please try again with a different number.</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit__Non_GNBB').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700);      
}
else if(data == 9){ 
$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Save unsuccessful!!! COPY NUMBER has already been used. Please try again with a different number.</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit__Non_GNBB').removeAttr('disabled');
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700)
}
    
else if(data == 12){
$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Save unsuccessful!!! SERIAL NO. / VOL. NO. / ISSN NUMBER inputed has already been used. Please try again with a different number.</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit__Non_GNBB').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700);      
}
else if(data == 13){
$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Save unsuccessful!!! TITLE with same details cannot be used more than once. Please try again with different numbers respectively.</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit__Non_GNBB').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700);      
}       
},

    
error: function (request,error) {
// This callback function will trigger on unsuccessful action 
$('#submit__Non_GNB').removeAttr('disabled'); 
$('#spinner').replaceWith("<span id='button_text' style='font-size:17px;'>Proceed</span>"); 
$('#network-error-navbar').show();
setTimeout(function(){
$('#network-error-navbar').slideToggle('slow');
}, 5000);
},
});       
$(this).unbind();
e.preventDefault();
}); 
});*/
   
$('#submit__Non_GNB').click(function(){ 
$("#form__Non_GNB").submit(function(e){  
$.ajax({
url: "../php/database_calls.php",
type: "POST",
data:  new FormData(this),
contentType: false,
processData:false,
beforeSend: function() {
$("#submit__Non_GNB").prop("disabled", true);
$('#button_texttttt').replaceWith("<span  id='spinner'><i class='fa fa-spinner fa-spin fa-1x' style='color:rgb(255, 255, 255)' ></i></span>");
},

success: function(data){ 
alert(data);
if(data == 0){
$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Save unsuccessful!!! ISBN NUMBER inputed has already been used. Please try again with a different number.</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit__Non_GNB').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700);      
}

else if(data == 2){
$('#spinner').replaceWith("<span  id='button_texttttt' style='font-size:17px;'>Proceed</span>");
$('#succ_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Entry has been saved successfully.</strong>"); 
$('#success-navbar').show();
setTimeout(function(){
$('#success-navbar').slideToggle('slow');
}, 5000); 
setTimeout(function(){
$('#submit__Non_GNB').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='succ_info'></strong>");
}, 5700);    
}


},

    
error: function (request,error) {
// This callback function will trigger on unsuccessful action 
$('#submit__Non_GNB').removeAttr('disabled'); 
$('#spinner').replaceWith("<span id='button_text' style='font-size:17px;'>Proceed</span>"); 
$('#network-error-navbar').show();
setTimeout(function(){
$('#network-error-navbar').slideToggle('slow');
}, 5000);
},
});       
$(this).unbind();
e.preventDefault();
});
});     
    
    
    
    
    
    
$('#submit__Add_Copy').click(function(){ 
$("#form__Add_Copy").submit(function(e){ 
$('#myModal_addcopy').modal('hide'); 
$.ajax({
url: "../php/database_calls.php",
type: "POST",
data: $(this).serialize(),
beforeSend: function() {
$("#submit__Add_Copy").prop("disabled", true);
$('#button_texttttt').replaceWith("<span  id='spinner'><i class='fa fa-spinner fa-spin fa-1x' style='color:rgb(255, 255, 255)' ></i></span>");
},

success: function(data){ 
if(data == 0){
$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Save unsuccessful!!! Both COPY & ACCESSION NUMBER has already been used. Please try again with different numbers respectively.</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit__Add_Copy').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700);      
}
else if(data == 1){ 
$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Save unsuccessful!!! COPY NUMBER has already been used. Please try again with a different number.</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit__Add_Copy').removeAttr('disabled');
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700);      
}
else if(data == 2){ 
$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Save unsuccessful!!! ACCESSION NUMBER has already been used. Please try again with a different number.</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit__Add_Copy').removeAttr('disabled');
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700);      
}
else if(data == 3){
$('#spinner').replaceWith("<span  id='spinner' style='font-size:17px;'>Proceed</span>");
$('#succ_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Entry has been saved successfully.</strong>"); 
$('#success-navbar').show();
setTimeout(function(){
$('#success-navbar').slideToggle('slow');
}, 5000); 
setTimeout(function(){
$('#submit__Add_Copy').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='succ_info'></strong>");
}, 5700);    
}

},

    
error: function (request,error) {
// This callback function will trigger on unsuccessful action 
$('#submit__Add_Copy').removeAttr('disabled'); 
$('#spinner').replaceWith("<span id='button_text' style='font-size:17px;'>Proceed</span>"); 
$('#network-error-navbar').show();
setTimeout(function(){
$('#network-error-navbar').slideToggle('slow');
}, 5000);
},
});       
$(this).unbind();
e.preventDefault();  
}); 
}); 
    
$('#submit__Edit').click(function(){  
$("#form__Edit").submit(function(e){  
$('#myModal_edit').modal('hide');
$.ajax({
url: "../php/database_calls.php",
type: "POST",
data:  new FormData(this),
contentType: false,
processData:false,
beforeSend: function() {
$("#submit__Edit").prop("disabled", true);
$('#button_texttttt').replaceWith("<span  id='spinner'><i class='fa fa-spinner fa-spin fa-1x' style='color:rgb(255, 255, 255)' ></i></span>");
},

success: function(data){ 
if(data == 1){ 
$('#spinner').replaceWith("<span  id='spinner' style='font-size:17px;'>Save</span>");
$('#succ_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>All copies of selected stock item has been edited successfully.</strong>"); 
$('#success-navbar').show();
setTimeout(function(){
$('#success-navbar').slideToggle('slow');
}, 5000); 
setTimeout(function(){
    
if(screen.width <= 1000){
window.location="../GNB_MOBILE/stock_list.php";
}else{
//window.location = 'stock_list.php';    
}    
$('#submit__Edit').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='succ_info'></strong>");
    

/*$.get('stock_list2.php', function(data) {
setTimeout(function(){
$('#stock_list').fadeOut('slow');
$('#stock_list').html(data);
}, 100);
setTimeout(function(){
$('#stock_list').fadeIn('slow');
},800);   
});*/    
 
       
    
}, 5700);   
}
else if(data == 2){
$('#spinner').replaceWith("<span  id='spinner' style='font-size:17px;'>Save</span>");
$('#succ_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Specified copy of selected stock item has been edited successfully.</strong>"); 
$('#success-navbar').show();
setTimeout(function(){
$('#success-navbar').slideToggle('slow');
}, 5000); 
setTimeout(function(){
if(screen.width <= 1000){
window.location="../GNB_MOBILE/stock_list.php";
}else{
//window.location = 'stock_list.php';    
}     
$('#submit__Edit').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='succ_info'></strong>");
}, 5700);   
}   
},


    
error: function (request,error) {
// This callback function will trigger on unsuccessful action 
$('#submit__Edit').removeAttr('disabled'); 
$('#spinner').replaceWith("<span id='button_text' style='font-size:17px;'>Proceed</span>"); 
$('#network-error-navbar').show();
setTimeout(function(){
$('#network-error-navbar').slideToggle('slow');
}, 5000);
},
});
        
$(this).unbind();
e.preventDefault();       
}); 
});
    
$('#submit__Non_GNB_Edit').click(function(){ 
$("#form__Non_GNB_Edit").submit(function(e){  
$.ajax({
url: "../php/database_calls.php",
type: "POST",
data:  new FormData(this),
contentType: false,
processData:false,
beforeSend: function() {
$("#submit__Non_GNB_Edit").prop("disabled", true);
$('#button_texttttt').replaceWith("<span  id='spinner'><i class='fa fa-spinner fa-spin fa-1x' style='color:rgb(255, 255, 255)' ></i></span>");
},

success: function(data){ 
if(data == 1){ 
$('#spinner').replaceWith("<span  id='spinner' style='font-size:17px;'>Save</span>");
$('#succ_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>All copies of selected stock item has been edited successfully.</strong>"); 
$('#success-navbar').show();
setTimeout(function(){
$('#success-navbar').slideToggle('slow');
}, 5000); 
setTimeout(function(){
    
if(screen.width <= 1000){
window.location="../CATALOGUING/stock_list.php";
}else{
window.location = 'stock_list.php';    
}    
$('#submit__Non_GNB_Edit').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='succ_info'></strong>");
}, 5700);   
}
else if(data == 2){
$('#spinner').replaceWith("<span  id='spinner' style='font-size:17px;'>Save</span>");
$('#succ_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Specified copy of selected stock item has been edited successfully.</strong>"); 
$('#success-navbar').show();
setTimeout(function(){
$('#success-navbar').slideToggle('slow');
}, 5000); 
setTimeout(function(){
if(screen.width <= 1000){
window.location="../CATALOGUING/stock_list.php";
}else{
window.location = 'stock_list.php';    
}     
$('#submit__Non_GNB_Edit').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='succ_info'></strong>");
}, 5700);   
}
    
    
},


    
error: function (request,error) {
// This callback function will trigger on unsuccessful action 
$('#submit__Non_GNB_Edit').removeAttr('disabled'); 
$('#spinner').replaceWith("<span id='button_text' style='font-size:17px;'>Proceed</span>"); 
$('#network-error-navbar').show();
setTimeout(function(){
$('#network-error-navbar').slideToggle('slow');
}, 5000);
},
});
        
$(this).unbind();
e.preventDefault();       
}); 
});
    
$('#submit__Add_Class_Number').click(function(){     
$("#form__Add_Class_Number").submit(function(e){  
$('#myModal_addgnb').modal('hide'); 
$.ajax({
url: "../php/database_calls.php",
type: "POST",
data: $(this).serialize(),
beforeSend: function() {
$("#submit__Add_Class_Number").prop("disabled", true);
$('#button_texttttt').replaceWith("<span  id='spinner'><i class='fa fa-spinner fa-spin fa-1x' style='color:rgb(255, 255, 255)' ></i></span>");
},

success: function(data){ 
if(data == 1){ 
$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Save unsuccessful!!! CLASS NUMBER has already been used. Please try again with a different number.</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit__Add_Class_Number').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700);   
}
else if(data == 2){
$('#spinner').replaceWith("<span  id='spinner' style='font-size:17px;'>Save</span>");
$('#succ_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'> Saving was successfull.</strong>"); 
$('#success-navbar').show();
setTimeout(function(){
$('#success-navbar').slideToggle('slow');
window.location = '../G_P_R_L_LIBRARIAN/class_numberadd.php';
}, 5000);       
}    
else if(data == 3){
$('#spinner').replaceWith("<span  id='spinner' style='font-size:17px;'>Save</span>");
$('#succ_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'> Saving was successfull.</strong>"); 
$('#success-navbar').show();
setTimeout(function(){
$('#success-navbar').slideToggle('slow');
window.location = '../G_P_R_L_LIBRARIAN/index_class_numberadd.php';
}, 5000);       
}    

},

    
error: function (request,error) {
// This callback function will trigger on unsuccessful action 
$('#submit__Add_Class_Number').removeAttr('disabled'); 
$('#spinner').replaceWith("<span id='button_text' style='font-size:17px;'>Proceed</span>"); 
$('#network-error-navbar').show();
setTimeout(function(){
$('#network-error-navbar').slideToggle('slow');
}, 5000);
},
});
        
$(this).unbind();
e.preventDefault();       
}); 
});  
    
$('#submit__Edit_Class_Number').click(function(){ 
$("#form__Edit_Class_Number").submit(function(e){  
$('#myModal_edit').modal('hide');
$.ajax({
url: "../php/database_calls.php",
type: "POST",
data:  new FormData(this),
contentType: false,
processData:false,
beforeSend: function() {
$("#submit__Edit_Class_Number").prop("disabled", true);
$('#button_texttttt').replaceWith("<span  id='spinner'><i class='fa fa-spinner fa-spin fa-1x' style='color:rgb(255, 255, 255)' ></i></span>");
},

success: function(data){
$('#spinner').replaceWith("<span  id='spinner' style='font-size:17px;'>Save</span>");
$('#succ_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Stock item has been updated successfully.</strong>"); 
$('#success-navbar').show();
setTimeout(function(){
$('#success-navbar').slideToggle('slow');
}, 5000); 
setTimeout(function(){
if(screen.width <= 1000){
window.location="../GNB_MOBILE/stock_list_class_yes.php";
}else{
//window.location = 'stock_list_class_yes.php';    
}  
$('#submit__Edit_Class_Number').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='succ_info'></strong>");
}, 5700);   
},

    
error: function (request,error) {
// This callback function will trigger on unsuccessful action 
$('#submit__Edit_Class_Number').removeAttr('disabled'); 
$('#spinner').replaceWith("<span id='button_text' style='font-size:17px;'>Proceed</span>"); 
$('#network-error-navbar').show();
setTimeout(function(){
$('#network-error-navbar').slideToggle('slow');
}, 5000);
},
});
        
$(this).unbind();
e.preventDefault();

}); 
}); 
    
$('#submit_Delete_Class_Yes').click(function(){ 
$("#form_Delete_Class_Yes").submit(function(e){  
$.ajax({
url: "../php/database_calls.php",
type: "POST",
data: $(this).serialize(),
beforeSend: function() {
$("#submit_Delete_Class_Yes").prop("disabled", true);
$('#button_texttttt').replaceWith("<span  id='spinner'><i class='fa fa-spinner fa-spin fa-1x' style='color:rgb(255, 255, 255)' ></i></span>");
},

success: function(data){ 
$('#spinner').replaceWith("<span  id='spinner' style='font-size:17px;'>Save</span>");
$('#succ_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Stock item has been deleted successfully.</strong>"); 
$('#success-navbar').show();
setTimeout(function(){
$('#success-navbar').slideToggle('slow');
}, 5000); 
setTimeout(function(){
window.location = '../G_P_R_L_LIBRARIAN/stock_list_class_yes.php';
$('#submit_Delete_Class_Yes').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='succ_info'></strong>");
}, 5700);   
},

    
error: function (request,error) {
// This callback function will trigger on unsuccessful action 
$('#submit_Delete_Class_Yes').removeAttr('disabled'); 
$('#spinner').replaceWith("<span id='button_text' style='font-size:17px;'>Proceed</span>"); 
$('#network-error-navbar').show();
setTimeout(function(){
$('#network-error-navbar').slideToggle('slow');
}, 5000);
},
});
        
$(this).unbind();
e.preventDefault();       
}); 
});
    
$('button#submit_StockDelete').click(function(){ 
$('form#form_StockDelete').submit(function(e){  
$('#myModal_delete_article').modal('hide'); 
$.ajax({
url: "../php/database_calls.php",
type: "POST",
data: $(this).serialize(),
beforeSend: function() {  
},

success: function(data){    
if(data == 0){ 
$('#succ_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Stock item has been deleted successfully.<a href='stock_list.php'>Click me to go BACK</a></strong>"); 
$('#success-navbar').show();
setTimeout(function(){
$('#success-navbar').slideToggle('slow');
}, 5000); 
setTimeout(function(){
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='succ_info'></strong>");
}, 5700);           
}
else if(data == 1){
$('#succ_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Stock has been deleted successfully. <a href='stock_list_class_yes.php'>Click me to go BACK</a></strong>"); 
$('#success-navbar').show();
setTimeout(function(){
if(screen.width <= 1000){
//window.location="../GNB_MOBILE/stock_list.php";
}else{
//window.location = 'book_delete.php';    
}    
$('#success-navbar').slideToggle('slow');
}, 5000);
}    
    
    
},
        
error: function (request,error) {
// This callback function will trigger on unsuccessful action 
$('#spinner').replaceWith("<span id='button_text' style='font-size:17px;'>Proceed</span>"); 
$('#network-error-navbar').show();
setTimeout(function(){
$('#network-error-navbar').slideToggle('slow');
}, 5000);

   
}
 
});
      
e.preventDefault();       
}); 
});
    
    
    
    
    
    
    
$('#submit_add_user').click(function(){ 
$("#form_add_user").submit(function(e){  
$.ajax({
url: "../php/database_calls.php",
type: "POST",
data:  new FormData(this),
contentType: false,
processData:false,
beforeSend: function() {
$("#submit_add_user").prop("disabled", true);
$('#button_texttttt').replaceWith("<span  id='spinner'><i class='fa fa-spinner fa-spin fa-1x' style='color:rgb(255, 255, 255)' ></i></span>");
},

success: function(data){ 
if(data == 0){
$('#spinner').replaceWith("<span id='button_textt' style='font-size:17px;'>Proceed</span>");
$('#err_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Save unsuccessful!!! User has already been registered. Please try again with a different user!!!</strong>");  
$('#error-navbar').show();
setTimeout(function(){
$('#error-navbar').slideToggle('slow');
}, 5000);
setTimeout(function(){
$('#submit_add_user').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='err_info'></strong>"); 
}, 5700);      
}

else if(data == 4){
$('#spinner').replaceWith("<span  id='spinner' style='font-size:17px;'>Proceed</span>");
$('#succ_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='mess_info'>Entry has been saved successfully.</strong>"); 
$('#success-navbar').show();
setTimeout(function(){
$('#success-navbar').slideToggle('slow');
}, 5000); 
setTimeout(function(){
$('#submit_add_user').removeAttr('disabled'); 
$('#mess_info').replaceWith("<strong style='font-size:90%; font-weight:700;' id='succ_info'></strong>");
}, 5700);    
}


},

    
error: function (request,error) {
// This callback function will trigger on unsuccessful action 
$('#submit_add_user').removeAttr('disabled'); 
$('#spinner').replaceWith("<span id='button_text' style='font-size:17px;'>Proceed</span>"); 
$('#network-error-navbar').show();
setTimeout(function(){
$('#network-error-navbar').slideToggle('slow');
}, 5000);
},
});       
$(this).unbind();
e.preventDefault();
}); 
});    
    
    
    
    
    
    

   
// Get current path and find target link    
var path = window.location.pathname.split("/").pop();
var target = $('div a[href="'+path+'"]');   
    
    
// Add active class to target link
target.parent().addClass('active').siblings().removeClass('active');
  
});


    




//-------------------------------------PURE JAVASCRIPT------------------------------------------------------------//
function calculate(){
var paying = document.getElementById('Paying').value;
var paid = document.getElementById('query').value;
var total = document.getElementById('TotalAmt').value;
var totpaid = parseInt(paying) + parseInt(paid);
var newbalance = parseFloat(total) - parseFloat(totpaid);

    
if(!isNaN(totpaid)){
document.getElementById('AmtPaid').value = totpaid;
}   
if(!isNaN(newbalance)){
document.getElementById('Balance').value = newbalance;
}    
    
   
}

