//tweetButton.js

var getPostQuote=document.getElementById("quotePara").innerHTML, linkElement= document.getElementById("tweet-quote");
var getAuthor=document.getElementById("author").innerHTML
  $(linkElement).click(function(event){
    event.preventDefault();

    var tweetedLink=window.location.href;

    window.open("http://twitter.com/intent/tweet?hashtags=quotes&url=" + tweetedLink +
    "&text=" +'"'+ getPostQuote + '"' + "---"+ getAuthor + 
    "&via=iRogersb&", "twitterwindow", "height=450, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0");
  });
