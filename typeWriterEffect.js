const text = "hello world! ";
const speed = 750;

function typeWriter {
  for (let i = 0; i < text.length; i++) {
    document.getElementById("typed").innerHTML += text.charAt(i);
    setTimeout(typeWriter,speed);
  }
}