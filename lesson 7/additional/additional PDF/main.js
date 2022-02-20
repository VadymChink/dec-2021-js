function userCard (number){
    let logging = function (operationType, credits){
        let obj = {
            operationType : operationType,
            credits : credits,
            operationTime : `${new Date().getDate()}/`
                +`${new Date().getMonth()+1}`
                +`/${new Date().getFullYear()}, `
                + `${new Date().getHours()}:${new Date().getUTCMinutes()}:${new Date().getSeconds()} `
        }
        card.historyLogs.push(obj);
        return obj
    }
    let card = {
        balance : 100,
        transactionLimit: 100,
        historyLogs: [],
        key: number
    }
    return {
        getCardOptions: function (){
            return  {
                balance : card.balance,
                transactionLimit: card.transactionLimit,
                historyLogs: card.historyLogs,
                key: card.key
            }

        },
        putCredits: function (cash) {
            logging('putCredits',cash);
            return card.balance += cash;
        },
        takeCredits: function (cash) {
            if (card.balance < cash){
                console.log('недостатньо коштів')
            }else if (card.transactionLimit < cash){
                console.log('перевищує ліміт')
            }else {
                card.balance -= cash;
                logging('takeCredits',cash);
            }
        },
        setTransactionLimit: function (limit) {
           let setTransactionLimit = card.transactionLimit = limit;
            logging('setTransactionLimit',limit);
        },
        transferCredits: function (cash, cards) {
            if (card.balance < cash){
                console.log('замало грошей')
            }else if(card.transactionLimit < cash){
                console.log('перевищили ліміт')
            }else {
                card.balance -= cash + (cash * 0.005);
                cards.putCredits(cash);
                logging('transferCredits',cash);
            }
        }
    }
}
let card3 = userCard(3);
console.log(card3.getCardOptions());
card3.putCredits(150);
console.log(card3.getCardOptions());
card3.takeCredits(100);
console.log(card3.getCardOptions());
card3.setTransactionLimit(5000);
console.log(card3.getCardOptions());
let card1 = userCard(1);
console.log(card1.getCardOptions());
card3.transferCredits(50,card1);
console.log(card3.getCardOptions());
console.log(card1.getCardOptions());
