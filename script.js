var clutter= "";
for(var i=1;i<121;i++){
    clutter+= `<div class="numbers"></div>`;
             
}

document.querySelector(".bubbles").innerHTML=clutter;

let scoree=0;
function scorecnt(){
    scoree+=10;
    document.querySelectorAll(".box")[2].innerHTML=scoree;
}


document.querySelectorAll(".box")[2].innerHTML=scoree;


function makeBubbles(){
    for(var i=0;i<120;i++){
        document.querySelectorAll(".numbers")[i].innerHTML=randomNumber();
    }
}
makeBubbles();

function randomNumber(){
  var num=Math.floor(Math.random()*10);

  return num;
}

var clk=60;

function timeReset(){
  var timer=setInterval(function(){
  if(clk>=0) {
   document.querySelectorAll(".box")[1].innerHTML=clk;
   clk--;}
   else{
    clearInterval(timer);
   }
  },1000);

}
timeReset();

function newHit(){
    document.querySelectorAll(".box")[0].innerHTML=randomNumber();
}
newHit();
document.querySelector(".bubbles").addEventListener("click",function(dets){
    var tar=Number(dets.target.textContent);

    if(tar==document.querySelectorAll(".box")[0].innerHTML){
        scorecnt();
        newHit();
        makeBubbles();
    }
    else{
        document.querySelectorAll(".box")[0].innerHTML=0;
    
        document.querySelectorAll(".box")[2].innerHTML=0;
        clk=0;
        document.querySelector(".bubbles").innerHTML="GAME OVER! Score is "+scoree;

    }
})

