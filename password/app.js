let genBtns = document.querySelector("#genBtn");
const PassBox = document.getElementById("passBox");
const value = 12;


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const char = "!@#$%^&*()?{}";

const allchars = upperCase + lowerCase + char + number;

genBtns.addEventListener("click", () => {
  console.log("hellow word")
  let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += char[Math.floor(Math.random() * char.length)];

    while(value > password.length){
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }
    PassBox.value = password;

})

function coppyy(){
    PassBox.select();
    document.execCommand("copy");
}