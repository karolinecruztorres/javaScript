const passwordDiv = document.getElementById("password"); 
const rangeInput = document.getElementById("range-input"); 

const existingP = document.getElementById("random-password");
if (existingP) {
  existingP.remove();
}

const p = document.createElement("p");
p.textContent = "password here";
p.id = "random-password";
passwordDiv.appendChild(p);

rangeInput.onchange = function(event) {
  const passwordSize = event.target.value;
  p.textContent = "";
  
  for (let i = 0; i < passwordSize; i++) {
    const min = 0;
    const max = 9;
    const randomPassword = Math.floor(Math.random() * (max - min + 1) + min);
    p.textContent += randomPassword;
  }
}