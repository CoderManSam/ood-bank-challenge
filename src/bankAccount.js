const Transaction = require("../src/transaction.js")

class BankAccount {
    constructor() {
        this.balance = 0
        this.transaction = []
        this.statement = []
    }

    getBalance() {

        return this.balance
    }

    setBalance(amount) {

        this.balance = amount

        return this.balance 
    }

    getStatement() {

        return this.statement
    }

    setStatement(statement) {

        this.statement = statement

        return this.statement 
    }

    deposit(amount, date) {

        const myTransaction = new Transaction ()
        this.balance += amount

        myTransaction.setDate(date)
        myTransaction.setTransactionType("credit")
        myTransaction.setTransactionAmount(amount)
        myTransaction.setNewBalance(this.balance) 

        this.transaction.push(myTransaction)

        return this.balance
    }

    withdrawal(amount, date) {

        const myTransaction = new Transaction ()
        this.balance -= amount

        myTransaction.setDate(date)
        myTransaction.setTransactionType("dedit")
        myTransaction.setTransactionAmount(amount)
        myTransaction.setNewBalance(this.balance) 

        this.transaction.push(myTransaction)

        return this.balance
    }

    compileTransactionsForStatement() {

        for(let i = 0; i < this.transaction.length; i++) {

            const transactionForStatement = {

                date: this.transaction[i].date,
                transactionType: this.transaction[i].transactionType,
                transactionAmount: this.transaction[i].transactionAmount,
                newBalance: this.transaction[i].newBalance

            }

            this.statement.push(transactionForStatement)
        }

        return this.statement
    }

}

module.exports = BankAccount