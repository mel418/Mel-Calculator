let number1 = null;
let operator1 = null;
let operator2 = null;
let number2 = null;
let result = null
let displayValue = '0';
const buttons = document.querySelectorAll("button");

window.addEventListener('keydown', function(e) {
    const key = document.querySelector((`button[data-key="${e.keyCode}"]`));
    key.click();
    displayValue = key.value;
});




function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue;
    if (displayValue.length > 9) {
        display.innerText = displayValue.substring(0, 9);
    }
    console.log(display)
}

updateDisplay();

// button click event handling
function clickButton() {  
    for(let i = 0;  i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if (buttons[i].classList.contains('operand')) {
                inputOperand(buttons[i].value);
                updateDisplay();
            }
            else if (buttons[i].classList.contains('operator')) {
                inputOperator(buttons[i].value);
            }
            else if(buttons[i].classList.contains('equals')) {
                inputEquals();
                updateDisplay();
            }
            else if(buttons[i].classList.contains('decimal')) {
                inputDecimal(buttons[i].value);
                updateDisplay();
            }
            else if(buttons[i].classList.contains('percent')) {
                inputPercent(displayValue);
                updateDisplay();
            }
            else if(buttons[i].classList.contains('sign')) {
                inputSign(displayValue);
                updateDisplay();
            }
            else if(buttons[i].classList.contains('clear')) {
                clearDisplay();
                updateDisplay();
            }
        })
    }
}

clickButton();

function inputOperand(number) {
    if (number1 === null) {
        if (displayValue === '0' || displayValue === 0) {
            displayValue = number;
        }
        else if (displayValue === number1) {
            displayValue = number;
        }
        else {
            displayValue += number;
        }
    }
    else {
        if(displayValue === number1) {
            displayValue = number;
        }
        else displayValue += number;
    }
}

function inputOperator(operator) {
    if (operator1 != null && operator2 === null) {
        operator2 = operator;
        number2 = displayValue;
        result = operate(Number(number1), Number(number2), operator1);
        displayValue = roundLongNumber(result, 15).toString();
        number1 = displayValue;
        result= null;
    }
    else if (operator1 !=null && operator2 != null){
        operator2 = displayValue;
        result = operate(Number(number1), Number(number2), operator2);
        operator2 = operator;
        displayValue = roundLongNumber(result, 15).toString();
        number1 = displayValue;
        result=null;
    }
    else {
        operator1 = operator;
        number1 = displayValue;
    }
}

function inputEquals() {
    if(operator1 === null) {
        displayValue = displayValue;
    }
    else if(operator2 != null) {
        number2 = displayValue;
        result = operate(Number(number1), Number(number2), operator2);
        if(result === 'Error: Mommy Zero!') {
            displayValue = 'Error: Mommy Zero!';
        }
        else {
            displayValue = roundLongNumber(result, 15).toString();
            number1 = displayValue;
            number2 = null;
            operator1 = null;
            operator2 = null;
            result=null;
        }
    }
    else {
        number2 = displayValue;
        result = operate(Number(number1), Number(number2), operator1)
        if(result === 'Error: Mommy Zero!') {
            displayValue = 'Error: Mommy Zero!';
        }
        else {
            displayValue = roundLongNumber(result, 15).toString();
            number1 = displayValue;
            number2 = null;
            operator1 = null;
            operator2 = null;
            result=null;
        }
    }
}

function inputDecimal(dot) {
    if (!displayValue.includes(dot)) {
        displayValue += dot;
    }
}

function inputPercent(num) {
    displayValue = (num/100).toString();
}

function inputSign() {
    displayValue = (num * -1).toString();
}

//reset all variables for clear display -NOT innerhtml = '0';
function clearDisplay() {
    displayValue = '0';
    number1 = null;
    operator1 = null;
    operator2 = null;
    number2 = null;
    result = null;
    
}


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

function roundLongNumber(num, places) {
    return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}
