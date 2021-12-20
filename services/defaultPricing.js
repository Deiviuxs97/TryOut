const defaultPricing = (TransactionData) => {
    let commission = TransactionData.amount * 0.005;
    commission = Math.round((commission + Number.EPSILON) * 100) / 100;

    if(commission >= 0.05){
        return commission;
    } else {
        return 0.05;
    }
    
}

module.exports = defaultPricing;