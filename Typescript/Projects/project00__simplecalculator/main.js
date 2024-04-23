import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumebr" },
    {
        message: "Select one of operators to perform",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumebr);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumebr);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumebr);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumebr);
}
