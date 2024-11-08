// index.js - Lab 9
// With a partner, experiment with jQuery
// Modifies the elements on the page
// Author: Stephanie He
// Date: October 4, 2024

// add challenge button to html
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// challenger click listener
$("#button-challenge").click(function(){
  console.log("click!");
  // Add or subtract the "special" class to the section
  $("#challenge").toggleClass("special");
});




// add button for problem section
$("#problem").append("<button id='button-problem'>Make Special</button>");

// problem click listener
$("#button-problem").click(function(){
  // add or subtract "special" class to the section
  $("#problem").toggleClass("special");

});


// add button to reflection section
$("#reflection").append("<button id='button-reflection'>Make Special</button>");



// add button to results section
$("#results").append("<button id='button-results'>Make Special</button>");

// results click listener
$("#button-results").click(function(){
  // add or subtract "special" class to the section
  $("#results").toggleClass("special");
});





// Function for BUTTON OUTPUTS
// function outputStuff(){
//   let text = $("#my-field").val();

// }

// // challenge event listener
// $("#button-challenge").click(function(){
//   // console.log to show if the button is clickable when you press inspect -> console.
//   console.log("click");
//   // add or subtract the "special" class to the section
//   $("challenge").toggleClass("special");

// });








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
