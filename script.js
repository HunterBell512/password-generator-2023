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
  window.alert("Hello world!");
  return 0;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
