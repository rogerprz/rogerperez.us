const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
const digitalClock= document.querySelector("#digitalClock");
let hrPosition = 20;
let minPosition= 130;
let secPosition= 267;

var date = new Date();
let hr=date.getHours();
let min= date.getMinutes();
let sec= date.getSeconds();

digitalClock.document(hr+":" + min+ ":" + sec);
HOURHAND.style.transform="rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform="rotate(" + minPosition + "deg)";
SECONDHAND.style.transform="rotate(" + secPosition + "deg)";
console.log("Hello there");
