// index.js - Lab 13: Loops
// Working with a partner, experiment with loops.
// Author: Stephanie He
// Date: November 18, 2024


// FUNCTION
function sortingHat(str) {
  // counts the letters in str
  // then assigns to variable length
  length = str.length;

  // modulus remainder % operator to get remainder with 4: mod = length % 4;
  mod = length % 4;
  // mod will now be a value between 0 and 3
  if (mod == 0) {
    return "Gryffindor house"
  }
  else if (mod == 1) {
    return "Ravenclaw house"
  }
  else if (mod == 2) {
    return "Slytherin house"
  }
  else if (mod == 3) {
    return "Hufflepuff house"
  }
  // conditional that returns Gryffindor, Ravenclaw, Slytherin, & Hufflepuff
  // depending on whether the value of mod is 0, 1, 2, or 3.

}


// USE THE STRING TO RETURN a hashed checksum of the string
function checksum(s) {
  var hash = 0, strlen = s.length, i, c;
  if ( strlen === 0 ) {
    return hash;
  }
  for ( i = 0; i < strlen; i++ ) {
    c = s.charCodeAt( i );
    hash = ((hash << 5) - hash) + c;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
};


// Three pure javascript functions to manipulate classes
// This is to take classes and sort them.
function hasClass(ele,cls) {
  return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}
//
function addClass(ele,cls) {
  if (!hasClass(ele,cls)) ele.className += " "+cls;
}
//
function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className=ele.className.replace(reg,' ');
  }
}

// Given a name, hash the string, and
// return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
function sortingHatHash(str) {
  checksumValue = checksum(str);
  mod = Math.abs(checksumValue) % housesArray.length;
  return housesArray[mod];      // returns an object from the array
}


// Click listener attached to #button
// Declare the variable myButton, connected to "button" in html
var myButton = document.getElementById("button");
myButton.addEventListener("click", function(){

  var houseObj = sortingHatHash(name);
  var house = sortingHat(name);
  newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
  document.getElementById("output").innerHTML = newText;

})

$("button").click(function(){
  var name = $("#input").val()
  console.log(name);

})






housesArray = [
  {
    title: "Gryffindor",
    text: "You have been assigned to the Gryffindor house."
  },

  {
    title: "Hufflepuff",
    text: "You have been assigned to the Hufflepuff house."
  },

  {
    title: "Ravenclaw",
    text: "You have been assigned to the Ravenclaw house."
  },

  {
    title: "Slytherin",
    text: "You have been assigned to the Slytherin house."
  },

]