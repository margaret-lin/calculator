class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined; // dont have operation selected
    }

    delete() {}

    appendNumber(number) {
        // set the condition for period
        if (number === '.' && this.currentOperand.includes('.')) return;

        // convert to string so JS can append the number instead of doing operation
        this.currentOperand =
            this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {}

    compute() {}

    updateDisplay() {
        // set the text
        this.currentOperandTextElement.innerText = this.currentOperand;
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector(
    '[data-previous-operand]'
);
const currentOperandTextElement = document.querySelector(
    '[data-current-operand]'
);

// define class
const calculator = new Calculator(
    previousOperandTextElement,
    currentOperandTextElement
);

// select number buttons
// loop all over different buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});
