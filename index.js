const form = document.getElementById("form");
const firstNameInput = document.querySelector(".first_name_input");
const lastNameInput = document.querySelector(".last_name_input");
const emailInputItem = document.querySelector(".email_input_item");
const radioInputs = document.querySelector(".radio_inputs");
const messageInput = document.querySelector(".message_input");
const firstNameError = document.querySelector(".error");
// const lastNameError = document.querySelector(".error");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const email = emailInputItem.value;
    const message = messageInput.value;

    if (firstName == '') {
        firstNameError.classList.remove("hide");
    } else {
        firstNameerror.classList.add("hide");
    }
    // if (lastName == '') {
    //     lastNameError.classList.remove("hide");
    // }
})