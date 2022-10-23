var generateBtn = document.querySelector("#generate");
var box = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {


  //list of variables and arrays for password options. 
  var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numbers = ["1","2","3","4","5","6","7","8","9","0"];
  var symbols = ["~","!","#","$","%","^","&","*"];
  var pwd = [];
  var finalChar = [];
  

  //asks user to pick number of characters for password. if user chooses below or over the required number of characters, user will be asked to try again.
  var passwordLength = parseInt(window.prompt ("Choose between 8-128 characters"));

  if (passwordLength < 8 || passwordLength > 128) {
  alert("Answer does not meet requirements. Please try again.");
  return generatePassword()
  }

  //user will be prompted to choose from criteria in order to determine the generated password. 
  var useLowercase = window.confirm("Would you like to include lowercase letters? Press 'OK' to confirm.");
  var useUppercase = window.confirm("Would you like to include uppercase letters? Press 'OK' to confirm.");
  var useNumbers = window.confirm("Would you like to include numbers? Press 'OK' to confirm.");
  var useSymbols = window.confirm("Would you like to include symbols? Press 'OK' to confirm.");
  


  //if user does not pick atleast one option from criteria the user will be prompted to go through the process again and choose atleast one option.
  if(!useLowercase && !useUppercase && !useNumbers && !useSymbols)
  {
    alert("Please select atleast one option. Try Again.");
    generatePassword();
  }


  //determines if lower case letters will be used. atleast one lower case character will be used in password. 
  if (useLowercase){
    box = box.concat(lowercase);
    finalChar.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
    console.log(box);
  }
  
  //determines if upper case letters will be used. atleast one upper case character will be used in password. 
  if (useUppercase){
    box = box.concat(uppercase);
    finalChar.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
    console.log(box);
  }
  
  //determines if numbers letters will be used. atleast one number will be used in password. 
  if (useNumbers){
    box = box.concat(numbers);
    finalChar.push(numbers[Math.floor(Math.random() * numbers.length)]);
    console.log(box);
  }
  
  //determines if symbols/specialcharacters letters will be used. atleast one symbol will be used in password. 
  if (useSymbols){
    box = box.concat(symbols);
    finalChar.push(symbols[Math.floor(Math.random() * symbols.length)]);
    console.log(finalChar);
  }


  //allows characters to be selected randomly within the confines of password length to determine a generated password. 
  for(var i=0; i<passwordLength;i++)
  {
    var index = Math.floor(Math.random() * box.length);
    pwd.push(box[index]);
    console.log(pwd);
  }

  for(var j=0; j<finalChar.length;j++)
  {
    pwd[j] = finalChar[j];
  }

  return pwd.join("");


}


//event listener waits for user to 'click' the generated button to initiate process.
generateBtn.addEventListener("click", writePassword);