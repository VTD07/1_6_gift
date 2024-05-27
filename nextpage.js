var y=document.querySelector(".typewriter");
var x=document.querySelector(".close");
var z=document.querySelector(".contain");
function myfunction()
{
  $(document).ready(function(){
    $(".contain").fadeOut(1000);
    $(".close").fadeOut(1000);
  });
}
x.addEventListener("click",myfunction)
if(z.style.display="none")
{
  $(document).ready(function(){
    $(".typewriter").fadeIn(1000);
  });
}
