// Returns a random dice value based on the number of sides
function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

// Rolls the selected dice and displays the result
function rollDice() {

    const sides = Number(document.getElementById("diceType").value);

    const result = Math.floor(Math.random() * sides) + 1;

    document.getElementById("result").innerHTML = result;

}