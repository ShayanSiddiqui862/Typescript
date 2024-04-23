import inquirer from "inquirer";
const currency = {
    USD: 1,
    AFN: 71.5,
    AUD: 1.54,
    BHD: 0.38,
    BDT: 109.62,
    CAD: 1.37,
    CNY: 7.25,
    INR: 83.26,
    PKR: 278.55,
    GBP: 0.76,
    EUR: 0.91
};
let answer = await inquirer.prompt([
    {
        name: 'from',
        type: 'list',
        message: "Enter from which currency you have to convert",
        choices: [
            'USD',
            'AFN',
            'AUD',
            'BHD',
            'BDT',
            'CAD',
            'CNY',
            'INR',
            'PKR',
            'GBP',
            'EUR'
        ],
    },
    {
        name: 'to',
        type: 'list',
        message: "Enter to which currency you have to convert",
        choices: [
            'USD',
            'AFN',
            'AUD',
            'BHD',
            'BDT',
            'CAD',
            'CNY',
            'INR',
            'PKR',
            'GBP',
            'EUR'
        ],
    },
    {
        name: 'Amount',
        message: "Enter the amount",
        type: 'number'
    },
]);
let fromAmount = currency[answer.from];
let toAmount = currency[answer.to];
let amount = answer.Amount;
let baseamount = amount / fromAmount;
let convertedamount = baseamount * toAmount;
console.log(convertedamount.toFixed(3));
