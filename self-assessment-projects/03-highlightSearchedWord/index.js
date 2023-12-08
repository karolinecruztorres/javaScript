const input = document.getElementById("word-search");
const submitBtn = document.getElementById("submit-btn");
const p = document.querySelector("p");
const text = document.getElementById("text");

submitBtn.onclick = function() {
  const textWords = text.innerHTML.split(" ");
  
  textWords.map((word) => {
    if (input.value === word) {
      p.innerHTML += `<span>${word}</span>`;
    }
  });
}
