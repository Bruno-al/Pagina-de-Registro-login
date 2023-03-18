function validacion(){
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    

    if(firstName == lista[0] && lastName == lista[0].lastname && email == lista[1].email && password == lista[1].password){
        location.href = "home.html"
    }else if(firstName == '' || lastName == '' && email == '' || password == ''){
        alert("Preencha todos os campos")
    }
     else{
        alert("Login incorreto")
    }
}