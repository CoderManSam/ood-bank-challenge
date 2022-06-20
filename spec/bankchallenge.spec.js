const BankAccount = require("../src/bankAccount.js")
const Statement = require("../src/statement.js")

describe("bank", () => {
    let bankAccount
    let statement
  
    beforeEach(() => {
      bankAccount = new BankAccount()
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

    it("prints a bank statement", () => {
      // set up
      bankAccount.deposit(1000, "10/01/2012")
      bankAccount.deposit(2000, "13/01/2012")
      bankAccount.withdrawal(500, "14/01/2012")
      bankAccount.compileTransactionsForStatement()
      statement.setStatement(bankAccount.getStatement())
      const expected = [
        {
          date: '10/01/2012',       
          transactionType: 'credit',
          transactionAmount: 1000,  
          newBalance: 1000
        },
        {
          date: '13/01/2012',
          transactionType: 'credit',
          transactionAmount: 2000,
          newBalance: 3000
        },
        {
          date: '14/01/2012',
          transactionType: 'dedit',
          transactionAmount: 500,
          newBalance: 2500
        }
      ]
  
      // execute
      const result = statement.printStatement()

      console.log("testing statement: ", result)
  
      // verify
      expect(result).toEqual(expected)
    })

})    