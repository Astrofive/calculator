//howdy
let displayValue = 0;
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let operatorJustClicked = null;

function clearAll(){
    displayValue = 0;
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    operatorJustClicked = null;
    updateDisplay();
}

function updateDisplay(){
    const display = document.getElementById('display');
    display.textContent = displayValue;
}


function Divide(a, b) {
    if (b === 0) return "Lol";
    return a / b;
}

function Operate(a, operator, b){
    switch(operator){
        case "minus": return (a - b); break;
        case "plus": return (a + b); break;
        case "multiply": return (a * b); break;
        case "divide": return Divide(a, b); break;
        case "equal": return b; break;
    }
}

function operandClick(value){
    if (operatorJustClicked){
        displayValue = 0;
        operatorJustClicked = false;
    }
    if (displayValue === 0){
        displayValue = value;
    } else {
        displayValue = Number(displayValue.toString() + value.toString());
    }
    updateDisplay();
}

function operatorClick(id){
    // lock in the display num
    if (!firstOperand){
        firstOperand = displayValue;
    } else if (!operatorJustClicked){
        secondOperand = displayValue;
    }
    // if there's no first operator or no second operand has been entered (to let you change the operator)
    if (!firstOperator || !secondOperand){
        firstOperator = id
    } else {
        displayValue = Operate(firstOperand, firstOperator, secondOperand);
        updateDisplay();
        firstOperand = displayValue;
        secondOperand = null; // Important part. This clears second num to let user continue equation
    }
    operatorJustClicked = true;
}

function functionButtonClick(id){
    if (id === 'clear') clearAll();
    if (id === 'plusminus') plusMinus();
    if (id === 'percent'); // percent() to be created;
}
function plusMinus(){
    if (displayValue >= 0){
        displayValue = Number("-" + displayValue.toString());
    } else if (displayValue < 0){
        displayValue = Number(displayValue.toString().substring(1));
    } else { console.log("something went wrong in plusMinus()")}
    updateDisplay();    
}



//operands (numbers)
const operands = document.querySelectorAll('.operand');
operands.forEach(operand => {
    operand.addEventListener('click', () => {
        operandClick(Number(operand.textContent));
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