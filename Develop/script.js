// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//My code below

/* GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
 */



//Functions to create random selections
function lower() {
  return String.fromCharCode((Math.floor(Math.Random () * 26) + 97))
}

function upper() {
  return String.fromCharCode((Math.floor(Math.Random() * 26) + 65));
}

function num() {
  return String.fromCharCode((Math.floor(Math.Random() * 10) + 48));
}

function special() {
  var special = '!@#$%^&*(){}[]=<>/,.';
  return special[Math.floor(Math.random() * special.length)];
}

/* //When button clicked
if (generateBtn.addEventListener("click", writePassword)) {
  window.confirm("Generate a password");
}

//Prompting
var lengthChoice = window.prompt("Choose a password length between 8 and 128.")

if (lengthChoice >= 8 && lengthChoice <= 128) {
 
  window.confirm("Do you want to include lower case letters?")
  window.confirm("Do you want to include upper case letters?")
  window.confirm("Do you want to include numbers?")
  window.confirm("Do you want to include special characters?")
 
} else {
  lengthChoice; // prompts to choose password length again
} */