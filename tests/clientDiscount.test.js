const { test, expect } = require("@jest/globals");
const clientDiscount = require("../services/clientDiscount");

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


test("return client discount", () => {
    expect(clientDiscount(firstClient)).toBe(0.05);
});

test("return client don't have a discount discount ", () => {
    expect(clientDiscount(secondClient)).toEqual("Client don't have discount");
});