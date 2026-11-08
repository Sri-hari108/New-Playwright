/*
2. Create a JavaScript program that illustrates the use of all basic assignment operators. The program should allow the user to input an initial value and then apply various assignment operators to this value. The results of each operation should be displayed.
Details:
1.	Prompt the user to enter an initial value.
2.	Apply each of the following assignment operators:
o	Simple Assignment (=): Assign the initial value to a variable.
o	Addition Assignment (+=): Add a number to the variable.
o	Subtraction Assignment (-=): Subtract a number from the variable.
o	Multiplication Assignment (*=): Multiply the variable by a number.
o	Division Assignment (/=): Divide the variable by a number.
o	Modulus Assignment (%=): Assign the remainder of division to the variable.
o	Exponentiation Assignment (**=): Raise the variable to the power of a number.
3.	Display the results of each operation.

*/
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter an initial value: ", (input) => {
    let value = parseFloat(input);

    console.log("\nInitial Value:", value);

    // Simple Assignment (=)
    let result = value;
    console.log("After '=' assignment:", result);

    // Addition Assignment (+=)
    result += 5;
    console.log("After '+=' assignment (add 5):", result);

    // Subtraction Assignment (-=)
    result -= 2;
    console.log("After '-=' assignment (subtract 2):", result);

    // Multiplication Assignment (*=)
    result *= 3;
    console.log("After '*=' assignment (multiply by 3):", result);

    // Division Assignment (/=)
    result /= 2;
    console.log("After '/=' assignment (divide by 2):", result);

    // Modulus Assignment (%=)
    result %= 4;
    console.log("After '%=' assignment (modulus 4):", result);

    // Exponentiation Assignment (**=)
    result **= 2;
    console.log("After '**=' assignment (power 2):", result);

    rl.close();
});
