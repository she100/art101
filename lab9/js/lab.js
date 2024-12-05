// index.js - Lab 9
// With a partner, experiment with jQuery
// Modifies the elements on the page
// Author: Stephanie He
// Date: November 4, 2024

// console.log("click!"); allows you to see if your button is
// clickable in the inspect console window.

// CHALLENGES
// add challenge button to html
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// challenger click listener
$("#button-challenge").click(function(){
  console.log("click!");
  // Add or subtract the "special" class to the section
  $("#challenge").toggleClass("special");
});
// END OF CHALLENGES

// PROBLEMS
// add button for problem section
$("#problem").append("<button id='button-problem'>Make Special</button>");

// problem click listener
$("#button-problem").click(function(){
  console.log("click!");
  // add or subtract "special" class to the section
  $("#problem").toggleClass("special");

});
// END OF PROBLEMS


// REFLECTION
// add button to reflection section
$("#reflection").append("<button id='button-reflection'>Make Special</button>");

// reflection click listener
$("#button-reflection").click(function(){
  console.log("click!");
  // add or subtract "special" class to the section
  $("#reflection").toggleClass("special");
});
// END OF RESULTS

// RESULTS
// add button to results section
$("#results").append("<button id='button-results'>Make Special</button>");

// results click listener
$("#button-results").click(function(){
  console.log("click!");
  // add or subtract "special" class to the section
  $("#results").toggleClass("special");
});
// END OF RESULTS




// Code Formula
// // challenge event listener
// $("#button-challenge").click(function(){
//   // console.log to show if the button is clickable when you press inspect -> console.
//   console.log("click");
//   // add or subtract the "special" class to the section
//   $("challenge").toggleClass("special");

// });

