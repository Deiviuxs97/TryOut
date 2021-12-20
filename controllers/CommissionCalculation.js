const arrayOfrules = require("../services/rulesList");

const CommissionCalculation = (req, res) => {
    if(req.body.currency !== "EUR"){
        let exchangeRateForCurrency = req.body.exchangeRate.rates[req.body.currency];
        req.body.amount = req.body.amount * exchangeRateForCurrency;
    }

    let commission;

    arrayOfrules.forEach(rule => {
        let ruleResponse = rule(req.body);
        if(!isNaN(ruleResponse)) {
            console.log(ruleResponse, "ruleResponse");
            commission = ruleResponse || commission;
        }
    });

    console.log(commission, "commission");
    res.json(commission);
}

module.exports = CommissionCalculation;