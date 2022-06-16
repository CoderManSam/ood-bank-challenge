class Transaction {
    constructor(date) {
        this.date = date
        this.transactionType = ""
        this.transactionAmount = 0
        this.newBalance = 0
    }

    getDate() {

        return this.date
    }

    setDate(date) {

        this.date = date

        return this.date
    }

    getTransactionType() {

        return this.transactionType
    }

    setTransactionType(transactionType) {

        this.transactionType = transactionType

        return this.transactionType
    }

    getTransactionAmount() {

        return this.transactionAmount
    }

    setTransactionAmount(transactionAmount) {

        this.transactionAmount = transactionAmount

        return this.transactionAmount
    }

    getNewBalance() {

        return this.newBalance
    }

    setNewBalance(newBalance) {

        this.newBalance = newBalance

        return this.newBalance
    }

}

module.exports = Transaction