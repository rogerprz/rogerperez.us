var api= "https://fcc-weather-api.glitch.me/api/current?";
var apiXU= "http://api.apixu.com/v1/current.json?key=ed958f2779e542a3b5c73039171312&q=";
var ipApi= "http://ip-api.com/json";
var lat, lon;
var x= document.getElementById("geoLocal");
var tempX= document.getElementById("temp");

// Following functions will get the latitude and longitude
var geoLocal=document.getElementById("geo");
function getLocation(){
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
      function getWeather(position){
        var lat=position.coords.latitude;
        var lon=position.coords.longitude;
      getWeather(lat,lon);
    });
    navigator.geolocation.getCurrentPosition(showPosition);
    } else{
    geoLocal.innerHTML="Geolocation is not supported by this browser.";
          }
  }

var finalApi=apiXU + lat+","+lon;




// JSON request for API to get temperature
var ourRequest= new XMLHttpRequest();
ourRequest.open('GET',finalApi);
ourRequest.onload= function() {
  if (ourRequest.status>= 200 && ourRequest.status<400){
    var ourData= JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
    console.log("ourData",ourData);
  } else{
    console.log("Connection Error, Please try again.")
  }
  };

    ourRequest.send();
    console.log(ourRequest)


    var geoLocation= document.getElementById("geoAPI");
    geoLocation.innerHTML=finalApi;

function showPosition(position){
    geoLocal.innerHTML="Latitude:" + position.coords.latitude +
      "<br> Longitude: " + position.coords.longitude;

    }
