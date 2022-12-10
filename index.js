// Start Button
function start(){
document.querySelector(".main").classList.add("Display");
document.querySelector(".text-area").classList.remove("Display");
}

// Timer
var count=0;
var minute =0;
var second =60;

document.querySelector("textarea").addEventListener("keypress",function(){
    if(count===0){
        Timer();    //Here we are using if because we want to execute this function only once.
        count++;
    }
});

function Timer(){
setInterval(function(){
if(minute==0 && second ==1){
    document.getElementById("Countdown").innerHTML="00.00" 
    speedCount();

}else{
    second--;
    if(second==0){
       minute--;
    second=60;  
    if(minute==0){
minute=minute;
    }
    
    }
    if(minute.toString().length==1){
        minute="0"+minute;
    }
    if(second.toString().length==1){
      second="0"+second;
    }
    document.getElementById("Countdown").innerHTML=minute+":"+second;
}
},1000)
}

// Paragraph Section

let para="Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116).";
let paraArray= para.split(" ");

for(var i=0;i<paraArray.length;i++)
{
    let text=paraArray[i]+" ";
    let element=document.createElement("span");
    element.setAttribute("id","id-"+i);
    element.appendChild(document.createTextNode(text));
    document.querySelector("#ptext").appendChild(element);
}

//  input text count

var Value;
var textareaText;
var check=0;
var colorCheck="";
var colorCheckArray;
var index=0;

function countWords(){
document.querySelector("#text").addEventListener("keypress" ,function(event){
Value=document.querySelector("#text").value;
colorCheck=colorCheck+event.key;

if(event.key===" "){
colorCheckArray=colorCheck.split(" ");

if(paraArray[index]===colorCheckArray[index]){
 document.querySelector("#id-"+index).style.color="green";
}
else{
 document.querySelector("#id-"+index).style.color="red";

}
index++;
}
}
);
}

//  Prevent Backspace
function preventBackspace(e){
    var evt = e || window.event;
    var SpaceBar=document.querySelector("#text").value;
    if (evt) {
        var keyCode = evt.charCode || evt.keyCode;
        if(SpaceBar==" ")
        {
            if(keyCode===32){
                if(evt.preventDefault){
                    evt.preventDefault();
                }
                else{
                    evt.returnValue=false;
                }
            }
        }
        if(keyCode===13){
            if(evt.preventDefault){
                evt.preventDefault();
            }
            else{
                evt.returnValue=false;
            }
        }

        if (keyCode === 8) {
            if (evt.preventDefault) {
                evt.preventDefault();
            } else {
                evt.returnValue = false;
            }
        }
    }
}

// Speed count

function speedCount(){
     document.querySelector(".result").classList.remove("Display");
     document.querySelector(".text-area").classList.add("Display");
textareaText=Value.split(" ");

for(var i=0;i<paraArray.length;i++){
   if(paraArray[i]===textareaText[i+1]){   // here we are using i+1 because we already set textarea value with space.
     check++;
   }
}
    document.querySelector("#wpm").innerHTML=check; 
    var accuracy=Math.floor((check/(textareaText.length-1))*100);
    document.querySelector("#accuracy").innerHTML=accuracy;
  second=60;
    minute=1;
}

// Home button
function home(){
speedCount();
document.querySelector("#text").value="";
}

// BACK Button
function back(){
document.querySelector(".main").classList.remove("Display");
document.querySelector(".result").classList.add("Display");
document.querySelector("#text").value="";
window.location.reload();
}