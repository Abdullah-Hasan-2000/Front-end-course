// Chapter 12 (if…else and else if statements)
    
// 1. Code an if statement that tests whether the value represented by
// a variable is greater than or equal to the value represented by
// another variable. If so, display an alert. If not, display a different
// alert.

var x = 1;
var y = 2;

if (x >= y) {
    console.log("x is greater than y");
} else {
    console.log("x is lesser than y");
};

// 2. Write a program using if else and else if statement which take
// marks from user. And the program will calculate your percentage
// and give you grade A/C to Your percentage. (MARKSHEET)

var total_marks = +prompt("Enter total marks; ");
var obtained_marks = +prompt("Enter obtained marks: ");

var percentage = (total_marks/obtained_marks)*100;

if (percentage >= 80) {
    console.log("Your grade is A");
} else if (percentage >= 70) {
    console.log("Your grade is B");
} else if (percentage >= 60) {
    console.log("Your grade is C");
} else {
    console.log("Your grade is F");
};

// This is the if statement that begins the code.
// if (a === 10) {
// alert("a is 10");
// }
// If a isn't 10, display an alert that says The correct value of a is
// ____
// Note: Try this by yourself

var a = +prompt("Enter a number");

if (a === 10) {
    alert("a is 10");
} else {
    alert("The correct value of a is ",a);
};

// 4. Prompt the user to enter a city.
// If the city is Karachi, display an alert acknowledging it is Karachi.
// If not, check to see if it's Lahore.
// If it is, display an alert acknowledging it's Lahore.
// Otherwise, display a different alert.

var city = prompt("Enter a city name: ");

if (city === 'Karachi') {
    console.log("City is Karachi");
} else if (city === 'Lahore') {
    console.log("City is Lahore");
} else {
    console.log("City is not available");
};

