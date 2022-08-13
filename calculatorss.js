//Initiate Actions And Value
var clearBtn = document.getElementById("clearBtn"),
  divideBtn = document.getElementById("divideBtn"),
  multiplyBtn = document.getElementById("multiplyBtn"),
  plusBtn = document.getElementById("plusBtn"),
  minusBtn = document.getElementById("minusBtn"),
  zeroBtn = document.getElementById("zeroBtn"),
  oneBtn = document.getElementById("oneBtn"),
  twoBtn = document.getElementById("twoBtn"),
  threeBtn = document.getElementById("threeBtn"),
  fourBtn = document.getElementById("fourBtn"),
  fiveBtn = document.getElementById("fiveBtn"),
  sixBtn = document.getElementById("sixBtn"),
  sevenBtn = document.getElementById("sevenBtn"),
  eightBtn = document.getElementById("eightBtn"),
  nineBtn = document.getElementById("nineBtn"),
  equalBtn = document.getElementById("equalBtn"),
  calculatorValue = document.getElementById("calculatorValue");

//Listeners

equalBtn.addEventListener("click", function () {
  if (!calculatorValue.value.length) {
    alert("Please Enter Value To Calculate");
    return;
  }

  var operators = calculatorValue.value.replace(/[0-9]/g, "").split(""); //985+10
  var values = calculatorValue.value; //values=+
  for (let i = 0; i < operators.length; i++) {
    const currentOperator = operators[i];

    var currentValues = values.split(/[*/+-]+/);

    if (currentOperator == "+") {
      var result = parseFloat(currentValues[0]) + parseFloat(currentValues[1]);
      var str = currentValues[0] + currentOperator + currentValues[1];
      calculatorValue.value = result + values.substring(str.length);
      values = result + values.substring(str.length);
    } else if (currentOperator == "-") {
      var result = parseFloat(currentValues[0]) - parseFloat(currentValues[1]);
      var str = currentValues[0] + currentOperator + currentValues[1];
      calculatorValue.value = result + values.substring(str.length);
      values = result + values.substring(str.length);
    } else if (currentOperator == "*") {
      var result = parseFloat(currentValues[0]) * parseFloat(currentValues[1]);
      var str = currentValues[0] + currentOperator + currentValues[1];
      calculatorValue.value = result + values.substring(str.length);
      values = result + values.substring(str.length);
    } else if (currentOperator == "/") {
      var result = parseFloat(currentValues[0]) / parseFloat(currentValues[1]);
      var str = currentValues[0] + currentOperator + currentValues[1];
      calculatorValue.value = result + values.substring(str.length);
      values = result + values.substring(str.length);
    }
  }
});
zeroBtn.addEventListener("click", function () {
  calculatorValue.value = calculatorValue.value + "0";
});
oneBtn.addEventListener("click", function () {
  calculatorValue.value = calculatorValue.value + "1";
});
twoBtn.addEventListener("click", function () {
  calculatorValue.value = calculatorValue.value + "2";
});
threeBtn.addEventListener("click", function () {
  calculatorValue.value = calculatorValue.value + "3";
});
fourBtn.addEventListener("click", function () {
  calculatorValue.value = calculatorValue.value + "4";
});
fiveBtn.addEventListener("click", function () {
  calculatorValue.value = calculatorValue.value + "5";
});
sixBtn.addEventListener("click", function () {
  calculatorValue.value = calculatorValue.value + "6";
});
sevenBtn.addEventListener("click", function () {
  calculatorValue.value = calculatorValue.value + "7";
});
eightBtn.addEventListener("click", function () {
  calculatorValue.value = calculatorValue.value + "8";
});
nineBtn.addEventListener("click", function () {
  calculatorValue.value = calculatorValue.value + "9";
});
plusBtn.addEventListener("click", function () {
  calculatorValue.value = calculatorValue.value + "+";
  currentOperator = "+";
});
minusBtn.addEventListener("click", function () {
  calculatorValue.value = calculatorValue.value + "-";
  currentOperator = "-";
});
multiplyBtn.addEventListener("click", function () {
  calculatorValue.value = calculatorValue.value + "*";
  currentOperator = "*";
});
divideBtn.addEventListener("click", function () {
  calculatorValue.value = calculatorValue.value + "/";
  currentOperator = "/";
});
clearBtn.addEventListener("click", function () {
  calculatorValue.value = "";
});
