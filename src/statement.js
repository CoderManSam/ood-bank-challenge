const BankAccount = require("../src/bankAccount.js")

class Statement {
    constructor() {
        this.statement = []
    }

    setStatement(statement) {

        this.statement = statement
    }

    printStatement() {

        return this.statement
    }
    

}

module.exports = Statement