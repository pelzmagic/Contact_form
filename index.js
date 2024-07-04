const form = document.getElementById("form");
const firstNameInput = document.querySelector(".first_name_input");
const lastNameInput = document.querySelector(".last_name_input");
const emailInputItem = document.querySelector(".email_input_item");
const radioInputs = document.querySelector(".radio_inputs");
const radioChecked = document.querySelector('input[name="query-type"]:checked');
const consent = document.getElementById('consent_space').checked;
// const secondRadioChecked = document.querySelector(".support_input:checked");
const messageInput = document.querySelector(".message_input");
const firstNameError = document.querySelector(".first_name_error");
const lastNameError = document.querySelector(".last_name_error");
const emailError = document.querySelector(".email_error");
const messageError = document.querySelector(".message_error");
const queryError = document.querySelector(".query_error");
const consentError = document.querySelector(".consent_error");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const email = emailInputItem.value;
    const message = messageInput.value;

    let isValid = true;

    if (firstName === '') {
        firstNameError.classList.remove("hide");
    }
    if (lastName === '') {
        lastNameError.classList.remove("conceal");
    }
    if (!email.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/) || email === "") {
        emailError.classList.remove("keep");
    }
    if (!radioChecked) {
        queryError.classList.remove("hoard");
    }
    if (message === "") {
        messageError.classList.remove("lock");
        messageInput.style.borderColor = "red";
    }
    // if (!consent) {
    //     isValid = false;
    //     consentError.classList.remove("bury");
    // }
})