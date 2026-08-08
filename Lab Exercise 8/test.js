// Returns a random dice value
function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

// Test 1 - D6
for (let i = 0; i < 10; i++) {
    const result = rollDice(6);

    if (result < 1 || result > 6) {
        throw new Error("D6 Test Failed");
    }
}

// Test 2 - D10
for (let i = 0; i < 10; i++) {
    const result = rollDice(10);

    if (result < 1 || result > 10) {
        throw new Error("D10 Test Failed");
    }
}

console.log("All unit tests passed successfully.");