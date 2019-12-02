function myCounter(){
let getText= document.getElementById("textarea");
let textLength= (getText.value.length + 1);
document.getElementById("output").innerHTML="You typed " +
textLength + " characters";
}
