#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 20 + 1);
console.log("Rules of the Number guessing game");
console.log("This is a number guessing game, if you guess the correct number you earn 5 points,");
console.log("But if you guess the wrong number the computer will automatically give you the hint");
console.log("You will have three lives, means only two hints will be given to you");
const answer1 = await inquirer.prompt([
    {
        name: "guessedNumber",
        type: "number",
        message: "Please Guess the number b/w 1-20?",
    },
]);
if (answer1.guessedNumber === randomNumber) {
    console.log("Congratulations!,You have guessed the correct number in first try.You have also earned 5 points ");
    process.exit();
}
else if (answer1.guessedNumber < randomNumber) {
    console.log("One life gone.\nYou guess the wrong number.\nHint 1: Your guessed number is lower than the actual number.");
}
else if (answer1.guessedNumber > randomNumber) {
    console.log("One life gone.\nYou guess the wrong number.\nHint 1: Your guessed number is higher than the actual number.");
}
const answer2 = await inquirer.prompt([
    {
        name: "guessedNumber",
        type: "number",
        message: "Please Guess the number guess the number again b/w 1-20?",
    },
]);
if (answer2.guessedNumber === randomNumber) {
    console.log("Congratulations!,You have guessed the correct number in second try.You have also earned 3 points ");
    process.exit();
}
else if (answer2.guessedNumber < randomNumber) {
    console.log("Second life gone.\nYou guess the wrong number.\nHint 2: Your guessed number is lower than the actual number.");
}
else if (answer2.guessedNumber > randomNumber) {
    console.log("Second life gone.\nYou guess the wrong number.\nHint 2: Your guessed number is higher than the actual number.");
}
const answer3 = await inquirer.prompt([
    {
        name: "guessedNumber",
        type: "number",
        message: "Please Guess the number again b/w 1-20?",
    },
]);
if (answer3.guessedNumber === randomNumber) {
    console.log("Congratulations!,You have guessed the correct number in third try.You have also earned 1 points ");
}
else {
    console.log(`Third life gone.\nYou have Guessed the wrong number.\\n The correct number is ${randomNumber}.`);
}
