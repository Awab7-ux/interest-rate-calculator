export function calculate(principal, rate, years) {
  const values = [principal, rate, years];

  if (values.some((value) => value == null || String(value).trim() === "")) {
    return null;
  }

  const [amount, annualRate, duration] = values.map(Number);

  if (
    !Number.isFinite(amount) ||
    !Number.isFinite(annualRate) ||
    !Number.isFinite(duration) ||
    amount < 0 ||
    annualRate < 0 ||
    duration < 0
  ) {
    return null;
  }

  const total = amount * Math.pow(1 + annualRate / 100, duration);
  return Number.isFinite(total) ? Math.round(total * 100) / 100 : null;
}