let firstNumber = '';
let secondNumber = '';
let operator = null;

const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const result = document.getElementById('result');
const currOperation = document.getElementById('curr-operation');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');


numbers.forEach(number => {
    number.addEventListener("click", storeNumber)
});

operators.forEach(operator => {
    operator.addEventListener("click", storeOperator)
});



function storeNumber(event)
{
    if(!operator)
    {
        const temp = event.target.textContent;
        firstNumber += temp;
        // console.log("Value of first number: ", firstNumber);
    }
    else
    {
        const temp = event.target.textContent;
        secondNumber += temp;
        // console.log("Value of second number: ", secondNumber);
    }
}


function storeOperator(event)
{
    operator = event.target.textContent;
    // console.log("This is the current operation: ", operator);
}



const add = (num1, num2) => {
    return num1 + num2;
}

const subtraction = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const division = (num1, num2) => {
    return num1 / num2;
}