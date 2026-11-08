/*
Create a JavaScript program that demonstrates the use of while and do...while loops to handle a countdown and validate user input.
Details:
1.	Perform a countdown from a specified number using a while loop.
2.	Prompt the user for a positive number and continue prompting until a valid number is entered using a do...while loop.

*/
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1. Countdown using while loop
let countdown = 5;

console.log("Countdown using while loop:");
while (countdown > 0) {
    console.log(countdown);
    countdown--;
}
console.log("Countdown finished!\n");

// 2. Validate user input using do...while loop
let number;

do {
    rl.question("Enter a positive number: ", (input) => {
        number = parseInt(input);

        if (number <= 0 || isNaN(number)) {
            console.log("Invalid input. Please enter a positive number.");
        } else {
            console.log("Valid number entered:", number);
            rl.close();
        }
    });

    break; // required because rl.question is asynchronous
} while (true);
