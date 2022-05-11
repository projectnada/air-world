let myName="Tourism Places";
let index=1;
function writeText(){
    document.querySelector("h1") .textContent=myName.slice(0,index);
index++   
if( index>myName.length){
index=1;
}   
}
setInterval(function(){
    writeText();
},100)