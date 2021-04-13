const form = document.getElementById("form");
const emailElement = document.getElementById("input");
const errorElement = document.getElementById('error');
const correctEmail = "janeappleseed@email.com";

form.addEventListener("submit", (event) => {
    let messages = [] 

    if (emailElement.value === '' || emailElement.value == null) {
        messages.push('This field cannot be blank')
    }

    if (emailElement.value === correctEmail) {
        messages.push('Welcome onboard! :-)')
    }
    else {
        messages.push('Please provide a valid email')
    }

    event.preventDefault()
    errorElement.innerText = messages.join('! ')
})