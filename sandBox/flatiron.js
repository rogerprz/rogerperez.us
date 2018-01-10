

var musicians=["john Lennon","Other Person", "3rd person", "last person"]
var instruments=["guitar","clarinet","bass","keys"];
function theBeatlesPlay(musicians,instruments){
  var i=0;
  var j=0;
  var array=[];
  for (i=0;i<musicians.length;i++){
    var person=musicians[i];
    var instrumentEnd=instruments[i];
    var complete= person + " plays " + instrumentEnd;
    array.push(complete);
  }
  console.log("firstArray",array,complete)
  return array

}
theBeatlesPlay(musicians,instruments)
console.log(musicians,instruments)
