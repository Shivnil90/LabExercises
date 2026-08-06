// Function to update the first column
function changeColumnOne() {
    const col1 = document.getElementById('column1');
    const heading1 = document.getElementById('heading1');
    const input1 = document.getElementById('input1');

    // Change background colour
    col1.style.backgroundColor = '#4a90e2';

    // Replace heading text with user input, or a fallback default if empty
    if (input1.value.trim() !== "") {
        heading1.textContent = input1.value;
    } else {
        heading1.textContent = "Changed!";
    }
}

// Function to update the second column
function changeColumnTwo() {
    const col2 = document.getElementById('column2');
    const heading2 = document.getElementById('heading2');
    const input2 = document.getElementById('input2');

    // Change background colour
    col2.style.backgroundColor = '#e056fd';

    // Replace heading text with user input, or a fallback default if empty
    if (input2.value.trim() !== "") {
        heading2.textContent = input2.value;
    } else {
        heading2.textContent = "Updated!";
    }
}
