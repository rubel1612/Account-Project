// class
// property and method
 const inputBalance = document.getElementById('inputBalance') 
 const btnDeposite = document.getElementById('btnDeposite')
 const btnWthdraw = document.getElementById('btnWithdraw')
const result = document.getElementById('balance')


class BankAccount {
    constructor(name,balance){
           this.name = name
           this.balance = balance
    }

      // condition: balance > 10; balance - amount  >10
      // this.balance -= amount

    withdraw(amount){
         amount = Number(amount)
         if( (this.balance - amount ) < 10 ){
            console.log(`sorry u cant withdraw. insufficent balance`)          
            return `Insufficent balance: ${this.balance}`
         }
         this.balance -= amount 
         console.log(`withdraw the balance ${amount}`)
         console.log({'balance':this.balance}) 
         
         return `balance: ${this.balance}`
    }

    deposite(amount){
      amount = Number(amount)
        this.balance += amount 
        console.log(`deposite the balance ${amount}`)
        console.log({balance:this.balance})
        return `balance: ${this.balance}`
    }
}

const rubel = new BankAccount('rubel',100)
// const inputNumber = Number(inputBalance.value)

btnDeposite.onclick = () => {
  // console.log(inputBalance.value);
   result.innerText = rubel.deposite(inputBalance.value) 
}

// withdraw by withdraw button
btnWthdraw.onclick = () => {
  // const withdrawDisplay = result.innerText
  // withdrawDisplay=rubel.withdraw(inputBalance.value)
     result.innerText = rubel.withdraw(inputBalance.value)
}
// console.log(rubel.balance);
// rubel.deposite(50)
// rubel.withdraw(60)
// rubel.deposite(100)
// rubel.withdraw(200)
// rubel.withdraw(100)