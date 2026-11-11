import { calculate } from "./calculator.js";

const form = document.getElementById("calculator-form");
const result = document.getElementById("result");
const resultValue = result.querySelector(".result-value");
const currency = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const total = calculate(
    document.getElementById("principal").value,
    document.getElementById("rate").value,
    document.getElementById("years").value,
  );

  result.classList.toggle("is-error", total === null);
  resultValue.textContent = total === null
    ? "Enter a valid, non-negative value in every field."
    : currency.format(total);
});