
let email = document.getElementById("email").value
let password = document.getAnimations("password").value

let submit = document.getElementById("submit")

let emailHelp = document.getAnimations("emailHelp")
let passwordlHelp = document.getElementById("passwordlHelp")

let emptyMessage = document.getElementById("emptyMessage")



submit.addEventListener("click",()=>{

    if (email.value==="" || password.value===""){
    emptyMessage.innerText = "empty info"
    }else{
        fetch('https://65520b5b5c69a7790329765e.mockapi.io/users-info')
        .then((response) => response.json())
        .then((data) =>{
            let users = data.find((d) => d.email == data.email && d.password == data.password)

            if (users){
                let welcomeMessage = document.getElementById("welcomeMessage") 
                welcomeMessage.innerText=localStorage.getItem("User");
                window.location.href="index.html"

            }else{
                emptyMessage.innerText="email or password is not correct"
            }
        } )

    }
})

    











