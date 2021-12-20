const arrayOfrules = require("../services/rulesList");

const CommissionCalculation = (req, res) => {
    console.log(req, "req");
    if(req.body.currency !== "EUR"){
        let exchangeRateForCurrency = req.body.exchangeRate.rates[req.body.currency];
        req.body.amount = req.body.amount * exchangeRateForCurrency;
    }

    let responseOfRules = arrayOfrules.map(rule => {
        return rule(req.body);
    });

    let commission;
    
    if(typeof responseOfRules[0] !== 'string' || responseOfRules[0] instanceof Number){
        commission = responseOfRules[0];
    }

    if(typeof responseOfRules[2] !== 'string' || responseOfRules[2] instanceof Number){
        commission = responseOfRules[2];
    }
    
    
    if((typeof responseOfRules[1] !== 'string' || responseOfRules[1] instanceof Number) && commission > responseOfRules[1]){
        commission = responseOfRules[1];
    }
    console.log(commission, "commission");
    res.json(commission);
}

module.exports = CommissionCalculation;