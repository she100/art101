// index.js - purpose: to experiment with loops
//
// Author: Stephanie He
// Date: May 25, 2023



// FizzBuzz function
function FizzBuzz(maxNums, factorObj) {
  // iterate over all of out numbers
  for (var num=0; num<maxNums; num++) {
      debugger;

      var outputStr = "";
      // iterate over the factors we got from the html
      for (var factor in factorObj) {
          // check to see if this num is a multiple of factor
          if (num % factor == 0) {
              // if yes, than add the text to output string
              outputStr += factorObj[factor];
          }
      }
      // now if we have words in outputStr, format it like this " - FizzBuzz!"
      if (outputStr) {
          outputStr = " - " + outputStr + "!";
      }
      outputToPage(num.toString() + outputStr)
      oneLongString += num, "fizz! <br>";
      
  }
}

str += "Fizz";
$("#output").append("<p>" + str + "</p>");












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
