// Returns the sum of two numbers.
function add(a, b) {
    return a + b;
}

// Returns the subtraction of two numbers.
function subtract(a, b) {
    return a - b;
}

// Returns the multiplication of two numbers.
function multiply(a, b) {
    return a * b;
}

// Returns the division of two numbers.
function divide(a, b) {
    return a / b;
}

if (add(10, 5) !== 15) {
    throw new Error("Addition Test 1 Failed");
}

if (add(0, 5) !== 5) {
    throw new Error("Addition Test 2 Failed");
}

if (add(-5, 10) !== 5) {
    throw new Error("Addition Test 3 Failed");
}


if (subtract(10, 5) !== 5) {
    throw new Error("Subtraction Test 1 Failed");
}

if (subtract(5, 0) !== 5) {
    throw new Error("Subtraction Test 2 Failed");
}

if (subtract(-5, -2) !== -3) {
    throw new Error("Subtraction Test 3 Failed");
}


if (multiply(5, 2) !== 10) {
    throw new Error("Multiplication Test 1 Failed");
}

if (multiply(5, 0) !== 0) {
    throw new Error("Multiplication Test 2 Failed");
}

if (multiply(-5, 2) !== -10) {
    throw new Error("Multiplication Test 3 Failed");
}


if (divide(10, 2) !== 5) {
    throw new Error("Division Test 1 Failed");
}

if (divide(7.5, 2.5) !== 3) {
    throw new Error("Division Test 2 Failed");
}

if (divide(-10, 2) !== -5) {
    throw new Error("Division Test 3 Failed");
}

function greet(name) {
    console.log("Hello " + name);
}
// Greeting function tests
greet("Shivnil");
greet("John");
greet("Student");
console.log("All tests passed successfully.");