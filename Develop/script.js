//WHen the generate password button is clicked a prompt should appear with the password criteria
//The length of the password must be a min. of 8 chars and max. of 128 chars
//Criteria options should be uppercase, lowercase, numbers, and special chars
//When user chooses a criteria it should be checked
//for password to generate an alert for at least one criteria should be checked should appear
//checked options will then be used to generate the password in an empty string
//Password generated should pop up in a window or appear in the HTML element
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var spChars = [
  "~",
  "@",
  "!",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "=",
  "+",
  "{",
  "}",
  "[",
  "]",
  ";",
  ".",
  "<",
  ">",
  "?",
];
//made undefined variables to put into the function in define them there. the passLength was an empty string to be filled by the user.
var passLength = "";
var passSpecial;
var passNum;
var passUpper;
var passLower;
//created what the generatePassword function will do with window prompts to get the criteria for the user for their custom password.
function generatePassword() {
  var passLength = prompt("How long of a password do you require?");
  while (passLength < 8 || passLength > 128) {
    alert("Password must be between 8-128 characters");
    var passLength = prompt("How long of a password do you require?");
  }
  var passUpper = confirm(
    "Confirm if you would want to include uppercase characters in your password"
  );
  var passLower = confirm(
    "Confirm if you would want to include lowercase characters in your password"
  );
  var passNum = confirm(
    "Confirm if you would want to include numbers in your password"
  );
  var passSpecial = confirm(
    "Confirm if you would want to include special characters in your password (i.e. *&^)"
  );
  //This was created to work if the user chose no criteria and would re-ask the questions again.
  while (
    passUpper === false &&
    passLower === false &&
    passNum === false &&
    passSpecial === false
  ) {
    alert("You must choose at least one criteria");
    var passUpper = confirm(
      "Confirm if you would want to include uppercase characters in your password"
    );
    var passLower = confirm(
      "Confirm if you would want to include lowercase characters in your password"
    );
    var passNum = confirm(
      "Confirm if you would want to include numbers in your password"
    );
    var passSpecial = confirm(
      "Confirm if you would want to include special characters in your password (i.e. *&^)"
    );
  }
//created a var that would combine each criteria to fit into the criteria.
  var enchilida = [];
  if (passUpper) {
    enchilida = enchilida.concat(upperCase);
  }
  if (passLower) {
    enchilida = enchilida.concat(lowerCase);
  }
  if (passNum) {
    enchilida = enchilida.concat(numbers);
  }
  if (passSpecial) {
    enchilida = enchilida.concat(spChars);
  }
  console.log(enchilida);
//Math.random was used here to create using a var with an empty string to be filled with the random generated characters.
  var passGen = "";
  for (var i = 0; i < passLength; i++) {
    passGen = passGen + enchilida[Math.floor(Math.random() * enchilida.length)];
  }
  return passGen;
}

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
