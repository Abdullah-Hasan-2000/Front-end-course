// // USER INPUT & CONDITIONAL STATEMENT

// // 1. Write a program to take “city” name as input from user. If
// // user enters “Karachi”, welcome the user like this:
// // “Welcome to city of lights”

var city_name = prompt("Enter city name: ");

if (city_name === 'Karachi'){
    document.write("Welcome to city of Lights.")
};

// // // 2. Write a program to take “gender” as input from user. If the
// // // user is male, give the message: Good Morning Sir. If the
// // // user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter your gender: ");

if (gender === 'male'){
    document.write('Good Morning Sir.')
}
else if (gender === 'female'){
    document.write("Good Morning Ma'am")
};

// // 3. Write a program to take input color of road traffic signal
// // from the user & show the message according to this table:

var signal_color = prompt('Enter Traffic Signal Color');

if (signal_color === 'Red'){
    document.write('Must Stop')
} else if (signal_color === 'Yellow'){
    document.write('Ready to Move')
} else if (signal_color === 'Green'){
    document.write('Move Now')
};

// // 4. Write a program to take input remaining fuel in car (in
// // litres) from user. If the current fuel is less than 0.25litres,
// // show the message “Please refill the fuel in your car”

var rem_fuel = +prompt("Enter Remaining Fuel(in litres): ");

if (rem_fuel <= 0.25 ) {
    document.write('Please refill the fuel in your car')
};

// // 5. Run this script, & check whether alert message would be
// // displayed or not. Record the outputs.

// a.
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
} // this script will display an output "given condition for variable a is true"

// // b.
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
} // this script will not display an output

// // c.
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){  // this condition will execute
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){  // this condition will execute
alert("condition 4 is true");
}

// // d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
} // this script will display an output "The cost equals"

// // e.
if (true){ // this condition will execute
alert("True");
} 
if (false){
alert("False");
}

// // f.
if("car" < "cat"){
alert("car is smaller than cat");
} // this script will display an output 'car is smaller than cat'

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:


document.write('<h1>Mark Sheet</h1><br>');

var total_marks = +prompt("Enter Total Marks in 3 Subjects: ");
var obtained_marks = +prompt("Enter Obtained Marks in 3 Subjects: ");
var percentage = (obtained_marks/total_marks)*100;
var grade;
var remarks;

if ( percentage >= 80) {
    grade = 'A-one';
    remarks = 'Excellent';
    document.write('Total Marks: ',total_marks,
        '<br>Marks Obtained: ',obtained_marks,
        '<br>Percentage: ',percentage,
        '%<br>Grade: ',grade,
        '<br>Remarks: ',remarks);
} else if ( percentage >= 70) {
    grade = 'A';
    remarks = 'Good';
    document.write('Total Marks: ',total_marks,
        '<br>Marks Obtained: ',obtained_marks,
        '<br>Percentage: ',percentage,
        '%<br>Grade: ',grade,
        '<br>Remarks: ',remarks);
} else if ( percentage >= 60) {
    grade = 'B';
    remarks = 'You need to improve';
    document.write('Total Marks: ',total_marks,
        '<br>Marks Obtained: ',obtained_marks,
        '<br>Percentage: ',percentage,
        '%<br>Grade: ',grade,
        '<br>Remarks: ',remarks);
} else {
    grade = 'Fail';
    remarks = 'Sorry';
    document.write('Total Marks: ',total_marks,
        '<br>Marks Obtained: ',obtained_marks,
        '<br>Percentage: ',percentage,
        '%<br>Grade: ',grade,
        '<br>Remarks: ',remarks);
};

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var secret_no = 4;

var user_no = +prompt("Guess the Secret Number (from 1-10): ");

if (user_no === secret_no) {
    document.write('Bingo! Corrent Answer.');
} else if (user_no === secret_no + 1) {
    document.write('Close enough to the correct answer.')
};

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var user_divisor = +prompt("Enter a number to check if it is divisible by 3: ");

if (user_divisor%3 === 0) {
    document.write(user_divisor,' is divisible by 3');
} else {
    document.write(user_divisor,' is not divisible by 3');
};

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var even_odd_no = +prompt("Enter a number: ");

if (even_odd_no%2 === 0) {
    document.write(even_odd_no,' is an even number');
} else {
    document.write(even_odd_no,' is an odd number');
};

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temp = +prompt('Enter Temperatur (in celsius): ');

if (temp > 40) {
    document.write('It is too hot outside.');
} else if (temp > 30) {
    document.write('The Weather today is Normal.');
} else if (temp > 20) {
    document.write("Today’s Weather is cool.");
} else{
    document.write("OMG! Today’s weather is so Cool.");
}

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var first_no = +prompt("Enter 1st number");
var second_no = +prompt("Enter 2nd number: ");
var operator = prompt('Enter operation to be performed (+,-,*, /, %)');

if (operator === '+') {
    document.write("Output of ",first_no," ",operator," ",second_no," = ",first_no+second_no);
} else if (operator === '-') {
    document.write("Output of ",first_no," ",operator," ",second_no," = ",first_no-second_no);
} else if (operator === '*') {
    document.write("Output of ",first_no," ",operator," ",second_no," = ",first_no*second_no);
} else if (operator === '/') {
    document.write("Output of ",first_no," ",operator," ",second_no," = ",first_no/second_no);
} else if (operator === '%') {
    document.write("Output of ",first_no," ",operator," ",second_no," = ",first_no%second_no);
};