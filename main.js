let randomNumber = Math.round(Math.random() *100)
num = document.createElement("h1");

num.textContent = randomNumber;
num.style.color = "red"
num.style.textAlign = "center";

num.style.fontSize = "100px"
document.body.appendChild(num);