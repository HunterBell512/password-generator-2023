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
  let passwordLength = window.prompt("Enter a character length (8-128)");   // get password length
  let characterList = '';                                                   // list of characters to choose
  let passwordExpression = "";                                              // variable to store password

  // catch invalid password lengths
  while (passwordLength < 8 || passwordLength > 128) {
    if (passwordLength < 8) {
      window.alert("Chosen password length is too short!");
    } else {
      window.alert("Chosen password length is too long!");
    }
    passwordLength = window.prompt("Enter a character length (8-128)");
  }

  // get character selections
  let includeLower = window.confirm("Do you want lowercase letters?");
  let includeUpper = window.confirm("Do you want uppercase letters?");
  let includeNumbers = window.confirm("Do you want numbers?");
  let includeCharacters = window.confirm("Do you want special characters?");

  // Build character list
  characterList = buildCharList(includeLower, includeUpper, includeNumbers, includeCharacters);

  // generate password using selected character types
  for (let i = 0; i < passwordLength; i++) {
    passwordExpression = passwordExpression + characterList[getRandomInt(characterList.length)];
  }

  return passwordExpression;
}

// Function to build character list for password generation
function buildCharList (lower, upper, numbers, chars) {
  let expression = "";
  let letters = "abcdefghijklmnopqrstuvwxyz";

  // If lower is selected
  if (lower) {
    expression = expression + letters;
  }

  // If upper is selected
  if (upper) {
    expression = expression + letters.toLocaleUpperCase();
  }

  // If numbers is selected
  if (numbers) {
    expression = expression + "0123456789";
  }

  // If chars is selected
  if (chars) {
    expression = expression + "~`!@#$%^&*()-_+={}[]|\;:\"<>,./?";
  }

  return expression;
}

// Function to get a random integer in a specified range
function getRandomInt (max) {
  return Math.floor(Math.random() * max);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
