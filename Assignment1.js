/*
1. Create a JavaScript program that demonstrates the use of all basic arithmetic operators. The program should perform operations like addition, subtraction, multiplication, division, modulus, and exponentiation, and then display the results.
Details:
1.	Prompt the user to enter two numbers.
2.	Perform the following arithmetic operations using these numbers:
o	Addition
o	Subtraction
o	Multiplication
o	Division
o	Modulus (remainder of division)
o	Exponentiation (raise the first number to the power of the second number)
3.	Display the results of each operation.
*/



const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the first number: ", (num1) => {
    rl.question("Enter the second number: ", (num2) => {

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        console.log("Addition:", num1 + num2);
        console.log("Subtraction:", num1 - num2);
        console.log("Multiplication:", num1 * num2);
        console.log("Division:", num1 / num2);
        console.log("Modulus:", num1 % num2);
        console.log("Exponentiation:", num1 ** num2);

        rl.close();
    });
});
