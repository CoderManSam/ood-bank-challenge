const BankAccount = require("../src/bankAccount.js")
const Statement = require("../src/statement.js")
const Bank = require("../src/bank.js")

describe("bank", () => {
    let bankAccount
    let bankAccount2
    let statement
    let bank
  
    beforeEach(() => {
      bankAccount = new BankAccount("Samuel Thomas")
      bankAccount2 = new BankAccount("Daniel Thomas")
      statement = new Statement()
      bank = new Bank()
    })

    it("add an account to bank class", () => {
      // set up
      const expected =   [
        {
        accountHolder: "Samuel Thomas",
        accountNumber: 11111111,
        sortCode: "10-09-00",
        balance: 0,
        statement: []
      }
    ]
  
      // execute
      const result = bank.addAccount(bankAccount)

      console.log("add account to bank class test: ", result)
  
      // verify
      expect(result).toEqual(expected)
    })

    it("add multiple accounts to bank class", () => {
      // set up
      bank.addAccount(bankAccount)
      const expected =   [
        {
        accountHolder: "Samuel Thomas",
        accountNumber: 11111111,
        sortCode: "10-09-00",
        balance: 0,
        statement: []
      },         {
        accountHolder: "Daniel Thomas",
        accountNumber: 11111112,
        sortCode: "10-09-00",
        balance: 0,
        statement: []
      }
    ]
  
      // execute
      const result = bank.addAccount(bankAccount2)

      console.log("add account to bank class test: ", result)
  
      // verify
      expect(result).toEqual(expected)
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
          transactionType: 'debit',
          transactionAmount: 500,
          newBalance: 2500
        }
      ]
  
      // execute
      const result = statement.printStatement()
  
      // verify
      expect(result).toEqual(expected)
    })



    // it("remove an account from bank class", () => {
    //   // set up
    //   bankAccount.deposit(1000, "10/01/2012")
    //   bankAccount.deposit(2000, "13/01/2012")
    //   const expected = 2500
  
    //   // execute
    //   const result = bankAccount.withdrawal(500, "14/01/2012")
  
    //   // verify
    //   expect(result).toEqual(expected)
    // })

    // it("update an account in the bank class", () => {
    //   // set up
    //   bankAccount.deposit(1000, "10/01/2012")
    //   bankAccount.deposit(2000, "13/01/2012")
    //   const expected = 2500
  
    //   // execute
    //   const result = bankAccount.withdrawal(500, "14/01/2012")
  
    //   // verify
    //   expect(result).toEqual(expected)
    // })

})    