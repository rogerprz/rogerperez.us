

var quotesList=[
  {"quote":"Success is not final; failure is not fatal: It is the courage to continue that counts.",
    "author":"Winston S. Churchill"},
  {"quote":"Don't be afraid to give up the good to go for the great.",
    "author":"John D. Rockefeller"},
  {"quote":"I find that the harder I work, the more luck I seem to have.",
    "author":"Thomas Jefferson"},
  {"quote":"Try not to become a man of success. Rather become a man of value.",
    "author":"Albert Einstein"},
  {"quote":"o one thing every day that scares you.",
    "author":"Anonymous"},
  {"quote":"If you really look closely, most overnight successes took a long time.",
    "author":"Steve Jobs"},
  {"quote":"The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.",
    "author":"Barack Obama"},
  {"quote":"The successful warrior is the average man, with laser-like focus.",
    "author":"Bruce Lee"},
  {"quote":"If you really want to do something, you'll find a way. If you don't, you'll find an excuse.",
    "author":"Jim Rohn"},
  {"quote":"Be the type of person that when your feet hit the floor in the morning the devil say\'s, \'aww shit.. they\'re up\'",
    "author":"Dwayne (The Rock) Johnson"},
  {"quote":"Many of life's failures are people who did not realize how close they were to success when they gave up",
    "author":"Thomas Edison"},
  {"quote":"Opportunities don't happen. You create them",
    "author":"Chris Grosser"},
  {"quote":"I find that the harder I work, the more luck I seem to have.",
    "author":"Thomas Jefferson"},
  {"quote":"I find that the harder I work, the more luck I seem to have.",
    "author":"Thomas Jefferson"},
    ]

var ourRequest= new XMLHttpRequest();
ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json')

ourRequest.onload= function(){
  console.log(ourRequest.responseText);
};

ourRequest.send();
