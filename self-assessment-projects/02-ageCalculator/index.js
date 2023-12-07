const errorDiv = document.getElementById("error-div");
const input = document.getElementById("input-date");
const submitBtn = document.getElementById("submit-btn");
const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const p = document.createElement("p");

const year = new Date().getFullYear();
const mounth = new Date().getMonth() + 1;
const day = new Date().getDate();
const today = Date.now();
const formattedDate = new Date(today).toLocaleDateString().split("/").reverse();

const existingP = document.getElementById("error");
if(existingP) {
  existingP.remove();
}

submitBtn.onclick = function() {
  const birthday = input.value.split("-");
  p.innerText = "";
  
  if (birthday > formattedDate) {
    p.innerText = "Choose a past date or today's date.";
    p.id = "error";
    errorDiv.appendChild(p);
  } 
  
  for (let i = 0; i < birthday.length; i++) {
    
    if (birthday <= formattedDate) {
      years.innerText = formattedDate[0] - birthday[0]; 
      
      if (birthday[1] >= formattedDate[1]) {
        months.innerText = birthday[1] - formattedDate[1]; 
      } else if (birthday[1] < formattedDate[1]) {
        months.innerText = formattedDate[1] - birthday[1]; 
      }
  
      if (birthday[2] >= formattedDate[2]) {
        days.innerText = birthday[2] - formattedDate[2]; 
      } else if (birthday[2] < formattedDate[2]) {
        days.innerText = formattedDate[2] - birthday[2]; 
      }
    } 
  }  
}