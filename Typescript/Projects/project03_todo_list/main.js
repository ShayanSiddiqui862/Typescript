#!#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todosquestions = await inquirer.prompt([{
            name: "Firstquestion",
            type: "input",
            message: "What would you like to add in your todos"
        },
        {
            name: "SecondQuestion",
            type: "confirm",
            message: "Would you like to add more todos",
            default: "true"
        }]);
    todos.push(todosquestions.Firstquestion);
    console.log(todos);
    condition = todosquestions.SecondQuestion;
}
