// Global Variables for the Typing Animation
const textArr = ["hello world!","dzien dobry!","404:Header Not Found","scroll down!","now in HD!","Uncaught TypeError:"];
const speed = 100;
let i = 0;

// Main Function called by the HTML
const typingHeader = () => {
  // Sets off typing animation
  // Typing Animations constantly call each other
  // Typing Animations loop for infinity
  setTimeout(typeWriter,2000,textArr[0]);  
}

// Typing Animation
const typeWriter = (text) => {
  // Get Current Text
  let currentText = document.getElementById("typed").innerHTML;
  console.log(i)
  // Adds the next letter of the string into the HTML Document
  if (currentText.length < text.length) {
    currentText += text.charAt(currentText.length);
    document.getElementById("typed").innerHTML = currentText;
    setTimeout(typeWriter,speed,text);
  } else {
    // Once complete queues the Delete Animation after 5 seconds
    setTimeout(typeWriterDelete,5000)
  }
}

// Delete Animaton
const typeWriterDelete = () => {
  // Get Current Text
  let currentText = document.getElementById("typed").innerHTML;
  // removes the next letter of the string into the HTML Document
  if (currentText.length > 0) {
    document.getElementById("typed").innerHTML = currentText.slice(0,-1);
    setTimeout(typeWriterDelete,speed);
  } else {
    // Selects the next work to type
    // Or resets to 0.
    if (i == textArr.length-1) {
      i = 0;
    } else {
      i++;
    }
    // Once complete queues the typing animation to start after 2 seconds
    setTimeout(typeWriter,2000,textArr[i]);
  }
}