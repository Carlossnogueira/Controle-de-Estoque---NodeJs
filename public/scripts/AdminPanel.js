// Create User: 
// TODO: Verifications:

const userName = document.querySelector('#name-input')
const userEmail = document.querySelector('#email-input')
const userPassword = document.querySelector('#password-input')


const buttonRegister = document.querySelector("#button-create-user")

buttonRegister.addEventListener('click', (e) => {
    e.preventDefault()

    const userRole = document.querySelector('input[name="inlineRadioOptions"]:checked') 

    const User = {
        name: userName.value,
        email: userEmail.value,
        password: userPassword.value,
        role: userRole.value
    }

    console.log(User)
})

