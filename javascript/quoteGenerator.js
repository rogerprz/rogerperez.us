

var pageCount =0;
var i=0;
var quotePara = document.getElementById("quotePara");
var getQuote = document.getElementById("getQuote");

// Request to get json data where the quotes are located
getQuote.addEventListener("click", function() {
  var ourRequest= new XMLHttpRequest();
  ourRequest.open('GET','http://rogerperez.us/JSON/quotes-1.json');
  ourRequest.onload= function() {
    if (ourRequest.status>= 200 && ourRequest.status<400){
    var ourData= JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  } else{
    console.log("Connection Error, Please try again.")
  }
  };

  ourRequest.send();

});


function renderHTML(data){
  var htmlString="";
  var htmlAuthor="";

  // for (j=0;j<data.length;j++){
  //   remove
  // }
  for (i=0;i<data.length; i++){

    htmlString=data[i].quote;
    htmlAuthor=data[i].author;

  }
  quotePara.textContent = data[pageCount].quote;
  author.textContent = data[pageCount].author;
  pageCount++;

  if (pageCount>data.length-1){
    getQuote.classList.add('hide-me');
  }

}
