const Transaction = require("../src/transaction.js")
const BankAccount = require("../src/bankAccount.js")

class Bank {
    constructor() {
        this.accounts = []
    }

    getAccounts() {

        return this.accounts
    }

    setAccounts(accounts) {

        this.accounts = accounts
    }

    addAccount(bankAccount) {

        const accountToAdd = {

            accountHolder: bankAccount.getAccountHolder(),
            accountNumber: bankAccount.getAccountNumber(),
            sortCode: bankAccount.getSortCode(),
            balance: bankAccount.getBalance(),
            statement: bankAccount.getStatement(),

        }

        this.accounts.push(accountToAdd)

        return this.accounts
    }

    removeAccount() {
        // would just filter the account out of the array
    }

    updateAccount() {
        // would just filter out the old version and push in the new version
    }

}

module.exports = Bank