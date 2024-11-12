// index.js - Lab 11: JavaScript Events and forms
// With a partner, experiment with JavaScript events.
// Author: Stephanie He
// Date: November 9, 2024


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