// index.js - the purpose of this lab is to experiment with jQuery.
// Using JS file to have a button and add an event listener.
// Author: Stephanie He
// Date: May 18, 2023


// Click event for btn-secondary
$(".sectionbox-button").click(function(){
  $(this).parent().toggleClass("special");
})


// When clicked, buttons are highlighted.
$(".highlight-button").click(function(){
  $(this).parent().toggleClass("special");
})



// This is button from jQuery
//$(".sectionbox").append("<button class='btn btn-secondary highlight-button'>Toggle Highlight</button>");
// this added more buttons, fail.

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
