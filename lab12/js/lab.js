// index.js - The purpose is to experiment with conditionals.
// This Lab is about using a user's name to give them a result based on the code's conditional sorting system.
// Author: Stephanie He
// Date: May 23, 2023


// Sorting function
function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Orange Cat"
  }
  else if (mod == 1) {
    return "Black Cat"
  }
  else if (mod == 2) {
    return "Purple Cat"
  }
  else if (mod == 3) {
    return "Calico Cat"
  }
}


// This is the results section
housesArray = [
  {
      title: "Orange Cat",
      text: "An Orange Cat type likes to chew on boxes and have zoomies."
  },
  {
      title: "Black Cat",
      text: "A Black Cat type likes to cuddle and spend mornings on the porch."
  },
  {
      title: "Purple Cat",
      text: "A Purple Cat type likes to observe everything and experiment"
  },
  {
      title: "Calico Cat",
      text: "A Calico Cat type likes to bask under the sun and eat dried fish."
  }
]



// Click listener attached to #button
var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {

  // takes value of #input, then assigns it a variable name
  var name = document.getElementById("input").value;

  // runs the sorting function and stores the result in a variable house
  var houseObj = sortingHat(name);

  // appends paragraph that says "The Sorting Hat has sorted you into" + cat type
  newText = "<h2>" + houseObj.title + "!</h2>" +
          introHTML +
          "<p>\"" + houseObj.text + "\"</p>" +
          creditHTML;
  var outputArea = document.getElementById("output");
  outputArea.innerHTML = newText;
  removeClass(outputArea, "hidden");
  removeClass(document.getElementById("tail-box"), "hidden");
})


// Attach click handler to submit button
$("#button").click(function(){
// get the value in the #input text box, assign to a varaiable name
var name = $("#input").val()
console.log(name);
// get the length of the name
var nameLength = name.length;
console.log(nameLength);
// get the cat type
var type = getType(nameLength);
console.log(type);
// add type to output div
$("#output").html("<h1>" + type + "</h1>");
})





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
