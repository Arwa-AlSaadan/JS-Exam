

let userName = document.getElementById("userName").value
let email = document.getElementById("email").value
let password = document.getAnimations("password").value

let submit = document.getElementById("submit")


let nameHelp = document.getElementById("nameHelp")
let emailHelp = document.getAnimations("emailHelp")
let passwordlHelp = document.getElementById("passwordlHelp")

let emptyMessage = document.getElementById("emptyMessage")

let userReg =  /^[A-Za-z. ]{3,20}$/;
let emailReg = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
let passReg =  /^[0-9]{5,}$/;




submit.addEventListener("click",()=>{


if (userName.value==="" || email.value==="" || password.value==="")
emptyMessage.innerText = "empty info"
else if (!(userName.match(userReg)))
nameHelp.innerText = "username incorrect"
else if (!(email.match(emailReg)))
emailHelp.innerText = "email incorrect"
else if (!(password.match(passReg)))
passwordlHelp.innerText = "password should be only numbers and greater than 4 characters"
else {

    fetch('https://65520b5b5c69a7790329765e.mockapi.io/users-info', {
        method: 'POST',
        body: JSON.stringify({
            user: userName,
            email: email,
            password: password,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) =>{ 
        localStorage.setItem("User",userName)
        window.location.href ="index.html";  }
        );

    }
    
})


let welcomeMessage = document.getElementById("welcomeMessage") 
welcomeMessage.innerText=localStorage.getItem("User");


























    let welcomeMessage = document.getElementById("welcomeMessage") 
    welcomeMessage.innerText=localStorage.getItem("User");

