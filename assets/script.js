const form = document.querySelector(".form")
const button = document.querySelector(".button")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirm-password")



button.addEventListener("click", function(event) {
    checkInputs();
    event.preventDefault();
} );

function checkInputs () {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const confirmValue = confirmPassword.value;

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (usernameValue == "") {
        setErrorFor(username, "Digite seu nome!");
    }else {
        setSuccessFor(username);
    }

    if (emailValue == "") {
        setErrorFor(email, "Digite seu email!");
    }else if (!filter.test(emailValue)){
        setErrorFor(email, "Digite o email corretamente!")
    }else {
        setSuccessFor(email);
    }

    if (passwordValue == "") {
        setErrorFor(password, "Digite uma senha!")
    } else if (passwordValue.length <= 4) {
        setErrorFor(password, "Digite ao menos 5 caracteres!")
    }else{
        setSuccessFor(password)
    }
    if (confirmValue == ""){
        setErrorFor(confirmPassword, "Confirme sua senha!")
    }else if (confirmValue != passwordValue) {
        setErrorFor(confirmPassword, "As senhas não conferem!")
    }else {
        setSuccessFor(confirmPassword);
    }

    const formControls = form.querySelectorAll('.form-control')
    //para conseguir fazer o loop usando o every, preciso transformar o 
    // formControls em uma list
    const formIsValid = [... formControls].every(formControls => {
        return (formControls.className === "form-control success");
    });

    if (formIsValid) {
        alert("Cadastro efetuado com sucesso!")
    }
}

function setErrorFor (input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;

    formControl.className = "form-controller error"
}

function setSuccessFor (input) {
    const formControl = input.parentElement;
    formControl.className = "form-controller success"
}






