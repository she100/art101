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
  console.log("click!")
  // sort it
  userNameSorted = sortString(userName);

});


// Select output div and append a new div, with modified user name
$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');


 // Use the Fisher-Yates (Knuth) shuffle algorithm to shuffle the characters
 for (let i = charArray.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
}

// Join the shuffled characters back into a string
const anagram = charArray.join('');

// Sort in alphabetical order.
function sortString(inputString) {
   // We have to convert our string to an array and back again to sort it
   return inputString.split('').sort().join('');
}


// Output in script output section
document.writeln("Test: ",
  sortString(), "</br>");

// Prints onto website 
  if (userName !=null){
    document.getElementById("demo").innerHTML = "Test: " + sortString();
  }
  

