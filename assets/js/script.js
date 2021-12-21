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

// objects containing the functions needed for chooseing the characters of the password
var randomCharacterSelect = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

// Criteria Functions. What user desire in the password.
// set a default length for password. This will change based on user selection.
var passwordLength

// function for choosing the length of the password
var criteriaForLength = function(){
  // ask the user to choose a length for their password
  var userChosenLength = window.prompt('Choose a length for your password. Must be at least 8 characters, no longer than 128.', );
  // check to see if the choosen number is within the parameter range
  if (userChosenLength >= 8 && userChosenLength <= 128){
    // ask the user to confirm the length chosen.
    var userConfirmedLength = window.confirm('Are you sure this is the length you want for your password?');
  }
  else {
    var userChosenLength = window.prompt('Not a valid choice. Must be at least 8 characters, no longer than 128.', );
  }
  // if length chosen is confirmed assign to passwordLength else run function over.
  if (userChosenLength){
    passwordLength = +userChosenLength;
  }
  else{
    criteriaForLength();
  }
  return +passwordLength;
}

// will set to the choice of  having lower case in the password
var chooseLowerCase
// check if the user wants to have lower case letter
var criteriaForLowerCase = function(){
  // ask the user if they would like to have lower case letters
  var userLowerCaseChoice = window.confirm('Would you like lower case letters in your password?');
  if (userLowerCaseChoice){
    // will be set to true
    chooseLowerCase = true;
  }
  else {
    chooseLowerCase = false;
  }
  return chooseLowerCase;
}

// will set to the choice of having upper case in the password
var chooseUpperCase
// check if the user wants to have upper case letter
var criteriaForUpperCase = function(){
  // ask the user if they would like to have lower case letters
  var userUpperCaseChoice = window.confirm('Would you like upper case letters in your password?');
  if (userUpperCaseChoice){
    // will be set to true
    chooseUpperCase = true;
  }
  else {
    chooseUpperCase = false;
  }
  return chooseUpperCase;
}

// will set to the choice of having numbers in the password
var chooseNumber
// check if the user wants to have number case letter
var criteriaForNumber = function(){
  // ask the user if they would like to have lower case letters
  var userNumberChoice = window.confirm('Would you like numbers in your password?');
  if (userNumberChoice){
    // will be set to true
    chooseNumber = true;
  }
  else {
    chooseNumber = false;
  }
  return chooseNumber;
}

// will set to the choice of having symbols in the password
var chooseSymbol
// check if the user wants to have lower case letter
var criteriaForSymbol = function(){
  // ask the user if they would like to have lower case letters
  var userSymbolChoice = window.confirm('Would you like symbols in your password?');
  if (userSymbolChoice){
    // will be set to true
    chooseSymbol = true;
  }
  else {
    chooseSymbol = false;
  }
  return chooseSymbol;
}


// generate password function
var generatedPassword = function(){
  var generatePassword = "";
  // if (chooseLowerCase && chooseUpperCase && chooseNumber && chooseSymbol){
  //   for (let i = 0; i <= passwordLength-1; i++){
  //     generatePassword += 
  //   }
  for (let i = 0; i <= +passwordLength; i++){
    if (chooseLowerCase){
      generatePassword += randomCharacterSelect.lower();
      i++;
    }
    if (chooseUpperCase){
      generatePassword += randomCharacterSelect.upper();
      i++
    }if (chooseNumber){
      generatePassword += randomCharacterSelect.number();
      i++
    }
    if (chooseSymbol){
      generatePassword += randomCharacterSelect.symbol();
    }
    if (!chooseLowerCase && !chooseUpperCase && !chooseNumber && !chooseSymbol){
      window.alert("Please choose a selection of characters for your password");
      writePassword();
    }
  }
  
  console.log(generatePassword = generatePassword.slice(0, passwordLength));
  console.log(generatePassword);
  return generatePassword;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  criteriaForLength();
  console.log(passwordLength);
  criteriaForLowerCase();
  console.log(chooseLowerCase);
  criteriaForUpperCase();
  console.log(chooseUpperCase);
  criteriaForNumber()
  console.log(chooseNumber);
  criteriaForSymbol()
  console.log(chooseSymbol);

  var password = generatedPassword()
  console.log(password);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);