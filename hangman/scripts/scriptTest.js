let word = "apricot";
const wordArray = word.split("");
let result = [];
let keys = document.getElementsByClassName(".keys");

function guessLetter(event){
  if (event.key.match(/[a-zA-Z]/)) {
    let letter = event.key; 

    for (i = 0; i < wordArray.length; i++){
      if (letter !== wordArray[i]){
        result.push("_");
      } else {
        result.push(letter);
      }
      }  
    }
  console.log(result);
}

document.addEventListener("keydown", guessLetter);