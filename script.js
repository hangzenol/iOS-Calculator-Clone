let displayValue = '0';
let saveNum;

function updateDisplay() {
    saveNum = parseFloat(displayValue);
    document.getElementById('display').innerText = displayValue;
}

function appendToDisplay(value) {
    if (displayValue === '0' && value !== '.') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function negateNum() {
    let number = parseFloat(displayValue);
    number = number * -1;
    displayValue = number.toString();

    updateDisplay();
}

function calcPercent() {
    let number = parseFloat(displayValue);

    if (number === 0) {
        displayValue = number.toString();
    } else {
        number = (number/100).toFixed(2);
    }

    displayValue = number.toString();
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = '0';
    }
    updateDisplay();
}