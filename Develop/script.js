//WHen the generate password button is clicked a prompt should appear with the password criteria
//The length of the password must be a min. of 8 chars and max. of 128 chars
//Criteria options should be uppercase, lowercase, numbers, and special chars
//When user chooses a criteria it should be checked
//for password to generate an alert for at least one criteria should be checked should appear
//checked options will then be used to generate the password in an empty string
//Password generated should pop up in a window or appear in the HTML element
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var spChars = ["~","@","!","#","$","%","^","&","*","(",")","_","=","+","{", "}", "[", "]", ";", ".", "<", ">", "?"]











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
