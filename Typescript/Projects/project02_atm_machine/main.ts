#! /usr/bin/env node

import inquirer from "inquirer"

let currentBalance = 10000; //Dollars
let currentPin     = 123456;

let pin = await inquirer.prompt([{
    name : "PinCode",
    type : "number",
    message : "Enter your Pin code"
}])

if (pin.PinCode === currentPin){
    console.log("Correct pin code!!!")
    let operationans = await inquirer.prompt([{
        name : "Operation",
        message : "Please select options",
        type : "list",
        choices : ["Withdraw", "Check balance"]    
    }])
    if (operationans.Operation === "Withdraw"){
        let amount = await inquirer.prompt([{
              name : "Amount",
              type : "number",
              message : "Enter your amount"
        }])
           if(amount.Amount < currentBalance){
            currentBalance -= amount.Amount
            console.log("Your remaining balance is", + currentBalance)
    
        }else if ( amount.Amount > currentBalance){
            console.log("Insufficent balance!!!")
        }     
            }else {
        console.log(`Your current balance is ${currentBalance}.`)
    }
     
}else { 
    console.log("Incorrect Pin Code!!!.\nPlease try again.")
    
}