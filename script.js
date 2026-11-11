function calculate() {
  const principalEl = document.getElementById("principal");
  const rateEl = document.getElementById("rate");
  const yearsEl = document.getElementById("years");
  const resultEl = document.getElementById("result");

  if (!principalEl || !rateEl || !yearsEl || !resultEl) {
    return;
  }

  const principal = parseFloat(principalEl.value);
  const rate = parseFloat(rateEl.value);
  const years = parseInt(yearsEl.value, 10);

  if (isNaN(principal) || isNaN(rate) || isNaN(years) || principal < 0 || rate < 0 || years < 0) {
    resultEl.textContent = "Please enter valid positive numbers.";
    return null;
  }

  const total = principal * Math.pow(1 + rate / 100, years);
  resultEl.textContent = "Total: " + total.toFixed(2);
  return Number(total.toFixed(2));
}

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("calculate");
  if (button) {
    button.addEventListener("click", calculate);
  }
});
