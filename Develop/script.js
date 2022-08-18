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

  //Password length prompt
  var passwordLengthChoice = window.prompt("Choose a password length between 8 and 128.")

  //Making sure user picks between 8 and 128
  if (passwordLengthChoice < 8 || passwordLengthChoice > 128) {
    return;
  } else {
    //Mega Array starts empty
    var megaArray = []

    //Confirm lowercase
    var confirmLower = confirm("Include lower case letters?")
    if (confirmLower) {
      console.log(lowerCase, megaArray)
      megaArray = megaArray.concat(lowerCase)
    }
    console.log(megaArray)

    //Confirm Upper
    var confirmUpper = confirm("Include upper case letters?")
    if (confirmUpper) {
      megaArray = megaArray.concat(upperCase)
    }
    console.log(megaArray)

    //Confirm Numbers
    var confirmNum = confirm("Include numbers?")
    if (confirmNum) {
      megaArray = megaArray.concat(numbers)
    }
    console.log(megaArray)

    //Confirm Special
    var confirmSpecial = confirm("Include special characters?")
    if (confirmSpecial) {
      megaArray = megaArray.concat(special)
    }
    console.log(megaArray)

    //Password starts empty
    password = []

    //TODO: turn array into string 
    // ? use .toString????? but then there are commas??
    //I have an array based on the options
    //turn array into a string
    //display the string on the page
    //change the html of a page

    //make sure the user choses between 8 and 128

    //Password's length increases until the password length reaches the length chosen
    for (i = 0; i < passwordLengthChoice; i++) {
      var randomMegaArraySelection = megaArray[Math.floor(Math.random() * megaArray.length)] //pick random point in the megaArray
      password.push(randomMegaArraySelection)
    }   //pushes selection to password 

    console.log(password)
    //have array
    //need to make it a string
    //display it on the page - how to chnage text in html 

  }


}