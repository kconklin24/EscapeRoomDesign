function dragStart(event) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("Text", event.target.getAttribute("id"));
}


function dragOver(event) {
    event.preventDefault();
    event.stopPropagation();
}


function drop(event) {
    event.stopPropagation();
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));

      
}


function saveAndDisplay() {
    var result = document.getElementById('demo');
    var list = document.getElementById('dropBox');
    while (list.children.length > 0) {
        result.appendChild(list.children[0]);
    } 
}



function checkAnswer() {
   var password = document.getElementById("demo").innerText;
  let key = "MACBETH";
  
   if(password == key) {
     alert("That is correct!");
     return true;
   }
   else{
     alert("That is incorrect, try again!");
     return false;
   }
   }