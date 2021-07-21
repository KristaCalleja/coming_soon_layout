const form = document.getElementById("form");
const inputText = document.getElementById("input");
const regex = new RegExp(`/.+@.+\.\w{2,3}/`);
const btn = document.querySelector('.btn');

function validateEmail(){
    // Check values
    const string = inputText.value;
    const checkRegex = regex.test(string); 

    // Create new elements in form
    const helper = document.createElement('div');
    const errorIcon = document.createElement('img');

    // Style new div
    helper.classList.add('helper');
    errorIcon.src = "images/icon-error.svg";
    
    // Manipulate the DOM
    if (checkRegex === true) {
        helper.innerText = 'Welcome aboard! ❣';
        form.insertAdjacentElement('afterend', helper);
    }
    else {
        helper.innerText = 'Please provide a valid email.';
        form.insertAdjacentElement('afterend', helper);
        form.insertAdjacentElement('afterbegin', errorIcon);
    }
}
form.addEventListener('submit', function(event){
    event.preventDefault();
    validateEmail();
});

// Error handler
function handleError(err){
    console.log('Error');
    console.log(err);
}