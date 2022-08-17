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

//My Code

//Variables for options
var numbers = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!@#$%^&*(){}[]=<>/,."

//Create a way to randomly choose one letter/number/character
var randomNumIndex = function () {
  Math.floor(Math.random()) * numbers.length;
}

var randomLowerIndex = function() {
  Math.floor(Math.random() * lowerCase.length)
}

var randomUpperIndex = function() {
  Math.floor(Math.random() * upperCase.length)
}

var randomSpecialIndex = function() {
  Math.floor(Math.random() * special.length)
}

//Choose random letter/number/character
var randomNum = numbers[randomNumIndex];
var randomUpper = upperCase[randomUpperIndex];
var randomLower = lowerCase[randomLowerIndex];
var randomSpecial = special[randomSpecialIndex];


function generatePassword() {

  //Password length prompt
  var passwordLengthChoice = function() {
    window.prompt("Choose a password length between 8 and 128.")
  }
  passwordLengthChoice();
  
  //Confirm lowercase
  var confirmLower = function() {
    window.confirm("Include lower case letters?")
  }
  confirmLower();
  
  //Confirm Upper
  var confirmUpper = function() {
    window.confirm("Include upper case letters?")
  }
  confirmUpper();

  //Confirm Numbers
  var confirmNum = function() {
    window.confirm("Include numbers?")
  }
  confirmNum();

  //Confirm Special
  var confirmSpecial = function () {
    window.confirm("Include special characters?")
  }
  confirmSpecial();

  //Now we have the prompt's answers.
  //Need to create password based on the options.

  //Password starts empty
  password = ''
  
//Password's length increases until the password length reaches the length chosen
for (password.length = 0; password.length = passwordLengthChoice; password.length++) {
  if (!confirmLower && !confirmNum && !confirmSpecial && !confirmUpper) {
    return;
  } else if (confirmLower && !confirmNum && !confirmSpecial && !confirmUpper) {
    password = //each index of password will be a new randomly chosen from lowercase...

    //16 possible types of character to enter into each index spot for password ...
    //how to shorten this ...
}
}



