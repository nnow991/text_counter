function myCounter(){
let getText= document.getElementById("input");
let textLength= (getText.value.length);
document.getElementById("output").innerHTML="You typed " +
textLength + " characters";
}
