function calculator(operator, number1, number2) {
    let result;
    if (operator === '+') {
        result = number1 + number2;
    } else if (operator === '-') {
        result = number1 - number2;
    } else if (operator === '*') {
        result = number1 * number2;
    } else if (operator === '/') {
        if (number2 !== 0) {
            result = number1 / number2;
        } else {
            console.log("Cannot divide by zero");
            return;
        }
    } else {
        console.log("Invalid operator");
        return;
    }
    console.log("Result:", result);
}

// Example usage
calculator('+', 10, 25); // Result: 35
calculator('-', 50, 20); // Result: 30
calculator('*', 6, 4);   // Result: 24
calculator('/', 40, 8);  // Result: 5
calculator('/', 10, 0);  // Cannot divide by zero
