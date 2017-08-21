class Transaction{
    constructor(type,amount,date){
        this.type = type
        this.amount = amount
        this.date = date
    }
}
class Account{
    constructor(initialBalance){
        this.balance = initialBalance;
        this.withdrawCount = 0
        this.transactions = []
    }
    deposit(amount){
        this.balance += amount
        this.transactions.push(new    Transaction("Deposit",amount,new Date()))
    }
    withdraw(amount){
        this.withdrawCount += 1
        this.balance -= amount
        this.transactions.push(new    Transaction("Withdraw",amount,new Date()))
        if(this.withdrawCount > 3){
            this.balance -= (amount * 0.005)
            this.transactions.push(new    Transaction("Fees",amount * 0.005,new Date()))
        }
    }
    printStatement(){
        console.log("***STATEMENT***")
        for(var i=0;i<this.transactions.length;i++){
            var txn = this.transactions[i]
            console.log("Type:",txn.type,"Amount:",txn.amount,"Date:",txn.date)
        }
    }
}
var acc1 = new Account(10000)
acc1.deposit(1000);
acc1.deposit(1000);
acc1.withdraw(100);
acc1.withdraw(100);
acc1.withdraw(100);
acc1.withdraw(100);
acc1.withdraw(100);
acc1.printStatement()
console.log("Balance",acc1.balance)