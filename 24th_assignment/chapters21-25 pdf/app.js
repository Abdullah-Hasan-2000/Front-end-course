// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName + " " + lastName;
alert("Hello " + fullName);

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

var favMobile = prompt("Enter your favorite mobile phone model");
var length = favMobile.length;
document.write("My favorite phone is: " + favMobile + "<br>");
document.write("Length of string: " + length + "<br>");

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

var word = "Pakistani";
var index = word.indexOf("n"); 
document.write("String: " + word + "<br>");
document.write("Index of 'n': " + index + "<br>");

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

var word = "Hello World";
var index = word.lastIndexOf("l");
document.write("String: " + word + "<br>");
document.write("Last index of 'l': " + index + "<br>");

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

var word = "Pakistani";
var character = word.charAt(3);
document.write("String: " + word + "<br>");
document.write("Character at index 3: " + character + "<br>");

// 6. Repeat Q1 using string concat() method.

var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName.concat(" ", lastName);
alert("Hello " + fullName);

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write("City: " + city + "<br>");
document.write("After replacement: " + newCity + "<br>");

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replaceAll('and', "&");
document.write("Message: " + message + "<br>");
document.write("After replacement: " + newMessage + "<br>");

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

var string = "472";
var number = parseInt(string);
document.write("Value: " + string + "<br>");
document.write("Type: " + typeof(string) + "<br>");
document.write("Value: " + number + "<br>");
document.write("Type: " + typeof(number) + "<br>");

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

var input = prompt("Enter any word");
var upperCase = input.toUpperCase();

document.write("User input: " + input + "<br>");
document.write("Upper case: " + upperCase + "<br>");

// 11. Write a program that takes user input. Convert and
// show the input in title case.

var input = prompt("Enter any word");
var firstChar = input.slice(0,1);
var otherChar = input.slice(1);
var titleCase = firstChar.toUpperCase() + otherChar.toLowerCase();

document.write("User input: " + input + "<br>");
document.write("Title case: " + titleCase + "<br>");

// 12. Write a program that converts the variable num to
// string. var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var num = 35.36;
var string = num.toString();
var result = string.replace(".", "");

document.write("Number: " + num + "<br>");
document.write("Result: " + result + "<br>");

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.

var username = prompt("Enter username");

if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
    alert("Please enter a valid username");
} else {
    alert("Username is valid");
};

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
var search = search.toLowerCase();
var found = false;

for (var i = 0; i < items.length; i++) {
    if (search === items[i]) {
        found = true;
        break;
    }
}

if (found) {
    alert(search + " is available at index " + i + " in our bakery");
} else {
    alert("We are sorry. " + search + " is not available in our bakery");
}

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

var password = prompt("Enter password");
var valid = true;

if (password.length < 6) {
    valid = false;
}

if (!isNaN(password.slice(0,1))) {
    valid = false;
}

var hasNumber = false;
var hasAlphabet = false;

for (var i = 0; i < password.length; i++) {
    if (!isNaN(password[i])) {
        hasNumber = true;
    } else if (isNaN(password[i])) {
        hasAlphabet = true;
    }
}

if (!hasNumber || !hasAlphabet) {
    valid = false;
}

if (valid) {
    alert("Password is valid");
} else {
    alert("Please enter a valid password");
}

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

var university = "University of Karachi";
var array = university.split("");

for (var i = 0; i < array.length; i++) {
    document.write(array[i] + "<br>");
}

// 17. Write a program to display the last character of a user
// input.

var input = prompt("Enter any word");
var lastChar = input.charAt(input.length - 1);

document.write("User input: " + input + "<br>");
document.write("Last character of input: " + lastChar + "<br>");

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

var string = "The quick brown fox jumps over the lazy dog";
var count = 0;

for (var i = 0; i < string.length; i++) {
    if (string.slice(i, i + 3) === "the") {
        count++;
    }
}

document.write("Text: " + string + "<br>");
document.write("There are " + count + " occurrence(s) of word 'the'");

