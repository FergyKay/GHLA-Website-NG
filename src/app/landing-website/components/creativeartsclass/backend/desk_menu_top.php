
<?php
include('session.php');    
    
if($unit == 'General Library' && $role == 'Executive Director' || $unit == 'General Library' && $role == 'Assistant Director'){
echo "<div class='menu_bar' id='main' role='main'>";
echo "<ul class='menu'>";
echo "<li><a href='home1.php'><i class='fa fa-home fa fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Home</a></li>";      
echo "<li><a href='gnb.php'><i class='fa fa-bandcamp fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;GNB <i class='caret'></i></a></li>";             
echo "<li><a href='master_report.php'><i class='fa fa-industry fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Master Report  </a></li>";
echo "<li><a href='referencing.php'><i class='fa fa-list fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Reference<i class='caret'></i></a></li>";
echo "<li><a href='#'><i class='fa fa-flag fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;W.I.P <i class='caret'></i></a></li>"; 
echo "<li><a href='#'><i class='fa fa-flag fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;W.I.P <i class='caret'></i></a></li>";
echo "<li><a href='../index.php'><i class='fa fa-sign-out fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Sign Out <i class='caret'></i></a></li>";
echo "</ul>";    
echo "</div>";
}
elseif($unit == 'General Regional Units' && $role == 'Regional Director' || $unit == 'General Regional Units' && $role == 'Assistant Regional Director'){
echo "<div class='menu_bar' id='main' role='main'>";
echo "<ul class='menu'>";
    
echo "<li><a href=''><i class='fa fa-home fa fa-2x menu_icon' style=' font-size:16px;'></i> &nbsp;Home</a></li>";  
echo "<li>
<a href='class_numberadd.php'><i class='fa fa-home fa fa-2x menu_icon' style=' font-size:16px;'></i> &nbsp;Add Class Number </a>
</li>";      
echo "<li><a href='stock_list_class_yes.php'><i class='fa fa-home fa-2x menu_icon' style=' font-size:16px;'></i> &nbsp;Stock List</a></li>";
echo "<li class='active'><a href='gnb.php'><i class='fa fa-spin fa-home fa-2x menu_icon' style='color:rgb(59, 209, 83); font-size:16px;'></i> &nbsp;<span style='color:#4b5049; text-shadow: 0px 0px 0px;'>GNB</span> <i class='fa fa-caret-down fa-2x menu_icon' style=' font-size:13px; margin-left:5px;'></i></a></li>"; 
echo "<li><a href='master_report.php'><i class='fa fa-database fa-2x menu_icon' style=' font-size:16px;'></i> &nbsp;MASTER REPORT </a></li>";
echo "<li><a href='data_sync.php'><i class='fa fa-refresh fa-2x menu_icon' style=' font-size:16px;'></i> &nbsp;DATA SYNC <i class='caret'></i></a></li>";
echo "<li><a href='../index.php'><i class='fa fa-sign-out fa-2x menu_icon' style=' font-size:16px;'></i> &nbsp;Sign Out <i class='caret'></i></a></li>";
echo "</ul>";
echo "</div>";
}
elseif(!empty($region) && $branch == 'Research Library' && $unit == 'Administration' && $role == 'Resident Librarian'){
echo "<div class='menu_bar' id='main' role='main'>";
echo "<ul class='menu'>";
echo "<li><a href='home.php'><i class='fa fa-home fa fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Home</a></li>";      
echo "<li><a href='class_numberadd.php'><i class='fa fa-plus fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Assign Class No. <i class='caret'></i></a></li>";              
echo "<li><a href='stock_list_class_yes.php'><i class='fa fa-list fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Stock List  </a></li>";
echo "<li><a href='gnb.php'><i class='fa fa-bandcamp fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;GNB <i class='caret'></i></a></li>";
echo "<li><a href='report.php'><i class='fa fa-database fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Report <i class='caret'></i></a></li>"; 
echo "<li><a href='referencing.php'><i class='fa fa-barcode fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Reference<i class='caret'></i></a></li>";
echo "<li><a href='../index.php'><i class='fa fa-sign-out fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Sign Out <i class='caret'></i></a></li>";
echo "</ul>";    
echo "</div>"; 
}
elseif(!empty($region) && $branch == 'Research Library' && $unit == 'Administration' && $role == 'Assistant Librarian / Librarian'){   
echo "<div class='menu_bar' id='main' role='main'>";
echo "<ul class='menu'>";
echo "<li><a href='home.php'><i class='fa fa-home fa fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Home</a></li>";      
echo "<li><a href='class_numberadd.php'><i class='fa fa-plus fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Assign Class No. <i class='caret'></i></a></li>";              
echo "<li><a href='stock_list_class_yes.php'><i class='fa fa-list fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Stock List  </a></li>";
echo "<li><a href='classified_list.php'><i class='fa fa-bandcamp fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Classified Index <i class='caret'></i></a></li>";
echo "<li><a href='report.php'><i class='fa fa-industry fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Stock Report <i class='caret'></i></a></li>"; 
echo "<li><a href='#'><i class='fa fa-flag fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;W.I.P<i class='caret'></i></a></li>";
echo "<li><a href='../index.php'><i class='fa fa-sign-out fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Sign Out <i class='caret'></i></a></li>";
echo "</ul>";    
echo "</div>";    
    
}
elseif(!empty($region) && $branch == 'Research Library' && $unit == 'Cataloguing' && $role == 'Library Officer'){
echo "<div class='menu_bar' id='main' role='main'>";
echo "<ul class='menu'>";
echo "<li><a href='home.php'><i class='fa fa-home fa fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Home</a></li>";      
echo "<li><a href='catalogue.php'><i class='fa fa-plus fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Add To Stock<i class='caret'></i></a></li>";              
echo "<li><a href='stock_list.php'><i class='fa fa-list fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Stock List  </a></li>";
echo "<li><a href='#'><i class='fa fa-flag fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;W.I.P<i class='caret'></i></a></li>";
echo "<li><a href='#'><i class='fa fa-flag fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;W.I.P <i class='caret'></i></a></li>"; 
echo "<li><a href='#'><i class='fa fa-flag fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;W.I.P <i class='caret'></i></a></li>";
echo "<li><a href='../index.php'><i class='fa fa-sign-out fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Sign Out <i class='caret'></i></a></li>";
echo "</ul>";    
echo "</div>";
}

elseif(!empty($region) && $branch == 'Central Library' && $role == 'Assistant Librarian / Librarian'){
echo "<div class='menu_bar' id='main' role='main'>";
echo "<ul class='menu'>";
echo "<li><a href='home.php'><i class='fa fa-home fa fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Home</a></li>";      
echo "<li><a href='catalogue.php'><i class='fa fa-plus fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Add To Stock<i class='caret'></i></a></li>";              
echo "<li><a href='stock_list.php'><i class='fa fa-list fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Stock List  </a></li>";
echo "<li><a href='referencing.php'><i class='fa fa-industry fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Reference<i class='caret'></i></a></li>";
echo "<li><a href='#'><i class='fa fa-flag fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;W.I.P <i class='caret'></i></a></li>"; 
echo "<li><a href='#'><i class='fa fa-flag fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;W.I.P <i class='caret'></i></a></li>";
echo "<li><a href='../index.php'><i class='fa fa-sign-out fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Sign Out <i class='caret'></i></a></li>";
echo "</ul>";    
echo "</div>";
}

elseif(!empty($region) && $branch == 'Central Library' && $role == 'Library Officer'){
echo "<div class='menu_bar' id='main' role='main'>";
echo "<ul class='menu'>";
echo "<li><a href='home.php'><i class='fa fa-home fa fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Home</a></li>";      
echo "<li><a href='aquisition_data.php'><i class='fa fa-plus fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Aquisition Data<i class='caret'></i></a></li>";              
echo "<li><a href='stock_list.php'><i class='fa fa-list fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Stock List  </a></li>";
echo "<li><a href='referencing.php'><i class='fa fa-industry fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Reference<i class='caret'></i></a></li>";
echo "<li><a href='#'><i class='fa fa-flag fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;W.I.P <i class='caret'></i></a></li>"; 
echo "<li><a href='#'><i class='fa fa-flag fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;W.I.P <i class='caret'></i></a></li>";
echo "<li><a href='../index.php'><i class='fa fa-sign-out fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Sign Out <i class='caret'></i></a></li>";
echo "</ul>";    
echo "</div>";
}

elseif(!empty($region) && $branch !== 'Research Library' && $role == 'Assistant Librarian / Librarian' || !empty($region) && $branch !== 'Central Library' && $role == 'Assistant Librarian / Librarian'){
echo "<div class='menu_bar' id='main' role='main'>";
echo "<ul class='menu'>";
echo "<li><a href='home.php'><i class='fa fa-home fa fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Home</a></li>";      
echo "<li><a href='catalogue.php'><i class='fa fa-plus fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Add To Stock<i class='caret'></i></a></li>";              
echo "<li><a href='stock_list.php'><i class='fa fa-list fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Stock List  </a></li>";
echo "<li><a href='generate_barcoding.php'><i class='fa fa-barcode fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Gen. Barcode<i class='caret'></i></a></li>";
echo "<li><a href='#'><i class='fa fa-flag fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;W.I.P <i class='caret'></i></a></li>"; 
echo "<li><a href='#'><i class='fa fa-flag fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;W.I.P <i class='caret'></i></a></li>";
echo "<li><a href='../index.php'><i class='fa fa-sign-out fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Sign Out <i class='caret'></i></a></li>";
echo "</ul>";    
echo "</div>";
}

elseif(!empty($region) && $branch !== 'Research Library' && $unit == 'Referencing' && $role == 'Library Officer' || !empty($region) && $branch !== 'Central Library' && $unit == 'Referencing' && $role == 'Library Officer'){
echo "<div class='menu_bar' id='main' role='main'>";
echo "<ul class='menu'>";
echo "<li><a href='home.php'><i class='fa fa-home fa fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Home</a></li>";      
echo "<li><a href='catalogue.php'><i class='fa fa-plus fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Add To Stock<i class='caret'></i></a></li>";              
echo "<li><a href='stock_list.php'><i class='fa fa-list fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Stock List  </a></li>";
echo "<li><a href='referencing.php'><i class='fa fa-industry fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Reference<i class='caret'></i></a></li>";
echo "<li><a href='#'><i class='fa fa-flag fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;W.I.P <i class='caret'></i></a></li>"; 
echo "<li><a href='#'><i class='fa fa-flag fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;W.I.P <i class='caret'></i></a></li>";
echo "<li><a href='../index.php'><i class='fa fa-sign-out fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Sign Out <i class='caret'></i></a></li>";
echo "</ul>";    
echo "</div>";
}

elseif(!empty($region) && $branch !== 'Research Library' && $unit == 'Borrowing' && $role == 'Library Officer' || !empty($region) && $branch !== 'Central Library' && $unit == 'Borrowing' && $role == 'Library Officer'){
echo "<div class='menu_bar' id='main' role='main'>";
echo "<ul class='menu'>";
echo "<li><a href='home.php'><i class='fa fa-home fa fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Home</a></li>";      
echo "<li><a href='catalogue.php'><i class='fa fa-plus fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Add To Stock<i class='caret'></i></a></li>";              
echo "<li><a href='stock_list.php'><i class='fa fa-list fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Stock List  </a></li>";
echo "<li><a href='referencing.php'><i class='fa fa-industry fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Reference<i class='caret'></i></a></li>";
echo "<li><a href='#'><i class='fa fa-flag fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;W.I.P <i class='caret'></i></a></li>"; 
echo "<li><a href='#'><i class='fa fa-flag fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;W.I.P <i class='caret'></i></a></li>";
echo "<li><a href='../index.php'><i class='fa fa-sign-out fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Sign Out <i class='caret'></i></a></li>";
echo "</ul>";    
echo "</div>";
}

elseif($unit == 'General I.T' && $role == 'System Administrator' || !empty($region) && $branch !== 'Central Library' && $unit == 'Borrowing' && $role == 'Library Officer'){
echo "<div class='menu_bar' id='main' role='main'>";
echo "<ul class='menu'>";
echo "<li><a href='home.php'><i class='fa fa-home fa fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Home</a></li>";      
echo "<li><a href='catalogue.php'><i class='fa fa-plus fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Add To Stock<i class='caret'></i></a></li>";              
echo "<li><a href='stock_list.php'><i class='fa fa-list fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Stock List  </a></li>";
echo "<li><a href='referencing.php'><i class='fa fa-industry fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Reference<i class='caret'></i></a></li>";
echo "<li><a href='#'><i class='fa fa-flag fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;W.I.P <i class='caret'></i></a></li>"; 
echo "<li><a href='#'><i class='fa fa-flag fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;W.I.P <i class='caret'></i></a></li>";
echo "<li><a href='../index.php'><i class='fa fa-sign-out fa-2x menu_icon' style='font-size:16px;'></i> &nbsp;Sign Out <i class='caret'></i></a></li>";
echo "</ul>";    
echo "</div>";
}
    
?>
