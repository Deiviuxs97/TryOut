const clientDiscount = (TransactionData) => {
    
    if(TransactionData.client_id === 42) {

        return 0.05
        
    } else {
        return "Client don't have discount";
    }
}

module.exports = clientDiscount;