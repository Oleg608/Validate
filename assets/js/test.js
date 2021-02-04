const NameInput = document.getElementById("NameInput");
const PassInput = document.getElementById("PassInput");
const ValidateButton = document.getElementById("ValidateButton");
function ValidName() {
  if (
    /\s|\W/.test(NameInput.value) ||
    NameInput.value.length > 20 ||
    NameInput.value.length < 6
  ) {
    return false;
  } else {
    return true;
  }
}

function ValidPass() {
  if (
    /[+A-Z]/.test(PassInput.value) &&
    /[+0-9]/.test(PassInput.value) &&
    PassInput.value.length < 20 &&
    PassInput.value.length > 8
  ) {
    return true;
  } else {
    return false;
  }
}
function Validation() {
  const isNameValid = ValidName();
  const isPassValid = ValidPass();
  if (isNameValid && isPassValid) {
    NameInput.style.backgroundColor = "green";
    PassInput.style.backgroundColor = "green";
  } else {
    NameInput.style.backgroundColor = "red";
    PassInput.style.backgroundColor = "red";
    throw Error("Name or Pass is not correct!!!");
  }
}
ValidateButton.onclick = Validation;
