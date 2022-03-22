function saveAndDisplay() {
   var password = document.getElementById("passwordBox");

   var passwordText = password.value.toUpperCase();
   if(passwordText == "WTARAL") {
    return true;
   }
   alert("That is incorrect, try again!");
   return false;
   }