const number1 = 34;
const operator = '+';
const number2 = 35;


function add(num1, num2) {
    return num1 + num2;
}
  
function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Error: Division by zero bad!";
    }
    return num1 / num2;
}

function operate() {
    
}