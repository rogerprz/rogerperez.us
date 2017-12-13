var api= "https://fcc-weather-api.glitch.me/api/current?";
var jsonWeather= "http://rogerperez.us/JSON/weather.json";
var ipApi= "http://ip-api.com/json";
var lat, lon;
var x= document.getElementById("geoLocal");
var tempX= document.getElementById("temp");

// Following functions will get the latitude and longitude
var geoLocal=document.getElementById("geo");
function getLocation(){
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      var lon="lon="+ position.coords.longitude;
      var lat='lat='+ position.coords.latitude;

      getWeather(lat,lon);
    });
    navigator.geolocation.getCurrentPosition(showPosition);
    } else{
    geoLocal.innerHTML="Geolocation is not supported by this browser.";
          }
  }

function showPosition(position){
  geoLocal.innerHTML="Latitude:" + position.coords.latitude +
  "<br> Longitude: " + position.coords.longitude;

}

function getWeather(lat,lon){
  var completeApi=api+lon+"&"+lat;
  // lon="lon="+ position.coords.longitude;
  // lat='lat='+ position.coords.latitude;

  return completeApi;
  }

// JSON request for API to get temperature
var ourRequest= new XMLHttpRequest();
ourRequest.open('GET','function getWeather(lat,lon)');
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

// var jsonWeather= JSON.stringify(ourData);
// document.body.innerHTML=jsonWeather;
function renderHTML(data){
  var htmlString="";
  for (i=0;i<data.lenth;i++){
    htmlString=data[i].coord;
    console.log(data[i].coord)
    tempX.textContent= data;

  }
  // htmlString.textContent=data[0];
  tempX.textContent= data;
  // return data;
}
console.log(ourRequest)
var geoLocation= document.getElementById("geoAPI");
geoLocation.innerHTML=completeApi;
