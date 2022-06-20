const Transaction = require("../src/transaction.js")

let accountNumberDefault = 11111111

class BankAccount {
    constructor(accountHolder) {
        this.accountHolder = accountHolder
        this.accountNumber = accountNumberDefault++
        this.sortCode = "10-09-00"
        this.balance = 0
        this.transaction = []
        this.statement = []
    }

    getAccountHolder() {

        return this.accountHolder
    }

    setAccountHolder(accountHolder) {

        this.accountHolder = accountHolder
    }

    getAccountNumber() {

        return this.accountNumber
    }

    setAccountNumber(accountNumber) {

        this.accountNumber = accountNumber
    }

    getSortCode() {

        return this.sortCode
    }

    setSortCode(sortCode) {

        this.sortCode = sortCode
    }

    getBalance() {

        return this.balance
    }

    setBalance(amount) {

        this.balance = amount
    }

    getStatement() {

        return this.statement
    }

    setStatement(statement) {

        this.statement = statement
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
        myTransaction.setTransactionType("debit")
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