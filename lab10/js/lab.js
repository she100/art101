// index.js - Lab 10: JavaScript for the Web
// With a partner, experiment with DOM manipulation.
// Modifies the elements on the page
// Author: Stephanie He
// Date: November 7, 2024

//please push qiuckly

// Function
// Fake Dialogue
function generateRandomWords() {
  const text = `Can you take a look inside your heart? Is there any room for me?
I won't have to hold my breath 'til you get down on one knee because
What's the point of crying? It was never even love
Did you ever want me? Was I ever good enough?
The-the boy's a liar, the boy's a liar
He doesn't see ya, you're not looking at me, boy
The boy's a liar, the boy's a liar
He doesn't see ya, you're not looking at me, boy`;
  const min = 2;
  const max = 200;
  const randLength = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index and adjust to nearest whitespace boundary
  let randStart = Math.floor(Math.random() * (text.length - randLength + 1));
  while (randStart > 0 && text[randStart - 1] !== ' ') {
    randStart--;
  }
  // Set the end index and adjust to nearest whitespace boundary
  let endIndex = randStart + randLength;
  while (endIndex < text.length && text[endIndex] !== ' ') {
    endIndex++;
  }
  // Generate the random text, breaking at the nearest whitespace boundaries
  let selectedText = text.slice(randStart, endIndex).trim();
  
  // Return the randomized text.
  return selectedText;
}


// click listener for button
$("#make-convo").click(function(){
  // get new fake dialogue
  const newText = generateRandomWords();

  // append a new div to our output div
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});
