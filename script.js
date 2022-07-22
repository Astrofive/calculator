let displayValue = 0;

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


    // displayValue *= 10;
    // console.log(`displayvalue is now ${displayValue}`);
    // displayValue += value;
    // console.log(`displayValue is now ${displayValue}`);
    // display.textContent = displayValue;
}

const operands = document.querySelectorAll('.operand');
operands.forEach(operand => {
    operand.addEventListener('click', () => {
        operandClick(parseInt(operand.textContent));
    });
});
