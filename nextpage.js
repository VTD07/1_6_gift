var count=0;
var x=document.getElementById("flower");
function myfunction()
{
  count++;
  if(count%2!=0)
  {
    $(".contain").fadeOut(1000,function(){
      $(".typewriter").fadeIn(1000);
    });
  }
  else 
  {
    $(".typewriter").fadeOut(1000,function(){
      $(".contain").fadeIn(1000);
    });
  }
}
