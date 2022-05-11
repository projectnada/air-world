function myFun() {  
            alert ("welcome to our site");}
function ptr() {
   var text=document.getElementById("gmail");
   var person=document.getElementById("password");
   if(text=="team@gmail.com" && person==" teamsoul")
   {
       alert("logged is successful");
   }
   else{
       alert("it is not valid");
   }
}
function tast()
{
    alert("thant for your comment");
}
var icon=document.getElementById("icon");
icon.onclick = function()
{
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme"))
    {
        icon.src="sun.svg";
    }
    else{
        icon.src="moon.svg";
    }
}
var myVideo = document.getElementById("video1"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function makeBig() { 
    myVideo.width = 560; 
} 

function makeSmall() { 
    myVideo.width = 320; 
} 

function makeNormal() { 
    myVideo.width = 420; 
} 

