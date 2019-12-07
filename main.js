

function myCounter(){
    let getText= document.getElementById("textarea");
let textLength= (getText.value.length + 1);
    let words = document.getElementById("textarea").value;

    words=words.match( /\w+/g);
    words= words.length

    document.getElementById("showwords").innerHTML= "You typed " +
    textLength + " characters" + "</br>" + " and " + words + " words" ;

}