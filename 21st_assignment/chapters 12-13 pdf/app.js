// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var character = prompt("Enter a character: ");

var ascii_value = character.charCodeAt(0);

if (ascii_value >= 48 && ascii_value <= 57) {
    console.log(character,' is a Number.');
} else if (ascii_value >= 65 && ascii_value <= 90) {
    console.log(character,' is an Uppercase Letter.');
} else if (ascii_value >= 97 && ascii_value <= 122) {
    console.log(character,' is a Lowercase Letter.');
} else {
    console.log(character,' is a Special Character');
}

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var first_int = +prompt("Enter 1st number: ");
var second_int = +prompt("Enter 2nd number: ");

if (first_int === second_int) {
    console.log('Two numbers are equal');
} else if (first_int > second_int) {
    console.log("Greater number is ", first_int);
} else {
    console.log("Greater number is ", second_int);
};

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

var user_no = +prompt("Enter a number: ");

if (user_no === 0) {
    console.log("Your number is 0");
} else if (user_no > 0) {
    console.log("Your number is positive");
} else {
    console.log("Your number is negative");
};

// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

var vowel = prompt('Enter a vowel: ');

if (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u') {
    console.log("Your character is a vowel");
} else {
    console.log("Your character is not a vowel");
};

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:

//     i. Check if user has entered password. If not, then
//        give message “ Please enter your password”
//     ii. Check if both passwords are same. If they are
//        same, show message “Correct! The password you
//        entered matches the original password”. Show
//        “Incorrect password” otherwise.

var correct_pass = '123';
var user_pass = prompt("Enter your password: ");

if (user_pass === '') {
    console.log("Please enter your password");
} else if (user_pass === correct_pass) {
    console.log("Correct! The password you entered matches the original password");
} else {
    console.log("Incorrect password");
};

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
};

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

var time = prompt("Enter time in 24-hours clock format: ");

if (time >= '0000' && time < '1200') {
    console.log("Good morning!");
} else if (time >= '1200' && time < '1700') {
    console.log("Good afternoon!");
} else if (time >= '1700' && time < '2100') {
    console.log("Good evening!");
} else if (time >= '2100' && time < '2359') {
    console.log("Good night!");
};
 