import { calculate } from "../js/calculator.js";

describe("calculate", () => {
  it("calculates compound interest and rounds to two decimals", () => {
    expect(calculate(1000, 5, 2)).toBe(1102.5);
  });

  it("returns the principal when the rate is zero", () => {
    expect(calculate(1250, 0, 8)).toBe(1250);
  });

  it("returns the principal when the duration is zero", () => {
    expect(calculate(1250, 5, 0)).toBe(1250);
  });

  it("returns null for empty, non-numeric, or negative values", () => {
    expect(calculate("", 5, 2)).toBeNull();
    expect(calculate(100, "not a rate", 2)).toBeNull();
    expect(calculate(100, 5, -1)).toBeNull();
    expect(calculate(NaN, 5, 2)).toBeNull();
  });
});