const text = "hello world! ";
const speed = 200;
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typed").innerHTML += text.charAt(i);
    setTimeout(typeWriter,speed);
    i++;
  }
}