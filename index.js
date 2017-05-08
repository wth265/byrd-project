var currentHeigth = '500px';
var currentWidth ='500px';
$(document).ready(function(){
 
  $("#grow").click( function()
      {
   $(main).animate({ 
        height: '+=20px' ,
        width: '+=20px'
    });
}); 

  $("#shrink").click( function()
      {
  $(main).animate({
    height: '-=20px',
    width: '-=20px'
    });
});
 
$("#reset").click( function()
{
$(main).animate({
  height:currentHeigth,
  width:currentWidth});
});
});