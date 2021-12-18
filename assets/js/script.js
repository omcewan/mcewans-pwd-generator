// Assignment code here
// Upon button click, series of prompts should appear asking user for password criteria.

// What are the Prompts?


// set a default length for password
var passwordLength = 8;

// function for choosing the length of the password
var critieriaForLenght = function(){
  // ask the user to choose a length for their password
  var userChosenLength = window.prompt('Choose a length for your password', 8);
  // check to see if the choosen number is within the parameter range
  if (userChosenLength >= 8 && userChosenLength <= 128){
    // ask the user to confirm the length chosen.
    var userConfirmedLength = window.confirm('Are you sure this is the lenght you want for your password?');
  }
  else {
    var userChosenLength = window.prompt('Choose a length for your password', 8);
  }
  // if length chosen is confirmed assign to passwordLength else run function over.
  if (userConfirmedLength){
    passwordLength = userChosenLength;
  }
  else{
    critieriaForLenght();
  }
}

// Choose characters to include so will need a prompt for numbers, letters, special char, uppercase and/or lowercase.
var typeOfCharacters = function(){
  // prompt to ask if to include numbers
  window.prompt('Would you like to include numbers?');

  //  prompt to ask if to include lowercase letters
  window.prompt('Would you like to include lowercase letter?');
  
  // prompt to ask if to inculde upper case letters
  window.prompt('Would you like to include uppercase letters');

  // prompt to ask if to include special characters
  window.prompt('Would you like to include special characters');

}

// choices need to be validated for each prompt

// password is then generated after prompts are confirmed.

// password is then displayed in an alert or in the text box.



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
