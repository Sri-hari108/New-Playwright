/*
Manipulate an array of strings (add, remove, sort)
Create an array named studentNames with the names of your students.

Add a new student name to the beginning of the array.

Remove the last student name from the array.

Alphabetize the student names within the array.
*/
let studentNames=["Akarshak","Srihari","Abhiram","Jagnath","Santusht","Nitai"];

// Add a new student name to the beginning of the array
studentNames.unshift("Acyuta");
console.log(studentNames);

// Remove the last student name from the array
studentNames.pop();
console.log(studentNames);

// Alphabetize the student names within the array
studentNames.sort();
console.log(studentNames);