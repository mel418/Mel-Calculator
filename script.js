let number1 = null;
let operator1 = null;
let operator2 = null;
let number2 = null;
let result = null
let displayValue = 0;

window.addEventListener('keydown', function(e) {
    const key = document.querySelector((`button[data-key="${e.keyCode}"]`));
    key.click();
});

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue;
    if (displayValue.length > 9) {
        display.innerText = displayValue.substring(0, 9);
    }
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
        return "Error: Mommy Zero!";
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