// ================================
// Lab Exercise 5 - Arrays
// ================================

// Create an array that has 5 elements.
let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

// Print the original array to the console.
console.log("Original Array:");
console.log(fruits);
console.log("----------------------------");

// Replace the value of the element at position 1 and 4.
// (JavaScript arrays start from index 0)
fruits[1] = "Pineapple";   // Replace Banana with Pineapple.
fruits[4] = "Watermelon";  // Replace Grapes with Watermelon.

// Print the updated array.
console.log("After Replacing Elements:");
console.log(fruits);
console.log("----------------------------");

// Add a new element to the beginning of the array.
fruits.unshift("Cherry");  // Add Cherry as the first element.

// Print the updated array.
console.log("After Adding Element at Beginning:");
console.log(fruits);
console.log("----------------------------");

// Remove the element at the end of the array.
fruits.pop();  // Remove the last element.

// Print the updated array.
console.log("After Removing Last Element:");
console.log(fruits);
console.log("----------------------------");

// Print the final array to the console.
console.log("Final Array:");
console.log(fruits);
console.log("----------------------------");

// Print the total number of elements in the array.
console.log("Total Elements:", fruits.length);

