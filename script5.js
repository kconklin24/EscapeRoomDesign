function saveAndDisplay() {
   var password = document.getElementById("passwordBox");

   var passwordText = password.value.toUpperCase();
   if(passwordText == "2534") {
    return true;
   }
   alert("That is incorrect, try again!");
   return false;
   }