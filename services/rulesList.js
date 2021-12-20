const defaultPricing = require("./defaultPricing");
const clientDiscount = require("./clientDiscount");
const highTurnover = require("./highTurnover");

const arrayOfrules = [
    defaultPricing,
    clientDiscount,
    highTurnover
]

module.exports = arrayOfrules;
