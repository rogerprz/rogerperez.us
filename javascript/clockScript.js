const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
const digitalClock= document.querySelector("#digitalClock");
const second=1000;
const digitalDisplay=document.getElementById("digitalDislay");

secDegrees=360/60; //Provides the amount of degrees the second hand moves
hourDegrees=1/120;

var date = new Date();
let hr=date.getHours();
let min= date.getMinutes();
let sec= date.getSeconds();
console.log("Hour: " + hr  + " Minute: " + min + " Second: " + sec);

// Test area


//

let hrPosition = (hr*360/12)+(min*(360/60)/12);
let minPosition= (min*360/60)+(sec*(360/60)/60);
let secPosition= (sec*360)/60;

function runClock(){

    hrPosition= hrPosition+(3/360)
    minPosition= minPosition+ (secDegrees/60)
    secPosition=secPosition+secDegrees;

    HOURHAND.style.transform="rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform="rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform="rotate(" + secPosition + "deg)";

// console.log("Hello there");
}
function runDigitalClock(){
  var date = new Date();
  let hr=date.getHours();
  let min= date.getMinutes();
  let sec= date.getSeconds();
  if (min<10){
    min= "0"+ min;
  }
  if (sec<10){
    sec= "0"+ sec;
  }
  displayMilitary=digitalDisplay.innerHTML= hr +":" + min + ":"+ sec;
  // setTimeout(runDigitalClock,second);
  // return displayMilitary;
  militaryInterval= setInterval(runDigitalClock,second);

}


var interval = setInterval(runClock, second);
runDigitalClock();
