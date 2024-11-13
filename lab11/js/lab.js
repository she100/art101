// index.js - Lab 11: JavaScript Events and forms
// With a partner, experiment with JavaScript events.
// Author: Stephanie He
// Date: November 11, 2024


// From lab 10
// Function that sorts a string
function sortString(inputString) {
  // Convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}





// Event listener for button
// Click listener
$("#submit").click(function(){
  // get value of input field
  const userName = $("#user-name").val();

  // sort it
  userNameSorted = sortString(userName);

});


// Select output div and append a new div, with modified user name
$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');






// Function for sorting a string, alphabetically
function sortString(inputString) {
  // Convert string to an array
  // Then bring it back to sort it
  return inputString.split('').sort().join('');
}


// Click listener for button
$("#submit").click(function(){
  // Get value of input field
  const userName = $("#user-name").val();
  // Sort the name using function
  userNameSorted = sortString(userName);

  return userNameSorted;
});

// Adds a new div tag to our output div
$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');