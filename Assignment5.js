/*

6: Create a JavaScript program that uses a switch statement to perform basic arithmetic operations. The program will prompt the user to select an operation and then input two numbers. It will perform the selected operation and display the result.
Details:
1.	Prompt the user to select an operation by entering a number (1 for addition, 2 for subtraction, 3 for multiplication, 4 for division).
2.	Prompt the user to enter two numbers for the operation.
3.	Use a switch statement to perform the chosen operation.
4.	Handle division by zero and display appropriate messages
*/
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Select an operation:");
console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");

rl.question("Enter your choice (1-4): ", (choice) => {

    rl.question("Enter the first number: ", (num1) => {
        rl.question("Enter the second number: ", (num2) => {

            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            let result;

            switch (choice) {
                case "1":
                    result = num1 + num2;
                    console.log("Result (Addition):", result);
                    break;

                case "2":
                    result = num1 - num2;
                    console.log("Result (Subtraction):", result);
                    break;

                case "3":
                    result = num1 * num2;
                    console.log("Result (Multiplication):", result);
                    break;

                case "4":
                    if (num2 === 0) {
                        console.log("Error: Division by zero is not allowed.");
                    } else {
                        result = num1 / num2;
                        console.log("Result (Division):", result);
                    }
                    break;

                default:
                    console.log("Invalid choice. Please select a number between 1 and 4.");
            }

            rl.close();
        });
    });
});

