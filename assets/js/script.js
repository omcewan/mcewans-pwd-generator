// Assignment code here

// Generator functions
// To get random lowercase letter
var getRandomLower = function(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// To get random uppercase letter
var getRandomUpper = function(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// To get random number
var getRandomNumber = function(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// to get random symbol
var getRandomSymbol = function(){
  var symbol = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  return symbol[Math.floor(Math.random() * symbol.length)]
}

var randomCharacterSelect = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}


// secure password will be stored in here
var yourSecurePassword = "";
// set a default length for password
var passwordLength = 8;



// function for choosing the length of the password
var critieriaForLenght = function(){
  // ask the user to choose a length for their password
  var userChosenLength = window.prompt('Choose a length for your password. Must be at least 8 characters, no longer than 128.', 8);
  // check to see if the choosen number is within the parameter range
  if (userChosenLength >= 8 && userChosenLength <= 128){
    // ask the user to confirm the length chosen.
    var userConfirmedLength = window.confirm('Are you sure this is the lenght you want for your password?');
  }
  else {
    var userChosenLength = window.prompt('Choose a length for your password. Must be at least 8 characters, no longer than 128.', 8);
  }
  // if length chosen is confirmed assign to passwordLength else run function over.
  if (userConfirmedLength){
    passwordLength = userChosenLength;
  }
  else{
    critieriaForLenght();
  }
}

// Choose characters to include so will need a prompt for numbers.
var choiceOfNumbers = window.confirm('Would you like to include numbers?');
if (choiceOfNumbers){
  choiceOfNumbers = true;
}
else{
  choiceOfNumbers = false;
}
console.log(choiceOfNumbers)

// //  prompt to ask if to include lowercase letters
var choiceOfLowercase = window.confirm('Would you like to include lowercase letters?');
if (choiceOfLowercase){
  choiceOfNumbers = true;
}
else{
  choiceOfLowercase = false;
}

// // prompt to ask if to inculde upper case letters
var choiceOfUppercase = window.confirm('Would you like to include Uppercase letters?');
if (choiceOfUppercase){
  choiceOfNumbers = true;
}
else{
  choiceOfUppercase = false;
}

// // prompt to ask if to include special characters
var choiceOfSpecial = window.confirm('Would you like to include Special letters?');
if (choiceOfSpecial){
  choiceOfNumbers = true;
}
else{
  choiceOfSpecial = false;
}




// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
  //   var password = generatePassword();
  //   var passwordText = document.querySelector("#password");
  
  //   passwordText.value = password;
  
  // }
  
  // Add event listener to generate button
  // generateBtn.addEventListener("click", writePassword);
  
  // My Pseudo Code
  // choices need to be validated for each prompt
  
  // password is then generated after prompts are confirmed.
  
  // password is then displayed in an alert or in the text box.