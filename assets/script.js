const form = document.querySelector(".form");
const username = document.querySelector(".username")
const email = document.querySelector(".email")
const password = document.querySelector(".password")
const confirmPassword = document.querySelector(".confirm-password")




form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkInputs()
} );

function checkInputs () {
    const usernameValue = username.value
    const emailValue = email.value
    const passwordValue = password.value
    const confirmValue = confirmPassword.value

    if (usernameValue === '') {
        setErrorFor(username, 'Seu nome é obrigatório')
    }else {
        setSuccessFor(username);
    }
}

function setErrorFor (input, message) {
    message = document.querySelector("")
    formControl = input.parentElement;
    formControl.className = "form-controller error"

}
function setSuccessFor () {
    
}