const highTurnover = (TransactionData) => {
    
    const clientsData = [{
        date: "2021-01-02",
        amount: "2000.00",
        currency: "EUR",
        client_id: 42,
        commission_amount: 0.05,
        commission_currency: "EUR"
      }, 
      {
        date: "2021-01-03",
        amount: "500.00",
        currency: "EUR",
        client_id: 1,
        commission_amount: 2.50,
        commission_currency: "EUR"
      },
      {
        date: "2021-01-04",
        amount: "499.00",
        currency: "EUR",
        client_id: 1,
        commission_amount: 2.50,
        commission_currency: "EUR"
      }];

      let clientTurnoverAmount = 0;

      clientsData.forEach(client => {

          if(client.client_id === TransactionData.client_id) {
              
              let todayDate = new Date(TransactionData.date.slice(0,4), TransactionData.date.slice(5,7), TransactionData.date.slice(8,10));
              let transactionDate = new Date(client.date.slice(0,4), client.date.slice(5,7), client.date.slice(8,10));

                if(todayDate.getFullYear() === transactionDate.getFullYear() && todayDate.getMonth() + 1 === transactionDate.getMonth() + 1){
                    
                  clientTurnoverAmount += parseInt(client.amount);

                }
          }
      })
      
      if(clientTurnoverAmount >= 1000) {
        return 0.03;
      } else {
          return "Client not reached 1000 €";
      }
}

module.exports = highTurnover;