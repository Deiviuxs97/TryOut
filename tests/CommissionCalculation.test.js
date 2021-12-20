const { test, expect } = require("@jest/globals");
const CommissionCalculation = require("../controllers/CommissionCalculation");
const requestExchangeRates = require("../services/requestExchangeRates");

const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", CommissionCalculation);

const firstClient = {
    "date": "2021-01-01",
    "amount": "100.00",
    "currency": "EUR",
    "client_id": 42
  };

const secondClient = {
    "date": "2021-01-01",
    "amount": "3156.40",
    "currency": "USD",
    "client_id": 1
  };

const mockRequest = () => {
    const req = {};
    req.body = jest.fn().mockReturnValue(req);
    req.params = jest.fn().mockReturnValue(req);
    return req;
  };

const mockResponse = () => {
    const res = {}
    res.send = jest.fn().mockReturnValue(res)
    res.status = jest.fn().mockReturnValue(res)
    res.json = jest.fn().mockReturnValue(res)
    return res
  };

// const mockNext = () => jest.fn()

const rates =  {
    motd: {
      msg: 'If you or your company use this project or like what we doing, please consider backing us so we can continue maintaining and evolving this project.',
      url: 'https://exchangerate.host/#/donate'
    },
    success: true,
    historical: true,
    base: 'EUR',
    date: '2021-01-01',
    rates: {
        USD: 1.217582,
    }}

// test("return commission", async (done) => {
//     let req = mockRequest();
//     const res = mockResponse();
//     // const next = mockNext();
    
//     req.body = {...firstClient};

//     // let rates = await requestExchangeRates(req, res, next);

//     // console.log(rates, "rates");

//     req.body.exchangeRate = rates;
//     request(app)
//     .get("/")
//     .expect("Content-Type", /json/)
//     .expect({ name: "frodo" })
//     .expect(200, done);
//     // await CommissionCalculation(req, res);
//     // console.log(res, "Res");
//     // console.log(req, "req");
//     // expect(response).toBe(0.03);    
// });

test("no test", () => {
    expect(0.03).toBe(0.03); 
});