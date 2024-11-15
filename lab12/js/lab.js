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

$("button").click(function(){
  var name = $("#input").val()
  console.log(name);


})



$(document).ready(function(){
  $("#form-to-be-submitted").click(function(){
      $(".whatever-styling-you-want").html($("#textBox").val());
    });
});
