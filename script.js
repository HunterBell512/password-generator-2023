// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function to generate a secure password
function generatePassword () {
  let passwordLength = window.prompt("Enter a character length (8-128)"); // get password length
  let expression;
  let choicesSelected = [];

  while (passwordLength < 8 || passwordLength > 128) {
    if (passwordLength < 8) {
      window.alert("Chosen password length is too short!");
    } else {
      window.alert("Chosen password length is too long!");
    }
    passwordLength = window.prompt("Enter a character length (8-128)");
  }

  let includeLower = window.confirm("Do you want lowercase letters?");
  let includeUpper = window.confirm("Do you want uppercase letters?");
  let includeNumbers = window.confirm("Do you want numbers?");
  let includeCharacters = window.confirm("Do you want special characters?");
  console.log(includeLower);
  console.log(includeUpper);
  console.log(includeNumbers);
  console.log(includeCharacters);

  return passwordLength;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
