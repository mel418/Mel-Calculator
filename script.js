let number1 = 34;
let operator = '+';
let number2 = 35;
let result = operate(number1, number2, operator)
let solution = number1 + ' ' + operator + ' ' + number2 + ' = ' + result;

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = solution;
}

updateDisplay();

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

function operate(x, y, op) {
    if (op === '+') {
        return add(x,y)
    }
    else if (op === '-') {
        return subtract(x,y)
    }
    else if (op === '*') {
        return multiply(x,y)
    }
    else {
        return divide(x,y)
    }
}


console.log(result)