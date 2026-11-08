/*
4. Create a JavaScript program that illustrates the use of all basic logical operators. The program should prompt the user to input two boolean values and then apply various logical operators to these values. Display the results of each operation.
Details:
1.	Prompt the user to enter two boolean values. Since JavaScript does not have a native boolean prompt, you can ask the user to input true or false as strings and convert them to boolean values.
2.	Perform the following logical operations:
o	Logical AND (&&)
o	Logical OR (||)
o	Logical NOT (!)
o	Logical XOR (Exclusive OR, implemented using ^ in binary operations)
3.	Display the results of each logical operation.
*/
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to convert string input to boolean
function toBoolean(value) {
    return value.toLowerCase() === "true";
}

rl.question("Enter first boolean value (true/false): ", (input1) => {
    rl.question("Enter second boolean value (true/false): ", (input2) => {

        let bool1 = toBoolean(input1);
        let bool2 = toBoolean(input2);

        console.log("\nBoolean Values:");
        console.log("First Value:", bool1);
        console.log("Second Value:", bool2);

        // Logical AND
        console.log("\nLogical AND (&&):", bool1 && bool2);

        // Logical OR
        console.log("Logical OR (||):", bool1 || bool2);

        // Logical NOT
        console.log("Logical NOT (!First Value):", !bool1);
        console.log("Logical NOT (!Second Value):", !bool2);

        // Logical XOR (using ^)
        console.log("Logical XOR (^):", bool1 ^ bool2);

        rl.close();
    });
});
