//WHen the generate password button is clicked a prompt should appear with the password criteria
//The length of the password must be a min. of 8 chars and max. of 128 chars
//Criteria options should be uppercase, lowercase, numbers, and special chars
//When user chooses a criteria it should be checked
//for password to generate an alert for at least one criteria should be checked should appear
//checked options will then be used to generate the password in an empty string
//Password generated should pop up in a window or appear in the HTML element
var chars = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  special: "!@#$%^&*()-_=+<>?/~:;."
}



 let Pchars = [
  function uppercase() {
    return chars.uppercase[Math.floor(Math.random * chars.uppercase.length)];
  },
  function lowercase() {
    return chars.lowercase[Math.floor(Math.random * chars.lowercase.length)];
  },
  function numbers() {
    return chars.numbers[Math.floor(Math.random * chars.numbers.length)];
  },
  function special() {
    return chars.numbers[Math.floor(Math.random * chars.special.length)];
  }
 ]













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
