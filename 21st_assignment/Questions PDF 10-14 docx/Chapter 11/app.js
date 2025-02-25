// Chapter 11 (Comparison Operators)
// 1. Code the first line of an if statement that tests whether one
// variable is unequal to another. (Use !)

var x = 1;
var y = 2;

if (x != y) {
    console.log("Not equal")
};

// 2. Code the first line of an if statement that tests whether the
// value represented by a variable is greater than or equal to the
// value represented by another variable.

if (x >= y) {
    console.log("x greater than y")
};

// 3. Code an if statement. Test whether a variable is unequal to a
// particular number. If so, assign a number to that variable.

var user_no = +prompt("Enter a number");

if (x != user_no) {
    x = user_no;
};

// 4. Code an if statement that tests whether a number is unequal
// to a different number. If the condition is true (it will be),
// display a congratulations alert.

if (4 != 5) {
    console.log("Congratulations!");
};

// 5. Code a prompt asking for your first name.
// Code an if statement that tests whether the name you entered
// is unequal to another name.
// If the condition is true (it will be), display an alert that says "No match"

var first_name = prompt("Enter your first name: ");

if (first_name != 'Ali') {
    console.log("No match");
};