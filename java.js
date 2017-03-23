/* global $ */ 
$(document).ready(function(){
    

var $pic = $("#pic");
var wolfBott= $("#pic").height(); 
var groundTop= $("#ground").height();  
 
 
 
$pic.click(function(){
   //Your code goes here
  
   var wolf= setInterval(function(){
      $pic.css("top", $pic.offset().top + 1) ;
   }, 10 ); 
});
   if (wolfBott <= groundTop ){
       clearinterval (wolf); 
   }
   
   
 
    
}); 