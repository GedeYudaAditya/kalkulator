const number = document.querySelectorAll(".number")

number.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.innerHTML)
        updateScreen(currentNumber)
    })
})

const operators = document.querySelectorAll(".operator")

operators.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputOperator(event.target.innerHTML)
        console.log(event.target.innerHTML)
    })
})

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) =>{
    calculatorScreen.value = number
}

let prevNumber = '';
let calculationOprator = '';
let currentNumber = '0';

const inputNumber = (number) =>{
    if(currentNumber === '0'){
        currentNumber = number;
    }else{
        currentNumber += number;
    }
}

const inputOperator = (operator) =>{
    if(calculationOprator === ''){
        prevNumber = currentNumber;
    }
    calculationOprator = operator;
    currentNumber = '';
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = '';
    switch (calculationOprator) {
        case "+":
            result = parseFloat(prevNumber)+parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber)-parseFloat(currentNumber);
            break;
        case "×":
            result = parseFloat(prevNumber)*parseFloat(currentNumber);
            break;
        case "÷":
            result = parseFloat(prevNumber)/parseFloat(currentNumber);
            break;
        case "%":
            result = parseFloat(prevNumber)/100 * parseFloat(currentNumber);
            break;
    
        default:
            break;
    }

    currentNumber = result;
    calculationOprator = '';
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener("click", () => {
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = '';
    calculationOprator = '';
    currentNumber = '0';
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.innerHTML)
    updateScreen(currentNumber)
})

const inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot;
}