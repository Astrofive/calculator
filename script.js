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
    const display = document.getElementById('display');
    display.textContent = displayValue;
}

function operatorClick(id){
    if (firstOperator === null){
        firstOperator = id;
    } else {
        secondOperator = id;
    }
    
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

//equals
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    clearAll();
});