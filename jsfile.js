var myleft=0;
var buttuflag=1;
var pos1=10;
var pos2=0;
var pos3=0;
var posflag1=1,posflag2=1,posflag3=1;
var life=5;
var level=1;
$(document).ready(function(){

  var x=setInterval(function()
{
  if(posflag1==1)
  {
      pos1+=8;
      $('.ob1').css('margin-top', '+=8px');
  }
  if(posflag1==0)
  {
    pos1-=8;
    $('.ob1').css('margin-top', '-=8px');
  }
  if(posflag2==1)
  {
      pos2+=9;
      $('.ob2').css('margin-top', '+=9px');
  }
  if(posflag2==0)
  {
    pos2-=9;
    $('.ob2').css('margin-top', '-=9px');
  }
  if(posflag3==1)
  {
      pos3+=10;
      $('.ob3').css('margin-top', '+=10px');
  }
  if(posflag3==0)
  {
    pos3-=10;
    $('.ob3').css('margin-top', '-=10px');
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
{
  life--
  if(life==0)
  {
    alert("GAME OVER");
    myveryownrestartfunc();
  }
  else {
    alert("Ouch!! Lives left = "+life);
    $(".mylives").html("Lives = "+life);
    resetsitu();
  }

  clearInterval(x);
}
if((myleft>110&&myleft<170)&&(pos2>80&&pos2<140))
{

    life--
    if(life==0)
    {
      alert("GAME OVER");
      myveryownrestartfunc();
    }
    else {
      alert("Ouch!! Lives left = "+life);
      $(".mylives").html("Lives = "+life);
      resetsitu();
    }
  clearInterval(x);
}
if((myleft>180&&myleft<240)&&(pos3>80&&pos3<140))
{

    life--
    if(life==0)
    {
      alert("GAME OVER");
      myveryownrestartfunc();
    }
    else {
      alert("Ouch!! Lives left = "+life);
      $(".mylives").html("Lives = "+life);
      resetsitu();
    }
  clearInterval(x);
}
},100);

});
$("#rn").on("click",function()
{

  $('#me').css('margin-left', '+=10px');
 myleft+=10;
 buttuflag=0;
  if(myleft==260)
  {

      if(level==3)
      {alert("DAMN!!.. You're Awesome");
        myveryownrestartfunc();
    }
      else {
        level++;
        $(".currlevel").html("Level = "+level);
        alert("You Won");
        if(level==2)
        winsitu();
        else if(level==3)
        winsitu3();

  }
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
function winsitu1()
{
  var x=setInterval(function()
{
  if(posflag1==1)
  {
      pos1+=8;
      $('.ob1').css('margin-top', '+=8px');
  }
  if(posflag1==0)
  {
    pos1-=8;
    $('.ob1').css('margin-top', '-=8px');
  }
  if(posflag2==1)
  {
      pos2+=9;
      $('.ob2').css('margin-top', '+=9px');
  }
  if(posflag2==0)
  {
    pos2-=9;
    $('.ob2').css('margin-top', '-=9px');
  }
  if(posflag3==1)
  {
      pos3+=10;
      $('.ob3').css('margin-top', '+=10px');
  }
  if(posflag3==0)
  {
    pos3-=10;
    $('.ob3').css('margin-top', '-=10px');
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
{
  life--
  if(life==0)
  {
    alert("GAME OVER");
    myveryownrestartfunc();
  }
  else {
    alert("Ouch!! Lives left = "+life);
    $(".mylives").html("Lives = "+life);
    resetsitu();
  }
  clearInterval(x);
}
if((myleft>110&&myleft<170)&&(pos2>80&&pos2<140))
{
  life--
  if(life==0)
  {
    alert("GAME OVER");
    myveryownrestartfunc();
  }
  else {
    alert("Ouch!! Lives left = "+life);
    $(".mylives").html("Lives = "+life);
    resetsitu();
  }
  clearInterval(x);
}
if((myleft>180&&myleft<240)&&(pos3>80&&pos3<140))
{
  life--
  if(life==0)
  {
    alert("GAME OVER");
    myveryownrestartfunc();
  }
  else {
    alert("Ouch!! Lives left = "+life);
    $(".mylives").html("Lives = "+life);
    resetsitu();
  }
  clearInterval(x);
}
},100);

}
function winsitu3()
{
  myleft=0;
  pos1=10;
  pos2=0;
  pos3=0;
  posflag=1;
  posflag2=1;
  posflag3=1;

  document.getElementById("ob1").style.marginTop = "10px";
  document.getElementById("ob2").style.marginTop = "0px";
  document.getElementById("ob3").style.marginTop = "0px";
  document.getElementById("me").style.marginLeft = "0px";
  var x=setInterval(function()
{

  if(posflag1==1)
  {
      pos1+=8;
      $('.ob1').css('margin-top', '+=8px');
  }
  if(posflag1==0)
  {
    pos1-=8;
    $('.ob1').css('margin-top', '-=8px');
  }
  if(posflag2==1)
  {
      pos2+=9;
      $('.ob2').css('margin-top', '+=9px');
  }
  if(posflag2==0)
  {
    pos2-=9;
    $('.ob2').css('margin-top', '-=9px');
  }
  if(posflag3==1)
  {
      pos3+=10;
      $('.ob3').css('margin-top', '+=10px');
  }
  if(posflag3==0)
  {
    pos3-=10;
    $('.ob3').css('margin-top', '-=10px');
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
{
  life--
  if(life==0)
  {
    alert("GAME OVER");
    myveryownrestartfunc();
  }
  else {
    alert("Ouch!! Lives left = "+life);
    $(".mylives").html("Lives = "+life);
    resetsitu();
  }
  clearInterval(x);
}
if((myleft>110&&myleft<170)&&(pos2>80&&pos2<140))
{
  life--
  if(life==0)
  {
    alert("GAME OVER");
    myveryownrestartfunc();
  }
  else {
    alert("Ouch!! Lives left = "+life);
    $(".mylives").html("Lives = "+life);
    resetsitu();
  }
  clearInterval(x);
}
if((myleft>180&&myleft<240)&&(pos3>80&&pos3<140))
{
  life--
  if(life==0)
  {
    alert("GAME OVER");
    myveryownrestartfunc();
  }
  else {
    alert("Ouch!! Lives left = "+life);
    $(".mylives").html("Lives = "+life);
    resetsitu();
  }
  clearInterval(x);
}
},100);

}

function winsitu()
{
  myleft=0;
  pos1=10;
  pos2=0;
  pos3=0;
  posflag=1;
  posflag2=1;
  posflag3=1;
  document.getElementById("ob1").style.marginTop = "10px";
  document.getElementById("ob2").style.marginTop = "0px";
  document.getElementById("ob3").style.marginTop = "0px";
  document.getElementById("me").style.marginLeft = "0px";
  var x=setInterval(function()
{

  if(posflag1==1)
  {
      pos1+=8;
      $('.ob1').css('margin-top', '+=8px');
  }
  if(posflag1==0)
  {
    pos1-=8;
    $('.ob1').css('margin-top', '-=8px');
  }
  if(posflag2==1)
  {
      pos2+=9;
      $('.ob2').css('margin-top', '+=9px');
  }
  if(posflag2==0)
  {
    pos2-=9;
    $('.ob2').css('margin-top', '-=9px');
  }
  if(posflag3==1)
  {
      pos3+=10;
      $('.ob3').css('margin-top', '+=10px');
  }
  if(posflag3==0)
  {
    pos3-=10;
    $('.ob3').css('margin-top', '-=10px');
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
{
  life--
  if(life==0)
  {
    alert("GAME OVER");
    myveryownrestartfunc();
  }
  else {
    alert("Ouch!! Lives left = "+life);
    $(".mylives").html("Lives = "+life);
    resetsitu();
  }
  clearInterval(x);
}
if((myleft>110&&myleft<170)&&(pos2>80&&pos2<140))
{
  life--
  if(life==0)
  {
    alert("GAME OVER");
    myveryownrestartfunc();
  }
  else {
    alert("Ouch!! Lives left = "+life);
    $(".mylives").html("Lives = "+life);
    resetsitu();
  }
  clearInterval(x);
}
if((myleft>180&&myleft<240)&&(pos3>80&&pos3<140))
{
  life--
  if(life==0)
  {
    alert("GAME OVER");
    myveryownrestartfunc();
  }
  else {
    alert("Ouch!! Lives left = "+life);
    $(".mylives").html("Lives = "+life);
    resetsitu();
  }
  clearInterval(x);
}
},100);

}
function resetsitu()
{
  myleft=0;
  pos1=10;
  pos2=0;
  pos3=0;
  posflag=1;
  posflag2=1;
  posflag3=1;
  document.getElementById("ob1").style.marginTop = "10px";
  document.getElementById("ob2").style.marginTop = "0px";
  document.getElementById("ob3").style.marginTop = "0px";
  document.getElementById("me").style.marginLeft = "0px";
  if(level==1)
  winsitu1();
  else if(level==2)
  winsitu();
  else {
    winsitu3();
  }
}

$(document).keydown(function(e) {
        if (e.which === 39) {

            $('#me').css('margin-left', '+=10px');
           myleft+=10;
           buttuflag=0;
            if(myleft==260)
            {
              if(level==3)
              {alert("DAMN!!.. You're Awesome");
                myveryownrestartfunc();
            }
              else {
                level++;
                $(".currlevel").html("Level = "+level);
                alert("You Won");
                if(level==2)
                winsitu();
                else if(level==3)
                winsitu3();

              }


            }
        }
    });
    $(document).keydown(function(e) {
            if (e.which === 68) {

                $('#me').css('margin-left', '+=10px');
               myleft+=10;
               buttuflag=0;
                if(myleft==260)
                {
                  if(level==3)
                  {alert("DAMN!!.. You're Awesome");
                    myveryownrestartfunc();
                }
                  else {
                    level++;
                    $(".currlevel").html("Level = "+level);
                    alert("You Won");
                    if(level==2)
                    winsitu();
                    else if(level==3)
                    winsitu3();

                  }

                }
            }
        });
        $(document).keydown(function(e) {
                    if (e.which ===65) {
                      if(buttuflag==0)
                      {$('#me').css('margin-left', '-=10px');
                     myleft-=10;
                     }
                      if(myleft==0)
                      {
                        buttuflag=1;
                      }
                    }
                });
$(document).keydown(function(e) {
            if (e.which === 37) {
              if(buttuflag==0)
              {$('#me').css('margin-left', '-=10px');
             myleft-=10;
             }
              if(myleft==0)
              {
                buttuflag=1;
              }
            }
        });
        $(document).keyup(function(e) {
             if (e.keyCode == 27) { // escape key maps to keycode `27`
                myveryownrestartfunc();
            }
        });
        function myveryownrestartfunc()
        {

        window.location.reload();
        }
