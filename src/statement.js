const BankAccount = require("../src/bankAccount.js")

class Statement {
    constructor() {
        this.statement = []
    }

    setStatement(statement) {

        this.statement = statement
    }

    printStatement() {

        let print = "date " + "|| " + "credit " + "|| " + "debit " + "|| " + "balance\n"
                      
        for(let i = this.statement.length-1; i > -1; i--) {

            if(this.statement[i].transactionType === "debit") {

                print += `${this.statement[i].date} ` + "|| " + "  " + "|| " + `${this.statement[i].transactionAmount} ` + "|| " + `${this.statement[i].newBalance}` + "\n"
            }

            else if (this.statement[i].transactionType === "credit") {

                print += `${this.statement[i].date} ` + "|| " + `${this.statement[i].transactionAmount} ` + "|| " + " " + "|| " + `${this.statement[i].newBalance}` + "\n"
            }
        }             

        return print
    }
    

}

module.exports = Statement