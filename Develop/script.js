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
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '=', '<', '>', '/', '.', '"'];

//Function to begin prompts and generate the password on click
function generatePassword() {

  //Create a way to randomly choose one letter/number/character
  var randomNumIndex = function () {
    return Math.floor((Math.random()) * numbers.length);
  }

  var randomLowerIndex = function () {
    return Math.floor((Math.random() * lowerCase.length))
  }

  var randomUpperIndex = function () {
    return Math.floor(Math.random() * upperCase.length)
  }

  var randomSpecialIndex = function () {
    return Math.floor(Math.random() * special.length)
  }
  
  //Choose random letter/number/character
  var randomNum = numbers[randomNumIndex()];
  var randomUpper = upperCase[randomUpperIndex()];
  var randomLower = lowerCase[randomLowerIndex()];
  var randomSpecial = special[randomSpecialIndex()];

  //Password length prompt
  var passwordLengthChoice = window.prompt("Choose a password length between 8 and 128.")

  //TO DO: Create if statements and push to global arrays 
  
  //2. create if statement for each - if true - push array to megaArray
  //3. console.log to check each is pushed to array depending on choices

  //mega empty array
  var megaArray = []

  //Confirm lowercase
  var confirmLower = confirm("Include lower case letters?")
  if (confirmLower) {
      megaArray.push(lowerCase)
  }
  console.log(megaArray)

  //Confirm Upper
  var confirmUpper = confirm("Include upper case letters?")
  if (confirmUpper) {
    megaArray.push(upperCase)
  }
console.log(megaArray)

  //Confirm Numbers
  var confirmNum = confirm("Include numbers?")
  if (confirmNum) {
    megaArray.push(numbers)
  }
  console.log(megaArray)
  
  //Confirm Special
  var confirmSpecial = confirm("Include special characters?")
  if (confirmSpecial) {
    megaArray.push[special]
  }
  console.log(megaArray)

  //Password starts empty
  password = [] //string or array depending, join with .join

  //Password's length increases until the password length reaches the length chosen
  for (i= 0; i < passwordLengthChoice; i++) //standard for loop {
    megaArray //take a random index and push into password
    .push //into password

  }