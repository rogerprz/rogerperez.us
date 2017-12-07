const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
const digitalClock= document.querySelector("#digitalClock");

secDegrees=360/60; //Provides the amount of degrees the second hand moves
hourDegrees=1/120;

var date = new Date();
let hr=date.getHours();
let min= date.getMinutes();
let sec= date.getSeconds();
console.log("Hour: " + hr  + " Minute: " + min + " Second: " + sec);

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
// digitalClock.document(hr+" :" + min+ ":" + sec);

var interval = setInterval(runClock, 1000);
