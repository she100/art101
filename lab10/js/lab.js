// index.js - Lab 10: JavaScript for the Web
// With a partner, experiment with DOM manipulation.
// Modifies the elements on the page
// Author: Stephanie He
// Date: November 7, 2024


// Function
// Fake Dialogue

function generateRandomDialogue() {
  const text = "Hi! How are you? My name is Stephanie. And some other random words.";
  const min = 3;
  const max = 5;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;

  // random starting index to slice the text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  
  // Generate random text
  return text.slice(randStart, randStart + randLen);

}










