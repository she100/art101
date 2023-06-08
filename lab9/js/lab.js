// index.js - The purpose is to experiment with DOM manipulation.
// In this lab I am connecting JavaScrit and CSS to my HTML file so I can use new commands and elements.
// Author: Stephanie He
// Date: May 11, 2023


// Function
//getElementByld()

window.onload = function () {

// This finds the output <div> and assigns it to the variable outputE1 (1)
var outputEl = document.getElementById("output");
console.log("outputEl: ", outputEl);

// This creates a new element "x" and assigns it to variable new1El (2)
var new1El = document.createElement("x")

// Makes new1El say "something new"
new1El.innerHTML = "Something new. ";
new1El.id = "new-one";

// Creates new element with document.createElement("x") and assigns it to a new variable new1El
var new2El = document.createElement("x");
new1El.id = "new-two";

// Makes new1El say "something else."
new2El.innerHTML = "Something else.";

// Append both elements one at a time using appendChild() (3)
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

//Change the css attribute of two elements on my page
new1El.style.color = "red";
outputEl.style.border = "dotted 2 px black"
outputEl.className="changed";

}


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
