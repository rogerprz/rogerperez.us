var lon, lan;
var example='http://api.wunderground.com/api/8a8af55ae16c8627/geolookup/q/34.4277882,-119.7034209.json'; //Examples of completed coordinates
var exampleCity="http://api.wunderground.com/api/8a8af55ae16c8627/conditions/q/CA/Santa_Barbara.json"; //example City.
var geoLocal = document.getElementById("geoLocal");
var temp= document.getElementById("temp");
var temp_c= document.getElementById("temp_c");
$(document).ready(function(){

if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
} else {
      geoLocal.innerHTML = "Geolocation is not supported by this browser.";
    }
function showPosition(position) {
    var beforeURL= 'http://api.wunderground.com/api/8a8af55ae16c8627/';
    var conditionsURL="conditions/q/";
    var geoLookUp="geolookup/q/"
    var endURL=".json";
    geoLocal.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
    lan= position.coords.latitude;
    lon= position.coords.longitude;
    wUndergroundGeo=beforeURL + geoLookUp+ lan + "," + lon + endURL;
    // return (position);



var wUndergroundSF= 'http://api.wunderground.com/api/8a8af55ae16c8627/conditions/q/CA/San_Francisco.json'
// var wUndergroundGeo= 'http://api.wunderground.com/api/8a8af55ae16c8627/geolookup/q/34.4278,-119.7034111.json';
var weather= new XMLHttpRequest();
weather.open("GET",wUndergroundGeo, false);
weather.send(null);

var myRequest= JSON.parse(weather.response);
var cityLocal= "City location: "+ myRequest.location.city + "<br/>";
document.getElementById("weather").innerHTML= cityLocal
var stateURL= myRequest.location.state + "/";

var cityURL=myRequest.location.city ;
var cityURL=cityURL.replace(/ /gi,"_");//Replaces spaces of city with "_" so url will be valid.


var weatherURL= beforeURL + conditionsURL +stateURL + cityURL + endURL;
console.log("Weather", weatherURL)

var weather2= new XMLHttpRequest();
weather2.open("GET", weatherURL, false);
weather2.send(null);

var secRequest=JSON.parse(weather2.response);
var tempWeather= secRequest.current_observation.temp_f +" °"+"F";
var cTemp= "Celcius: " + secRequest.current_observation.temp_c;
console.log(temp);
var outputTemp= "Fahrenheit: " + tempWeather;
temp.innerHTML=outputTemp;
temp_c.innerHTML=cTemp;
// return fTemp;

$(".temperature").click(function() {
  var tempText=$(".temperature-text").html();
  var unit= tempWeather.slice(-1);
  var num = tempWeather.slice(0,temp.length - 3)/1;

  console.log("tempText",tempText,"unit: ", unit,"num: ", num)
});

};


  });
