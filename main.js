const text = "hello world! ";
const speed = 100;
let i = 0;

const typeWriter = () => {
  let currentText = document.getElementById("typed").innerHTML;
  if (i < text.length) {
    // currentText = currentText.slice(0,currentText.length-1)
    currentText += text.charAt(i); //+ "|";
    i++;
    document.getElementById("typed").innerHTML = currentText;
    setTimeout(typeWriter,speed);
  }
}