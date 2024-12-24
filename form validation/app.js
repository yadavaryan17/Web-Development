const Name = document.querySelector("#name");
const Email = document.querySelector("#email");
const Password = document.querySelector("#password");
const NameError = document.querySelector("#nameError");
const EmailError = document.querySelector("#emailError");
const PassError = document.querySelector("#passError");
const Submit = document.querySelector("#submit");

Submit.addEventListener("click",(e)=>{
    e.preventDefault();
    if(validateName() && validateEmail() && validatePassword()){
        alert("Account created");
    }

});
function validateName(){
    console.log(Name.value);
    if(Name.value.length == 0){
        NameError.innerText = "Please! Enter Your Name";
        return false;
    }
    if(!Name.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        NameError.innerText = "Enter your full name";
        return false;
    }
    NameError.innerText = "";
    return true;
    
}
function validateEmail(){
    if(Email.value.length == ""){
        EmailError.innerText = "Please! enter your email"
        return false;
    }
    if(!Email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        EmailError.innerText = "This is not valied";
        return false;
    }
    EmailError.innerText = "";
    return true;
}
function validatePassword(){
    if(Password.value.innerText == ""){
        PassError.innerText = "Please! Enter password";
        return false;
    }
    if(!Password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
        PassError.innerText = "Enter valied password";
        return false;
    }
    PassError.innerText = "";
    return true;
}