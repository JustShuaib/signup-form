//If any input field is empty, Show error message [Field Name] cannot be empty
// If email is not formatted correctly i.e 'name@host.tld', Show 'Looks like this is not an email'

const form = document.getElementById("form-container");
const email = document.getElementById("email");
const inputs = document.querySelectorAll("input");

form.addEventListener("submit", displayError);

function displayError(e) {
  inputs.forEach((input) => {
    const errLogo = input.nextElementSibling;
    const errPara = errLogo.nextElementSibling;
    if (input.value.length === 0) {
      errLogo.classList.remove("hidden");
      errPara.classList.remove("hidden");
    }
    if (input.value.length > 0) {
      errLogo.classList.add("hidden");
      errPara.classList.add("hidden");
    }
    if (!(email.value.includes("@") && email.value.includes("."))) {
      email.nextElementSibling.classList.remove("hidden");
      email.nextElementSibling.nextElementSibling.classList.remove("hidden");
    }
  });
  e.preventDefault();
}
