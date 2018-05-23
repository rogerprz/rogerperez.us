document.addEventListener('DOMContentLoaded', () => {
  // const listDiv = document.getElementById("buttonList");
  // const app = new TaskLister();
});

let buttonsArray = [
  "AC",
  "CE",
  "/",
  "*",
  "7",
  "8",
  "9",
  "-",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  "=",
  "0",
  ".",
  "%"]
let columns = "col-lg-3 col-md-3 col-sm-3 col-xs-3"
let buttonsList = document.getElementById("buttonsList")
let display = document.getElementById("display")

for (sym in buttonsArray){

  let button = document.createElement("button")
  button.innerText = buttonsArray[sym]
  button.setAttribute("id",buttonsArray[sym])
  button.setAttribute("class",`sButt ${columns}`)
  buttonsList.appendChild(button)
}
let total;
let calcButton = document.getElementsByTagName('button')
buttonsList.addEventListener('click', function(e){
  let selection = e.target.id

  // if (display.innerText === "0"){
  //   display.InnerText = ""
  // }
  if (!isNaN(selection)){
    display.innerText += selection
    total= selection
  } else if (selection == "="){
    let equals = eval(display.innerText)
    display.innerText = `${equals}`
  }else if (selection == "AC"){
    display.innerText = 0
  }
  else if (selection == "+"){
    display.innerText+=selection

  }
  else if (selection == "-"){
    display.innerText+=selection

  }else if (selection == "/"){
    display.innerText+=selection
  } else if (selection == "."){
    display.innerText+=selection

  }
  else if (selection == "%"){
    display.innerText+=selection

  }
  else if (selection == "*"){
    display.innerText+=selection

  }
  // debugger;
  // body...
});
