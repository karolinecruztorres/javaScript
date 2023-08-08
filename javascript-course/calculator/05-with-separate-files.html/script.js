let calculation = localStorage.getItem('calculation') || '';

calculatorDisplay();

function updateCalculation(value) {
  calculation += value;
  calculatorDisplay(calculation);
  saveCalculation();
}

function saveCalculation() {
  localStorage.setItem('calculation', calculation);
}

function calculatorDisplay() {
  document.querySelector('.js-calculator-display').innerHTML = calculation; 
}