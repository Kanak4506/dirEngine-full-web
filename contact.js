const error = document.querySelectorAll('.form_error')
const firstname = document.getElementById('f_first_name')
const lastname = document.getElementById('f_last_name')
const email = document.getElementById('f_email')
const phone = document.getElementById('f_phone')
const password = document.getElementById('f_password')
const submit_btn = document.getElementsByClassName('submit_btn')

function clearErrors() {
    for (const each of error) {
        each.innerHTML = ''
    }
}
function setError(assigned, message) {
    const element = document.querySelector(`.${assigned}`)
    element.textContent = message;
}

function formValidation() {
    clearErrors()
    let isValid = true;
    let username_pattern = /^[a-z]{3,12}$/i;
    let password_pattern = /^[\w@-]{8,20}$/
    let telephone_pattern = /^[0-9]{10}$/
    let email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!username_pattern.test(firstname.value)) {
        setError('fname', "Please enter a valid first name(3-12 characters only).")
        isValid = false;

    }
    if (!username_pattern.test(lastname.value)) {
        setError('flast', "Please enter a valid last name(3-12 characters only).")
        isValid = false;
    }
    if (!email_pattern.test(email.value)) {
        setError('fpass', "Please enter a valid email Id.")
        isValid = false;
    }
    if (!telephone_pattern.test(phone.value)) {
        setError('fphone', "Please enter a valid mobile number.")
        isValid = false;
    }
    if (!password_pattern.test(password.value)) {
        setError('fpass', "Please enter a strong password")
        isValid = false;
    }

    return isValid;
}


