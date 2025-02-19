// Chapter 6 (Math Expression II)
// 1. Code a short form of x = x + 1; Use either of the two legal
// expressions.

document.write('<p>---------------------------------------------------Chapter 6------------------------------------------------</p>');

// document.write('<p>---------------------------------------------------Q1------------------------------------------------</p>');

var x;
x += 1;
++x;

// 2. If x has a value of 100, what is the fastest way to reduce it to 99
// with a math expression?

document.write('<p>---------------------------------------------------Q2------------------------------------------------</p>');

var x = 100;
document.write(--x);

// 3. var x = 50; var y = x++;
// What is the value of y?

document.write('<p>---------------------------------------------------Q3------------------------------------------------</p>');

var x = 50;
var y = x++;

document.write("The value of y is: ",y); // y will be 50

// 4. var y = 50; var z = --y;
// What is the value of z?

document.write('<p>---------------------------------------------------Q4------------------------------------------------</p>');

var y = 50;
var z = --y;

document.write("The value of y is: ",z); // z will be 49

// 5. In a single statement, decrement num and assign its original value
// to newNum.

document.write('<p>---------------------------------------------------Q5------------------------------------------------</p>');

var num = 50;
var newNum = --num;

document.write("The value of newNum is: ",newNum); //it wiil be 49

// 6. In a single statement add 1 to a variable and assign its original
// value to another variable.

document.write('<p>---------------------------------------------------Q6------------------------------------------------</p>');

var num2 = 50;
var newNum2 = ++num2;

document.write("The value of newNum is: ",newNum2); //it wiil be 51

// 7. Assign a number value to a variable. Increment the variable.
// Display the new value in an alert

document.write('<p>---------------------------------------------------Q7------------------------------------------------</p>');

var num3 = 40;
num3 += 1;

alert("The value of variable is " + num3); 

document.write('<p>---------------------------------------------------Chapter 7------------------------------------------------</p>');
// Chapter 7 (Math Expression III)
// 1. var calculatedNum = 2 + (2 * 6); What
// is the value of calculatedNum? 

document.write('<p>---------------------------------------------------Q1------------------------------------------------</p>');


var calculatedNum = 2 + (2 * 6); // value will be 14

document.write("The value of calculatedNum is: ",calculatedNum);
 
// 2. var calculatedNum = (2 + 2) * 6; What is the
// value of calculatedNum?
document.write('<br>')
document.write('<p>---------------------------------------------------Q2------------------------------------------------</p>');

var calculatedNum =  (2 + 2 ) * 6; // value will be 24

document.write("The value of calculatedNum is: ",calculatedNum);

// 3. var calculatedNum = (2 + 2) * (4 + 2);
// What is the value of calculatedNum?

document.write('<br>')
document.write('<p>---------------------------------------------------Q3------------------------------------------------</p>');

var calculatedNum =  (2 + 2 ) * (4 + 2); // value will be 24

document.write("The value of calculatedNum is: ",calculatedNum);

// 4. var calculatedNum = ((2 + 2) * 4) + 2;
// What is the value of calculatedNum?

document.write('<br>')
document.write('<p>---------------------------------------------------Q4------------------------------------------------</p>');

var calculatedNum =  ((2 + 2 ) * 4) + 2; // value will be 18

document.write("The value of calculatedNum is: ",calculatedNum);

// 5. Write a statement that assigns to cost the result of 2 + 2 * 4 + 10,
// clarified with parentheses, producing 56.

document.write('<br>')
document.write('<p>---------------------------------------------------Q5------------------------------------------------</p>');

var cost = (2 + 2) * (4 + 10);
document.write("The value of cost is: ",cost);

// 6. Write a statement that assigns to units the result of 2 + 2 * 4 + 10,
// clarified with parentheses, producing 20.

document.write('<br>')
document.write('<p>---------------------------------------------------Q6------------------------------------------------</p>');

var units = 2 + 2 * 4 + 10;
document.write("The value of units is: ",units);

// 7. Write a statement that assigns to pressure the result of 4 / 2 * 4,
// clarified with parentheses, producing 5.

document.write('<br>')
document.write('<p>---------------------------------------------------Q7------------------------------------------------</p>');

var pressure = 4 / 2 * 4;
document.write("The value of pressure is: ",pressure);


document.write('<p>---------------------------------------------------Chapter 8------------------------------------------------</p>');
// Chapter 8 (Concatenating Text Strings)
// 1. var num = '2' + '2';
// What is the value of num? Include quotation marks.

document.write('<p>---------------------------------------------------Q1------------------------------------------------</p>');

var num = '2' + '2';
document.write('the value of num is: ', num); // value is 22

// 2. message = ('Hello,' + 'Dolly');
// What is the value of message? (Include the quotation marks.)
// Alert the statement

document.write('<br>')
document.write('<p>---------------------------------------------------Q2------------------------------------------------</p>');


var message = ('Hello,' + 'Dolly');
document.write('the value of message is: ', message); // value is Hello,Dolly

// 3. alert(&quot;33&quot; + 3);
// What message displays in the alert box?

document.write('<br>')
document.write('<p>---------------------------------------------------Q3------------------------------------------------</p>');

alert('33' + 3); //value is 333

// 4. Write an alert that displays the concatenation of the two parts of
// 'Pakistan Zindabad'.

document.write('<br>')
document.write('<p>---------------------------------------------------Q4------------------------------------------------</p>');

alert('Pakistan '+'Zindabad'); // value is Pakistan Zindabad

// 5. Write a statement that assigns to a variable the concatenation of
// a string with a number

document.write('<br>')
document.write('<p>---------------------------------------------------Q5------------------------------------------------</p>');

var string = 'Hello' + 2; // value is Hello2
document.write('The value is: ', string);

// 6. Assign strings to two variables. Then concatenate them and assign
// the result to a third variable.

document.write('<br>')
document.write('<p>---------------------------------------------------Q5------------------------------------------------</p>');

var string1 = 'Hello';
var string2 = 'Pakistan';
var string_new = string1 + string2;

document.write('The value is: ', string_new);

document.write('<p>---------------------------------------------------Chapter 9------------------------------------------------</p>');

// 1. Code a prompt with the message 'Enter first name'. The user's
// response is assigned to firstName.

var firstName = prompt('Enter first Name: ');

// 2. Code a prompt with the message 'Country?' and the default
// answer 'China'. The user's response is assigned to country.

var country = prompt('Country?', "China");

// 3. Correct this statement var yourName = prompt(Enter Your
//     Name");

var yourName = prompt("Enter Your Name");

// 4. Code a prompt that specifies a string as the message Include a
// default input.

var prompting = prompt("Enter something", "Something");

// 5. Assign strings to two variables. Code a prompt specifying the first
// variable as the message and the second variable as the default
// response. Assign the user's response to a third variable.

var stringing1 = 'Enter last name';
var stringing2 = 'Doe';
var stringing3 = prompt(stringing1, stringing2);

// 6. Display a prompt, including both a message and a default
// response.
// Display the user's response in an alert.

var response = prompt("Enter your age: ", '24');
alert('Your age is: '+response);