const textArr = ["hello world!","dzien dobry!","404:Header Not Found","scroll down!","now in HD!","Uncaught TypeError:"];
const speed = 100;
let i = 0;
const typingHeader = () => {
  
  setTimeout(typeWriter,2000,textArr[0]);  

}

const typeWriter = (text) => {
  let currentText = document.getElementById("typed").innerHTML;
  console.log(i)
  if (currentText.length < text.length) {
    currentText += text.charAt(currentText.length);
    document.getElementById("typed").innerHTML = currentText;
    setTimeout(typeWriter,speed,text);
  } else {
    
    setTimeout(typeWriterDelete,5000)
  }
}

const typeWriterDelete = () => {
  let currentText = document.getElementById("typed").innerHTML;
  if (currentText.length > 0) {
    document.getElementById("typed").innerHTML = currentText.slice(0,-1);
    setTimeout(typeWriterDelete,speed);
  } else {
    if (i == textArr.length-1) {
      i = 0;
    } else {
      i++;
    }
    setTimeout(typeWriter,2000,textArr[i]);
  }
}