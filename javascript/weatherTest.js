var api= "https://fcc-weather-api.glitch.me/api/current?";
var jsonWeather= "http://rogerperez.us/JSON/weather.json";
var ipApi= "http://ip-api.com/json";
var x= document.getElementById("geoLocal");
var tempX= document.getElementById("temp");



var ourRequest= new XMLHttpRequest();
ourRequest.open('GET',ipApi);
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
