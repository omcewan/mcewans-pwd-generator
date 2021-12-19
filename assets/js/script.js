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

// set a default length for password
var passwordLength = 8;
// will set to the choice of  having lower case in the password
var chooseLowerCase
// will set to the choice of having upper case in the password
var chooseUpperCase
// will set to the choice of having numbers in the password
var chooseNumber
// will set to the choice of having symbols in the password
var chooseSymbol

// function for choosing the length of the password
var criteriaForLenght = function(){
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
    criteriaForLenght();
  }
}

// check if the user wants to have lower case letter
var criteriaForLowerCase = function(){
  // ask the user if they would like to have lower case letters
  var userLowerCaseChoice = window.confirm('Would you like lower case letters in your password?');
  if (userLowerCaseChoice){
    // will be set to true
    chooseLowerCase = userLowerCaseChoice;
  }
  else {
    chooseLowerCase = false;
  }
}

// check if the user wants to have upper case letter
var criteriaForUpperCase = function(){
  // ask the user if they would like to have lower case letters
  var userUpperCaseChoice = window.confirm('Would you like upper case letters in your password?');
  if (userUpperCaseChoice){
    // will be set to true
    chooseUpperCase = userUpperCaseChoice;
  }
  else {
    chooseUpperCase = false;
  }
}

// check if the user wants to have number case letter
var criteriaForNumber = function(){
  // ask the user if they would like to have lower case letters
  var userNumberChoice = window.confirm('Would you like numbers in your password?');
  if (userNumberChoice){
    // will be set to true
    chooseNumber = userNumberChoice;
  }
  else {
    chooseNumber = false;
  }
}

// check if the user wants to have lower case letter
var criteriaForSymbol = function(){
  // ask the user if they would like to have lower case letters
  var userSymbolChoice = window.confirm('Would you like symbols in your password?');
  if (userSymbolChoice){
    // will be set to true
    chooseSymbol = userSymbolChoice;
  }
  else {
    chooseSymbol = false;
  }
}

criteriaForLowerCase();
criteriaForUpperCase();
criteriaForNumber();
criteriaForSymbol();

console.log(chooseLowerCase);
console.log(chooseUpperCase);
console.log(chooseNumber);
console.log(chooseSymbol);


// secure password will be stored in here
var yourSecurePassword = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);