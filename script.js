function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    let display = document.getElementById('display');
    display.value += number;
}

function appendOperator(operator) {
    let display = document.getElementById('display');
    let lastChar = display.value.slice(-1);

    // Avoid adding multiple operators in a row
    if (display.value && !isNaN(lastChar)) {
        display.value += operator;
    }
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        // Evaluate the expression and display the result
        display.value = eval(display.value);
    } catch (error) {
        // If an error occurs (e.g., invalid expression), show an error message
        display.value = 'Error';
    }
}