// index.js - Lab 8
// Experiment with anonymous functions and callbacks.
// Author: Stephanie He
// Date: October 31, 2024


// Functions
function isOdd(x) {
  var results = (x % 2 == 1);
  return results;
}

// Test the function
console.log("Is 11 odd?", isOdd(11));
console.log("Is 22 odd?", isOdd(22));


// ARRAY OF NUMBERS
array = [2, 4, 6, 8, 1, 3, 5, 7]
console.log("My array", array);

// Variable
var mapResults = array.map(isOdd);
// Console.log should return [false, false, false, false, true, true, true, true].
console.log("Here is a test of oddness in my array:", result);

// Adding a new variable to the function
var result = array.map(function(x){
  return (x+12);
})

// Should return array [14, 16, 18, 20, 13, 15, 17, 19]
console.log("An addition of 12 to the array:", result);





function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
