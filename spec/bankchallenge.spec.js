const BankAccount = require("../src/bankAccount.js")
const Transaction = require("../src/transaction.js")
const Statement = require("../src/statement.js")

describe("bank", () => {
    let bankAccount
    let transaction1
    let transaction2
    let transaction3
    let statement
  
    beforeEach(() => {
      bankAccount = new BankAccount()
      transaction1 = new Transaction()
      transaction2 = new Transaction()
      transaction3 = new Transaction()
      statement = new Statement()
    })

    it("credit the account and display the new balance", () => {
      // set up
      bankAccount.deposit(1000, "10/01/2012")
      const expected = 3000
  
      // execute
      const result = bankAccount.deposit(2000, "13/01/2012")
  
      // verify
      expect(result).toEqual(expected)
    })

    it("dedit the account and display the new balance", () => {
      // set up
      bankAccount.deposit(1000, "10/01/2012")
      bankAccount.deposit(2000, "13/01/2012")
      const expected = 2500
  
      // execute
      const result = bankAccount.withdrawal(500, "14/01/2012")
  
      // verify
      expect(result).toEqual(expected)
    })

})    