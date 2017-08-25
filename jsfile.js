var myleft=0;
var buttuflag=1;
var pos1=10;
var pos2=0;
var pos3=0;
var posflag1=1,posflag2=1,posflag3=1;
$(document).ready(function(){

  var x=setInterval(function()
{
  if(posflag1==1)
  {
      pos1+=10;
      $('.ob1').css('margin-top', '+=10px');
  }
  if(posflag1==0)
  {
    pos1-=10;
    $('.ob1').css('margin-top', '-=10px');
  }
  if(posflag2==1)
  {
      pos2+=11;
      $('.ob2').css('margin-top', '+=11px');
  }
  if(posflag2==0)
  {
    pos2-=11;
    $('.ob2').css('margin-top', '-=11px');
  }
  if(posflag3==1)
  {
      pos3+=12;
      $('.ob3').css('margin-top', '+=12px');
  }
  if(posflag3==0)
  {
    pos3-=12;
    $('.ob3').css('margin-top', '-=12px');
  }

if(pos1>200)
{
posflag1=0;
}
if(pos2>200)
{
posflag2=0;
}
if(pos3>190)
{
posflag3=0;
}
if(pos1<20)
{
  posflag1=1;
}
if(pos2<20)
{
  posflag2=1;
}
if(pos3<20)
{
  posflag3=1;
}
if((myleft>40&&myleft<100)&&(pos1>80&&pos1<140))
$(".myp").html("OUT");
if((myleft>110&&myleft<170)&&(pos2>80&&pos2<140))
$(".myp").html("OU2");
if((myleft>180&&myleft<250)&&(pos3>80&&pos3<140))
$(".myp").html("OUT3");
},100);

});
$("#rn").on("click",function()
{

  $('#me').css('margin-left', '+=10px');
 myleft+=10;
 buttuflag=0;
  if(myleft==260)
  {
    alert("You Won");
  }

});
$("#ln").on("click",function()
{
  if(buttuflag==0)
  {$('#me').css('margin-left', '-=10px');
 myleft-=10;
 }
  if(myleft==0)
  {
    buttuflag=1;
  }

});
