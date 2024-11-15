// index.js - Lab 12: Conditionals
// Working with a partner, create a function that depends on conditionals.
// Author: Stephanie He
// Date: November 14, 2024


// FUNCTION
function sortingHat(str) {
  // counts the letters in str
  // then assigns to variable length
  length = str.length;

  // modulus remainder % operator to get remainder with 4: mod = length % 4;
  mod = length % 4;
  // mod will now be a value between 0 and 3
  if (mod == 0) {
    return "Gryffindor"
  }
  else if (mod == 1) {
    return "Ravenclaw"
  }
  else if (mod == 2) {
    return "Slytherin"
  }
  else if (mod == 3) {
    return "Hufflepuff"
  }
  // conditional that returns Gryffindor, Ravenclaw, Slytherin, & Hufflepuff
  // depending on whether the value of mod is 0, 1, 2, or 3.

}


// Click listener attached to #button
// Declare the variable myButton, connected to "button" in html
var myButton = document.getElementById("button");
myButton.addEventListener("click", function(){
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
  document.getElementById("output").innerHTML = newText;

})














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





// Output in script output section
document.writeln("Test: ",
  sortString(), "</br>");

// Prints onto website 
  if (userName !=null){
    document.getElementById("demo").innerHTML = "Test: " + sortString();
  }
  