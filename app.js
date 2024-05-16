let display = document.getElementById("display");
let currentNumber = "";
let opertors = null;
function int(Number) {
  currentNumber += Number;
  display.value = currentNumber;
}
function all_Clear() {
    currentNumber = " ";
    display.value = " ";
}

  function singleClear() {
      // let str = currentNumber.slice(0, -1);
    display.value = display.value.slice(0,-1);
    currentNumber = currentNumber.slice(0,-1);
}
function Calculate() {
    let Calculator = eval(currentNumber);
  display.value = Calculator;
  currentNumber = " ";
  
}
function operator(b) {
  if (currentNumber.length !== 0) {
    currentNumber += b;
    opertors += b;
    display.value = currentNumber;
  }else{
    display.value = "Syntax error";
  }
}
