(function() {
    var calculator = document.getElementById('calculator-container');
    var display = document.getElementById('calculator-display');
    var numberKeys = document.getElementsByClassName('number-keys');
    var operator = document.getElementsByClassName('operator');
    var decimal = document.getElementById('decimal');
    var allClear = document.getElementById('ac-key');
    var equal = document.getElementById('equal-key');

    handleClick();

    function handleClick() {
        let previousKeyType = calculator.previousKeyType;

        //  the keypads listener
        for (let i = 0; i < numberKeys.length; i++) {
            numberKeys[i].addEventListener('click', e => {
                let displayedValue = display.textContent;
                let keyValue = e.target.textContent;

                if (displayedValue === '0' || previousKeyType === 'operator') {
                    display.textContent = keyValue;
                } else {
                    display.textContent = displayedValue + keyValue;
                }

                Array.from(e.target.parentNode.children).forEach(k =>
                    k.classList.remove('is-depressed')
                );
            });
        }

        // the operator listener
        for (let i = 0; i < operator.length; i++) {
            operator[i].addEventListener('click', e => {
                e.target.classList.add('is-depressed');
                console.log('operator keys!');
                previousKeyType = 'operator';

                firstValue = display.textContent;

                // operator = calculator.dataset.action;
            });
        }

        decimal.addEventListener('click', e => {
            displayedValue += '.';
            console.log('decimal is', displayedValue);
        });

        allClear.addEventListener('click', e => {
            console.log('AC!!');
        });

        equal.addEventListener('click', e => {
            let secondValue = display.textContent;
            // let firstValue = calculator.firstValue;

            console.log('equal...');
            display.textContent = calculate(firstValue, operator, secondValue);
        });
    }

    function calculate(firstValue, operator, secondValue) {
        let testing = calculator.dataset.action;
        console.log('testing', testing);
        let result = '';

        if (testing === 'add') {
            result = parseFloat(firstValue) + parseFloat(secondValue);
        } else if (testing === 'subtract') {
            console.log('subtracting from calculator()..');
            result = parseFloat(firstValue) - parseFloat(secondValue);
        } else if (testing === 'multiply') {
            result = parseFloat(firstValue) * parseFloat(secondValue);
        } else if (testing === 'divide') {
            result = parseFloat(firstValue) / parseFloat(secondValue);
        }

        return result;
    }
})();

// the display is an array of numbers
// 1. get the value of the number
// 2a. if click the second number...
//  then push the second number to the array and so on
// 2b. if click the operator key...
// then store the current value,
// add the "operator" function from the current value
// push the new value into the array
// 3. the operation continues until...
// when user clicks "=", then give the sum(/operator) of all the arrays
// when user clicks "AC", set the num to 0 again
// **option** when user clicks "C", delete the last number of the array
// when user starts clicking, the "AC" will change to C
// when the user press enter,
