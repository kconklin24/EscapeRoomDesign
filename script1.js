function colorAnswer() {
   var password = document.getElementById("passwordBox2");
 
   var passwordText = password.value.toUpperCase();
   if(passwordText == "52314") {
    return true;
   }
   alert("Sorry, try again!");
   return false;
   }