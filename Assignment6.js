/*
7. Create a JavaScript program that performs various operations on an array of numbers using for, for...in, and for...of loops without encapsulating the logic in functions.
Details:
1.	Define an array of numbers.
2.	Use a for loop to calculate the sum of all numbers in the array.
3.	Use a for...in loop to list all the indices of the array.
4.	Use a for...of loop to list all the values of the array.

*/
// Define an array of numbers
let numbers = [10, 20, 30, 40, 50];

// 1. Use a for loop to calculate the sum of all numbers
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum of array elements:", sum);

// 2. Use a for...in loop to list all indices of the array
console.log("\nArray indices (using for...in):");
for (let index in numbers) {
    console.log(index);
}

// 3. Use a for...of loop to list all values of the array
console.log("\nArray values (using for...of):");
for (let value of numbers) {
    console.log(value);
}
