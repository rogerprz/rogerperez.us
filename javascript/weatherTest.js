var api= "https://fcc-weather-api.glitch.me";
var x= document.getElementById("geoLocal");
var tempX= document.getElementByID("temp");

var ourRequest= new XMLHttpRequest();
ourRequest.open('GET','http://rogerperez.us/JSON/weather.json');
ourRequest.onload= function() {
  if (ourRequest.status>= 200 && ourRequest.status<400){
  var ourData= JSON.parse(ourRequest.responseText);
  renderHTML(ourData);
} else{
  console.log("Connection Error, Please try again.")
}
};

ourRequest.send();

function renderHTML(data){
  var temp="";
  // var htmlAuthor="";

  for (i=0;i<data.length; i++){
    temp=data[i].main.temp;
    // htmlAuthor=data[i].author;
  }
  tempX.textContent=data[0].main.temp;
};
