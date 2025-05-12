var inputFieldData = document.getElementById('inputField');

function sendValue(element) {
    inputFieldData.value += element.value
};

function addMinusSign() {

    if (inputFieldData.value[0] === "-") {
        removeSign = inputFieldData.value
        inputFieldData.value = removeSign.slice(1)

    } else {
        inputFieldData.value = "-" + inputFieldData.value
    }
};

function clearAll() {
    inputFieldData.value = ""
    count = 0
    functionalArray = []
};

function clearLastDigit() {
    inputFieldData.value = inputFieldData.value.slice(0, -1)
};

function rationalFunction() {
    inputFieldData.value = 1 / inputFieldData.value
};

function sqaure() {
    inputFieldData.value = inputFieldData.value ** 2
};

function sqaureRoot() {
    inputFieldData.value = Math.sqrt(inputFieldData.value)
};

// var nextOne;
// function sendSign(sign) {
//     receivingValue = inputFieldData.value
//     nextOne = [receivingValue, sign]
//     inputFieldData.value = ""
//     console.log(nextOne)
//     count = 0
// }

var count = 0
var firstTime;
function calculate() {
    
    if (count === 0) {
        receivingValue = inputFieldData.value
        firstTime = inputFieldData.value
        
        if (functionalArray[1] === "*") {
            inputFieldData.value = functionalArray[0] * receivingValue;
            count++
        } else if (functionalArray[1] === "/") {
            inputFieldData.value = functionalArray[0] / receivingValue;
            count++
        } else if (functionalArray[1] === "-") {
            inputFieldData.value = functionalArray[0] - receivingValue;
            count++
        } else if (functionalArray[1] === "+") {
            inputFieldData.value = parseFloat(functionalArray[0]) + parseFloat(receivingValue);
            count++
        } 
    } else if (count >= 1) {
        console.log(firstTime)
        if (functionalArray[1] === "*") {
            inputFieldData.value = inputFieldData.value * firstTime
        } else if (functionalArray[1] === "/") {
            inputFieldData.value = inputFieldData.value / firstTime
        } else if (functionalArray[1] === "-") {
            inputFieldData.value = inputFieldData.value - firstTime
        } else if (functionalArray[1] === "+") {
            inputFieldData.value = parseFloat(inputFieldData.value) + parseFloat(firstTime);
        }
    }
}

var functionalArray = []
function sendSign(sign) {
    var receivingValue = inputFieldData.value
    functionalArray.push(receivingValue)
    functionalArray.push(sign)
    inputFieldData.value = ""
    console.log(functionalArray)
}