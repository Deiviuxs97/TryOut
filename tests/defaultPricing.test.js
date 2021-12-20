const { test, expect } = require("@jest/globals");
const defaultPricing = require("../services/defaultPricing");

const firstClient = {
    "date": "2021-01-01",
    "amount": "100.00",
    "currency": "EUR",
    "client_id": 42
  }

const secondClient = {
    "date": "2021-01-01",
    "amount": "3156.40",
    "currency": "USD",
    "client_id": 1
  }


test("return default pricing", () => {
    expect(defaultPricing(firstClient)).toBe(0.5);
});

test("return default pricing 0.5%", () => {
    expect(defaultPricing(secondClient)).toBe(15.78);
});