console.log("hello");

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