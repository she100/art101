// index.js - The purpose is to experiment with JavaScript events.
// INCLUDE
// Author: Stephanie He
// Date: May 16, 2023


// Button

var button = document.getElementById('my-button');


// Function that sorts name

function nameSort(username){

    return username.toLowerCase().split("").sort().join("");

}

// function that takes value of input and runs it through array, then saves the results.

function randomizeName(username){
    var nameArray = username.toLowerCase().split("");
    console.log("nameArray =", nameArray);


var shuffledArray = shuffleArray(nameArray);
console.log("shuffledArray =", shuffledArray);
var shuffledString = shuffledArray.join("");

return newName;

}



// Replace the HTML in <div id=output> with the results




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
