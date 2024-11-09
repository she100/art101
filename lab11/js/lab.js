// index.js - Lab 9
// With a partner, experiment with jQuery
// Modifies the elements on the page
// Author: Stephanie He
// Date: October 4, 2024

// add challenge button to html
$("#challenge").append("<button id='button-challenge'>Press me!!!</button>");


// challenge event listener
$("#button-challenge").click(function(){
  // console.log to show if the button is clickable when you press inspect -> console.
  console.log("click");
  // add or subtract the "special" class to the section
  $("challenge").toggleClass("special");

});








// click listener for challenge button
//$("button-challenge").click(function(){
 //   $("#challenge").toggleClass("special");
//});


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
