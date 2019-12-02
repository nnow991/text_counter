function myCounter(){
let getText= document.getElementById("textarea");
let textLength= (getText.value.length);
document.getElementById("output").innerHTML="You typed " +
textLength + " characters";
}
