console.log("Prevent Default and Form Events");

const wes = document.querySelector(".wes");
const signupForm = document.querySelector("[name='signup']");

function handleClick(event) {
    console.log("You Clicked it");
    const shouldChangePage = confirm("This website could be malicious! Do you wish to proceed?");
    if (!shouldChangePage) {
        event.preventDefault();
    }
}

function handleSubmit(event) {
    const name = event.currentTarget.name.value;
    const email = event.currentTarget.email.value;
    const agree = event.currentTarget.agree.checked;
    if (!agree) {
        alert("Please agree t&c to continue");
        event.preventDefault();
    }
}

function logEvent(event) {
    console.log(event.type);
    console.log(event.currentTarget.value);
}

signupForm.name.addEventListener("keyup", logEvent);
signupForm.name.addEventListener("keydown", logEvent);
signupForm.name.addEventListener("focus", logEvent);
signupForm.name.addEventListener("blur", logEvent);

wes.addEventListener("click", handleClick);
signupForm.addEventListener("submit", handleSubmit);
