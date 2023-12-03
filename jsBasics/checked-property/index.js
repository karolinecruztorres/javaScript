const checkbox = document.getElementById("check");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const radio3 = document.getElementById("radio3");
const submitBtn = document.getElementById("submitBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

submitBtn.onclick = function() {
  if (checkbox.checked) {
    subResult.textContent = `You are subscribed!`;
  } else {
    subResult.textContent = `You are NOT subscribed!`;
  }

  if (radio1.checked) {
    paymentResult.textContent = `You are paying with Visa`;
  } else if (radio2.checked) {
    paymentResult.textContent = `You are paying with Mastercard`;
  } else if(radio3.checked) {
    paymentResult.textContent = `You are paying with Paypal`;
  } else {
    paymentResult.textContent = `You must select a payment type!`;
  }
}