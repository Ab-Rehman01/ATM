#! /usr/bin/env node
// shabang
import inquirer from "inquirer";

let yourBalance = 50000;
let myPin =3948; 
let pinAnswer = await inquirer.prompt(
[
    {
        name:"pincode",
        message:"enter your pin",
        type:"number",
    }
]
);
//console.log(pinAnswer)
 if (pinAnswer.pincode === myPin )

{
    console.log("correct pin code!!!");
    let operationAnswer = await inquirer.prompt(
    
            {
                name:"operation",
                message:"please select option",
                type:"list",
                choices:["withdraw","check balance","transfer to an other account"],

            }
        
    );
    console.log(operationAnswer);
    if(operationAnswer.operation === "withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name:"amount",
                    message:" enter your amount",
                    type: "number",

                }
            ]
        );
        if (amountAns.amount <= yourBalance){
        yourBalance-= amountAns.amount;
        console.log("your remaing balance is:" + yourBalance)}

     else (console.log("your balance is insufficient"))
        }else

    //check balance

        if(operationAnswer.operation === "check balance"){
        console.log("your balance is:" + yourBalance)
    }else


    // Transfer to other account


    if(operationAnswer.operation === "transfer to an other account"){
        
        let amountTransfer = await inquirer.prompt(
            [
                {
                    name:"transfer",
                    message:" enter your 5 digit account number",
                    type:"number",
                 
                },
                {
                    name:"transferAmount",
                    message:"enter your amout",
                    type: "number",
                }
            ]
        );
        if (amountTransfer.transferAmount <= yourBalance){
            yourBalance-= amountTransfer.transferAmount;
            console.log("your remaing balance is:" + yourBalance)}
            
         else (console.log("your balance is insufficient"))
         
    
               
    }
   
}


else   {
    console.log("incorrect pin number");
   }