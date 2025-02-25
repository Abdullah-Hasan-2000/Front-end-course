// Chapter 13 (Testing sets of conditions)
    
// 1. Code the first line of an if statement that tests whether both are
// true: a has the same value as b and c has the same value as d.

var a = 1;
var b = 2;
var c = 3;
var d = 4;

if (a === b && c === d) {
    alert("All are equal");
} else {
    alert("All are not equal");
};

// 2. Code the first line of an if statement that tests whether either or
// both are true: a has the same value as b or c doesn't have the
// same value as d.

if (a === b || c != d) {
    alert("All are equal");
} else {
    alert("All are not equal");
};

// 3. Code the first line of an if statement that tests whether I.
// name is either 'Hamza' or 'Arsalan'. II. age is Less than 60.

var first_name = prompt("Enter name: ");
var age = +prompt("Enter age: ");

if ((first_name === 'Hamza' || first_name === 'Arsalan') && age < 60) {
    alert("Welcome");
} else {
    alert("sorry");
};

// 4. Declare two variables and assign them number values.
// If the first variable is less than the second variable or greater than
// the second variable, display an alert.

x = 3;
y = 45;

if (x < y || x > y) {
    alert("x and y are not equal");
} else {
    alert("x and y are equal");
};

// 5. Declare 2 variables. Assign one of them your first name and the
// other one your last name.
// Code 2 prompts, asking for your first and your last name.
// If your answers match the two variables, display an alert.

var user_fname = prompt("Enter your first name: ");
var user_lname = prompt("Enter your last name: ");

var fname = 'Abdullah';
var lname = 'Hasan';

if (user_fname === fname && user_lname === lname) {
    alert("welcome");
} else {
    alert("sorry");
};

