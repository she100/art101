// index.js - Lab 7
// Write functions that take user input and manipulate a string.
// Author: Stephanie He
// Date: October 28, 2024

// New Function that receives input from the user, sorts the letters,
// and prints a new name.
function sortYourName(){
  var userName = window.prompt("Hello! Please give me your name so I can change it :)");
  console.log("userName =", userName);



  //if (userName !=null){
  ///  document.getElementById("demo").innerHTML =
  //  "Hello " + userName + "! How are you?";
 //}

  // Split the string to an array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArraySort);

  // Sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  // Join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  // Give the new name
  return nameSorted;

}

if (userName !=){
  document.getElementById("demo").innerHTML =
  "My Name is: " + sortYourName;
}


// Output
document.writeln("Here's your new name, I hope you like it: ",
  sortYourName(), "</br>");






// Stuff that came with the file automatically
// Constants
// Functions

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
