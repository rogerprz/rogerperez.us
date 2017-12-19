//make sure you are using HTTPS for codepen
//to get the location
//weather font icons from the amazing IonIcons pack ---> http://ionicons.com/

//Hover over temperature to change units
//regexes to check the weather
var sunny = /(sun|clear|calm|hot)+/i;
var breeze = /breez+/i;
var storm = /(storm|tornado|hurricane)+/i;
var cloudy = /(cloud|fog|dust|haze|smok|bluster)+/i;
var part = /part+/i;
var rainy = /(rain|drizzl|shower)+/i;
var snowy = /(snow|freez|hail|cold)+/i;
var sleet = /sleet+/i;
//global weather variable so it's possible to check after ajax expires
var weather = null;

$(document).ready(function() {
  $(".open-button").hide();
  $(".inner-container").hide();
  $(".button").show();
  $(".button-message").show();
});

//weather icon replace according to regex match
var changeweather = function(w) {
  if (snowy.test(w)) {
    $('.weather-icon-container').addClass('ion-ios-snowy');
    return;
  } else if (sleet.test(w) || rainy.test(w)) {
    $('.weather-icon-container').addClass('ion-ios-rainy');
    return;
  } else if (storm.test(w)) {
    $('.weather-icon-container').addClass('ion-ios-thunderstorm');
    return;
  } else if (cloudy.test(w) || breeze.test(w)) {
    if (part.test(w)) {
      $('.weather-icon-container').addClass('ion-ios-partlysunny');
      return;
    } else {
      $('.weather-icon-container').addClass('ion-ios-cloud');
      return;
    }
  } else if (sunny.test(w)) {
    $('.weather-icon-container').addClass('ion-ios-sunny');
    return;
  }
}

//temperature conversion
$(".temperature").click(function() {
  var temp = $(".temperature-text").html();
  var unit = temp.slice(-1);
  var num = temp.slice(0, temp.length - 3) / 1;
  if (unit == "C") {
    num = Math.floor((num * 9) / 5 + 32);
    $(".temperature-text").html(num + " °F");
  } else {
    num = Math.floor((num - 32) * (5 / 9));
    $(".temperature-text").html(num + " °C");
  }
  console.log(num);
});

//close and open buttons
$(".close").click(function() {
  $(".inner-container").hide(200);
  $(".open-button").show();
});

$(".open-button").click(function() {
  $(".open-button").hide();
  $(".inner-container").show(200);
})

//location button hover animation
$(".button").hover(
  function() {
    $(".button").css({
      "background": "#FFFFFF",
      "color": "#0F1A20"
    });
  },
  function() {
    $(".button").css({
      "background": "#0F1A20",
      "color": "#FFFFFF"
    });
  });

//for when the the AJAX for weather api fetch starts
$(document).ajaxStart(function() {
  $(".button-message").html("fetching data");
});

//after weather data has been fetched,
//change icon then show
//inner container
$(document).ajaxStop(function() {
  changeweather(weather);
  $(".inner-container").fadeIn(700);
  $(".button").hide();
  $(".button-message").hide();
});

//get coordinates
function place(callback) {
  var latitude = null,
    longitude = null;
  //for when location find is successful
  //return coordinates to a callback
  //function 'callback'
  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log(position.coords.latitude);
    callback([latitude, longitude]);
  };
  //for when location find is unsuccessful
  function error() {
    $(".button").removeClass("animate-pulse");
    $(".button").hover(
      function() {
        $(".button").css({
          "background": "#FFFFFF",
          "color": "#0F1A20"
        });
      },
      function() {
        $(".button").css({
          "background": "#0F1A20",
          "color": "#FFFFFF"
        });
      });
    $(".button-message").html("could not find location");
  }

  //call to api to find coordinates
  $(".button-message").html("locating");
  navigator.geolocation.getCurrentPosition(success, error);
}

//for finding location and only then
//starting ajax for finding weather at
//specified location
$(".button").click(function() {
  $(".button").addClass("animate-pulse");
  $(".button").hover(function() {
    $(".button").css("background", "#FFFFFF");
  });
  $(".button").css({
    "background": "#FFFFFF",
    "color": "#334046"
  });

  place(
    function(coords) {
      $.ajax({
        url: 'https://simple-weather.p.mashape.com/weatherdata?lat=' + coords[0] + '&lng=' + coords[1],
        type: 'GET',
        dataType: 'json',

        success: function(data) {
          console.log(data.query.results.channel.item.condition.temp);
          var unit = data.query.results.channel.units.temperature;
          $(".country").html(data.query.results.channel.location.country);
          $(".city").html(data.query.results.channel.location.city);
          $(".weather").html(data.query.results.channel.item.condition.text);
          $(".temperature-text").html(data.query.results.channel.item.condition.temp + " °" + unit);
          weather = data.query.results.channel.item.condition.text;
        },
        error: function(err) {
          console.log(err);
          $('.inner-container').html('data for location does not exist');
        },
        beforeSend: function(xhr) {
          xhr.setRequestHeader("X-Mashape-Authorization", 'QNPeLrTuJImshsrV1xsmJKc5ytUZp16QOAAjsnch01iaEEZR3G');
        }
      });
    });
});
