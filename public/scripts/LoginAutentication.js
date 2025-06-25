const spanLogin = document.getElementById('span-error-password')
const spanPassword = document.getElementById('span-error-login')
const form = document.querySelector('#login-form')

const inputLogin = document.querySelector('#input-username')
const inputPassword = document.querySelector('#input-password')

const button = document.querySelector('#login-button')

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault()
    let ValidLogin = true
    let ValidPassword = true

    if (inputLogin.value === "" || inputLogin.value === null) {
        ValidLogin = false
        showLoginSpanError('O usuário é obrigatório!')
    }

    if (inputPassword.value === "" || inputPassword.value === null) {
        ValidPassword = false
        showPasswordSpanError('A senha é obrigatória!')
    }

})

function showLoginSpanError(message) {
    spanLogin.classList.add('span-error-message')
    inputLogin.classList.add('red-input-border')
    spanLogin.innerText = message
}

function showPasswordSpanError(message) {
    spanPassword.classList.add('span-error-message')
    inputPassword.classList.add('red-input-border')
    spanPassword.innerText = message
}