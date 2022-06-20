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
    }

    getTransactionType() {

        return this.transactionType
    }

    setTransactionType(transactionType) {

        this.transactionType = transactionType

    }

    getTransactionAmount() {

        return this.transactionAmount
    }

    setTransactionAmount(transactionAmount) {

        this.transactionAmount = transactionAmount
    }

    getNewBalance() {

        return this.newBalance
    }

    setNewBalance(newBalance) {

        this.newBalance = newBalance
    }

}

module.exports = Transaction