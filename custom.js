const form = document.getElementById("form");
const inputText = document.getElementById("input");
const regex = new RegExp(`/.+@.+\.\w{2,3}/`);
const btn = document.querySelector('.btn');
const errorIcon = document.querySelector('.error');

function validateEmail(){
    // Check values
    const string = inputText.value;
    const checkRegex = regex.test(string); 

    // Create new elements in form
    const helper = document.createElement('div');

    // Style new div
    helper.classList.add('helper');
    
    // Manipulate the DOM
    if (checkRegex === true) {
        helper.innerText = 'Welcome aboard! ❣';
        form.insertAdjacentElement('afterend', helper);
    }
    else {
        helper.innerText = 'Please provide a valid email.';
        form.insertAdjacentElement('afterend', helper);
        errorIcon.classList.add('error-active');
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