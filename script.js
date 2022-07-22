//howdy
let displayValue = 0;
let firstOperator = null;
let secondOperator = null;
let operatorWasJustClicked = null;

function clearAll(){
    displayValue = 0;
    firstOperator = null;
    secondOperator = null;
    operatorWasJustClicked = null;
    updateDisplay();
}

function updateDisplay(){
    const display = document.getElementById('display');
    display.textContent = displayValue;
}

function Add(a, b){
    return a + b;
}

function Subtract(a, b){
    return a - b;
}

function Multiply(a, b){
    return a * b;
}

function Divide(a, b) {
    if (b === 0) return 0;
    return a / b;
}

function Operate(a, operator, b){
    switch(operator){
        case "-": return Subtract(a, b); break;
        case "+": return Add(a, b); break;
        case "x": return Multiply(a, b); break;
        case "/": return Divide(a, b); break;
    }
}

function operandClick(value){
    if (displayValue === 0){
        displayValue = value;
    } else {
        displayValue = parseInt(displayValue.toString() + value.toString());
    }
    updateDisplay();
}

function operatorClick(id){
    if (firstOperator === null){
        firstOperator = id;
    } else {
        secondOperator = id;
    }
    
}

function functionButtonClick(id){
    if (id === 'clear') clearAll();
    if (id === 'plusminus'); plusMinus();
    if (id === 'percent'); // percent();
}

function plusMinus(){
    if (displayValue >= 0){
        displayValue = parseInt("-" + displayValue.toString());
    } else if (displayValue < 0){
        displayValue = parseInt(displayValue.toString().substring(1));
    } else { console.log("something went wrong in plusMinus()")}
    updateDisplay();
}



//operands (numbers)
const operands = document.querySelectorAll('.operand');
operands.forEach(operand => {
    operand.addEventListener('click', () => {
        operandClick(parseInt(operand.textContent));
    });
});

//operators 
const operators = document.querySelectorAll('.operator');
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        operatorClick(operator.id);
    });
});

//function buttons (ac, +/-, %)
const functionButtons = document.querySelectorAll('.functionbutton');
functionButtons.forEach(button => {
    button.addEventListener('click', () => {
        functionButtonClick(button.id);
    });
});