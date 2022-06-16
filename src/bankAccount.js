const Transaction = require("../src/transaction.js")

class BankAccount {
    constructor() {
        this.balance = 0
        this.transaction = new Transaction ()
    }

    getBalance() {

        return this.balance
    }

    setBalance(amount) {

        this.balance = amount

        return this.balance 
    }

    deposit(amount, date) {

        this.balance += amount

        this.transaction.setDate(date)
        this.transaction.setTransactionType("credit")
        this.transaction.setTransactionAmount(amount)
        this.transaction.setNewBalance(this.balance) 

        return this.balance
    }

    withdrawal(amount, date) {

        this.balance -= amount

        this.transaction.setDate(date)
        this.transaction.setTransactionType("dedit")
        this.transaction.setTransactionAmount(amount)
        this.transaction.setNewBalance(this.balance) 

        return this.balance
    }

}

module.exports = BankAccount