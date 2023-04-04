const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator')
const clear = document.querySelector('.clear');
const calculate = document.querySelector('.calculate');

let prevNumber = ''
let calculationOperator = ''
let currentNumber = ''

// Menampilkan ke display
const input = (number) => {
    if(display.value === '0') {
        display.value = number;
    } else {
        if(calculationOperator === '') {
            prevNumber += number;
            display.value = prevNumber;
        } else {
            currentNumber += number;
            display.value = currentNumber;
        }
    }
}

// Mengatur tombol numbers
numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        input(event.target.value);
    });
});

// Mengatur tombol operators
operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        calculationOperator = event.target.value;
    });
});

// Mengatur tombol clear / AC
clear.addEventListener('click', () => {
    display.value = ''
    prevNumber = ''
    currentNumber = ''
    calculationOperator = ''
});

// Mengatur tombol result / =
calculate.addEventListener('click', () => {
    let result = ''
    switch (calculationOperator) {
        case '+':
            result = parseInt(prevNumber) + parseInt(currentNumber)
            break;
        case '−':
            result = parseInt(prevNumber) - parseInt(currentNumber)
            break;
        case '×':
            result = parseInt(prevNumber) * parseInt(currentNumber)
            break;
        case '÷':
            result = parseInt(prevNumber) / parseInt(currentNumber)
            break;
        case '%':
            result = (parseInt(prevNumber)/100) * parseInt(currentNumber)
            break;
        default:
            alert('Invalid input')
            break;
    }
    display.value = result
    prevNumber = result
    currentNumber = ''
    calculationOperator = ''
});