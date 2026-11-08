/*
5. Create a JavaScript program that uses if, else if, and else statements to categorize a user based on their age. The program will prompt the user to enter their age and display a message based on the following age ranges:
•	Child: Age from 0 to 12
•	Teenager: Age from 13 to 19
•	Adult: Age from 20 to 64
•	Senior: Age 65 and above
Details:
1.	Prompt the user to enter their age.
2.	Use conditional statements to determine the age category.
3.	Display the corresponding message based on the user's age.

*/
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your age: ", (input) => {
    let age = parseInt(input);

    if (age >= 0 && age <= 12) {
        console.log("Category: Child");
    } 
    else if (age >= 13 && age <= 19) {
        console.log("Category: Teenager");
    } 
    else if (age >= 20 && age <= 64) {
        console.log("Category: Adult");
    } 
    else if (age >= 65) {
        console.log("Category: Senior");
    } 
    else {
        console.log("Invalid age entered.");
    }

    rl.close();
});
