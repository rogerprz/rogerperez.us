// var quotesList=[
//   {"quote":"Success is not final; failure is not fatal: It is the courage to continue that counts.",
//     "author":"Winston S. Churchill"},
//   {"quote":"Don't be afraid to give up the good to go for the great.",
//     "author":"John D. Rockefeller"},
//   {"quote":"I find that the harder I work, the more luck I seem to have.",
//     "author":"Thomas Jefferson"},
//   {"quote":"Try not to become a man of success. Rather become a man of value.",
//     "author":"Albert Einstein"},
//   {"quote":"o one thing every day that scares you.",
//     "author":"Anonymous"},
//   {"quote":"If you really look closely, most overnight successes took a long time.",
//     "author":"Steve Jobs"},
//   {"quote":"The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.",
//     "author":"Barack Obama"},
//   {"quote":"The successful warrior is the average man, with laser-like focus.",
//     "author":"Bruce Lee"},
//   {"quote":"If you really want to do something, you'll find a way. If you don't, you'll find an excuse.",
//     "author":"Jim Rohn"},
//   {"quote":"Be the type of person that when your feet hit the floor in the morning the devil say\'s, \'aww shit.. they\'re up\'",
//     "author":"Dwayne (The Rock) Johnson"},
//   {"quote":"Many of life's failures are people who did not realize how close they were to success when they gave up",
//     "author":"Thomas Edison"},
//   {"quote":"Opportunities don't happen. You create them",
//     "author":"Chris Grosser"},
//   {"quote":"I find that the harder I work, the more luck I seem to have.",
//     "author":"Thomas Jefferson"},
//   {"quote":"I find that the harder I work, the more luck I seem to have.",
//     "author":"Thomas Jefferson"},
//     ]
//https://learnwebcode.github.io/json-example/animals-1.json
//http://rogerperez.us/quotes.json
// function createCORSRequest(method,URL){
//   var xhr = new XMLHttpRequest();
//   if ('withCredentials' in xhr){
//     // Check if the XMLHttpRequest object has a "withCredentials" property.
//     // "withCredentials" only exists on XMLHTTPRequest2 objects.
//     xhr.open(method, URL, true);
//   }
// }
//http://rogerperez.us/quotes.json
//https://learnwebcode.github.io/json-example/animals-' + pageCount + '.json'


var pageCount = 1;
var i=0;
var quotePara = document.getElementById("quotePara");
var getQuote = document.getElementById("getQuote");

// Request to get json data where the quotes are located
getQuote.addEventListener("click", function() {
  var ourRequest= new XMLHttpRequest();
  ourRequest.open('GET','http://rogerperez.us/quotes.json');
  ourRequest.onload= function() {
    var ourData= JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };

  ourRequest.send();
  pageCount++;

  if (pageCount>6){
    getQuote.classList.add('hide-me');
  }
});

console.log(i);

function renderHTML(data){
  var htmlString="";
  var htmlAuthor="";

  // for (j=0;j<data.length;j++){
  //   remove
  // }
  for (i=0;i<data.length; i++){
    console.log("first",i);
    htmlString=data[i].quote;
    htmlAuthor=data[i].author;
    console.log(i);
  }
  quotePara.insertAdjacentHTML('beforeend', htmlString);
  author.insertAdjacentHTML('beforeend', htmlAuthor);
  
}
