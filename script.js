let firstNumber = '';
let secondNumber = '';
let operator = null;
let float = false;

const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const result = document.getElementById('result');
const currOperation = document.getElementById('curr-operation');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const decimal = document.querySelector('.decimal');


numbers.forEach(number => {
    number.addEventListener("click", storeNumber)
});

operators.forEach(operator => {
    operator.addEventListener("click", storeOperator)
});

clearBtn.addEventListener('click', clearAll);
deleteBtn.addEventListener('click', deleteVal);
equals.addEventListener('click', equalsTo);
decimal.addEventListener('click',checkDecimal);


function storeNumber(event)
{

    //This function stores values for both numbers

    const temp = event.target.textContent; //Value of button pressed

    if(!operator)
    {
        firstNumber += temp;
        result.innerText = firstNumber;
        // console.log("Value of first number: ", firstNumber);
    }
    else
    {
        secondNumber += temp;
        result.innerText = secondNumber
        // console.log("Value of second number: ", secondNumber);
    }

}


function storeOperator(event)
{
    /* This function stores the operator */

    operator = event.target.textContent;
    updateScreen();
}

function clearAll()
{
    firstNumber = '';
    secondNumber = '';
    operator = null;
    result.innerText = 0;
    currOperation.innerHTML = `&nbsp;`;
}

function deleteVal()
{
    /* We know we're working with the first number if a button 
    to select an operation hasn't been clicked yet */

    if(!operator)
    {
        if(firstNumber.length == 1)
        {
            firstNumber = '';
            result.innerText = 0;
        }
        else
        {
            var tempString = firstNumber.slice(0,-1);
            firstNumber = tempString;
            result.innerText = firstNumber
        }
    }
    else
    {
        if(secondNumber.length == 1)
        {
            secondNumber = '';
            result.innerText = 0;
        }
        else
        {
            var tempString = secondNumber.slice(0,-1);
            secondNumber = tempString;
            result.innerText = secondNumber;
        }
    }
}

function equalsTo()
{

    /* Since our nums are strings, we can parse them as floats since this covers both behaviors
        of them being integers or decimals. */

    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    switch(operator)
    {
        case '+':
            result.innerText = roundAccordingly(add(firstNumber,secondNumber));
            break;
        case '-':
            result.innerText = roundAccordingly(subtraction(firstNumber,secondNumber));
            break;
        case '÷':
            result.innerText = roundAccordingly(division(firstNumber,secondNumber));
            break;
        case '*':
            result.innerText = roundAccordingly(multiply(firstNumber,secondNumber));
            break;
    }
    updateScreen();
}

function checkDecimal() {
    if(!operator){
        firstNumber += '.';
        result.innerText = firstNumber;
    }
    else {
        secondNumber += '.';
        result.innerText = secondNumber;
    }
}

function updateScreen()
{
    if(secondNumber == '')
    {
        currOperation.innerText = firstNumber + " " + operator;
    }
    else
    {
        currOperation.innerText = firstNumber + " " + operator + " " + secondNumber + " =";
    }
}

function roundAccordingly(value)
{
    const roundedValue = Math.round(value * 10) / 10;
    if (Number.isInteger(roundedValue))
    {
        return roundedValue.toFixed(0);
    }
    else
    {
        return roundedValue.toFixed(1);
    }
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