function add_new_user(){
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    
    users.push({
        firstname:firstName,
        lastname: lastName,
        email: email,
        password: password, 
    })
    page_login()

}

function page_login(){
    let div_login = document.querySelector(".register-login")

    div_login.innerHTML = ""

    let input_email = document.createElement("input")
    let input_senha = document.createElement("input")
    let button      = document.createElement("button")

    input_email.type = "email"
    input_email.placeholder = "email"
    input_email.id = "email_login"
    input_senha.type = "password"
    input_senha.placeholder = "senha"
    input_senha.id = "password_login"

    button.innerText = "Logar"


    button.addEventListener("click", ()=>{
        let email = document.querySelector("#email_login").value
        let password = document.querySelector("#password_login").value
        
        let user = {}

        for (let i = 0; i < users.length; i++) {
        if(email == users[i].email && password == users[i].password){
            user = users[i]
        }else if(email == "" || password == ""){
            alert("Preencha todos os campos")
        }


       
    }
    console.log(user)
    if(email == user.email && password == user.password){
        return (location.href = "home.html")
    }else{
        alert("login incorreto")
    }
    })
    

    div_login.append(input_email,input_senha,button)
    return div_login
}


function validacion(lista){
    
    let email = document.querySelector("#email_login").value
    let password = document.querySelector("#password_login").value
    
    let obj = ""

    for (let i = 0; i < array.length; i++) {

    if(email == lista[0].email && password == lista[0].password){
        obj = lista[i]
        
    }else if(email == "" || password == ""){
        alert("Preencha todos os campos")
    }
     else{
        alert("Login incorreto")
    }
    console.log(obj)
}
}
