const exchangeApi = "https://api.exchangerate.host/2021-01-01"
const axios = require('axios');

const requestExchangeRates = async (req, res, next) => {
    
   let exchangeRates = await axios.get(exchangeApi)
  .then(response => {
        return response.data;
  })
  .catch(error => {
    console.log(error);
  });

  req.body.exchangeRate = exchangeRates;
  next();
}

module.exports = requestExchangeRates;