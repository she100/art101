// index.js - The purpose here is to create anon functions and callbacks
// Function time
// Author: Stephanie He
// Date: May 2, 2023


// Function Steph
// It takes the variable x and brings it to the power of 5

function Steph(x){
  return (x ** 5);
}


// This is where the function gets tested
console.log("what is 4-3?", Steph(1));
console.log("Who didn't eat nine?", Steph(7));


// Provides an array
array = [2, 4, 6, 8, 10];
console.log("This is an array", array);

var result = array.map(Steph);
console.log("Test if this array is long", result);

var result = array.map(function(x){
  return x ** 5;
})



// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
