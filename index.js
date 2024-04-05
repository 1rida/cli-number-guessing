#!/usr/bin/env node
import inquirer from "inquirer";
// 1. computer will generate a random number
// 2. user input the guessing number
// 3. cpmpare user input with computer generate number and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);
const answers = await inquirer.prompt([
    { name: "userGuessedNumber",
        type: "number",
        message: "please guess a number 1-10",
    }
]);
console.log(answers);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulations! you guessed right number");
}
else {
    console.log("sorry! you guessed wrong number");
}
