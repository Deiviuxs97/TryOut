const { test, expect } = require("@jest/globals");
const highTurnover = require("../services/highTurnover");

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


test("return client turnover above 1000eur", () => {
    expect(highTurnover(firstClient)).toBe(0.03);
});

test("return client not reached 1000 €", () => {
    expect(highTurnover(secondClient)).toEqual("Client not reached 1000 €");
});