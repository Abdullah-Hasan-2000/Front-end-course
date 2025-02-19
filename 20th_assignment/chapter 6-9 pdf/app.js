// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

document.write('<p>---------------------------------------------------Q1------------------------------------------------</p>');

var a = 10;

document.write('<p>Result:</p>');
document.write('<p>The value of a is ',a,'</p>');

document.write('<p>...................................................</p>');
document.write('<p>The value of ++a is ',++a,'</p>');
document.write('<p>Now the value of a is ',a,'</p>');

document.write('<p>...................................................</p>');
document.write('<p>The value of ++a is ',a++,'</p>');
document.write('<p>Now the value of a is ',a,'</p>');

document.write('<p>...................................................</p>');
document.write('<p>The value of ++a is ',--a,'</p>');
document.write('<p>Now the value of a is ',a,'</p>');

document.write('<p>...................................................</p>');
document.write('<p>The value of ++a is ',a--,'</p>');
document.write('<p>Now the value of a is ',a,'</p>');

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
document.write('<br>')

document.write('<p>---------------------------------------------------Q2------------------------------------------------</p>');

var a1 = 2;
var b1 = 1;
var a2 = 2;
var b2 = 1;

document.write('<p>a is ',a1,'</p>');
document.write('<p>b is ',b1,'</p>');
document.write('<br>');
document.write('<p>value at --a: ',--a2,'</p>');
document.write('<p>value at --a - --b: ', a2 - --b2,'</p>');
document.write('<p>value at --a - --b + ++b: ', a2 - b2 + ++b2,'</p>');
document.write('<br>');
document.write('<p>result of --a - --b + ++b + b-- is ',--a1 - --b1 + ++b1 + b1--,'</p>');

// 3. Write a program that takes input a name from user &
// greet the user.

document.write('<br>');

document.write('<p>---------------------------------------------------Q3------------------------------------------------</p>');

var greeting = prompt("Enter Your name: ");
document.write('<p>Welcome ',greeting,'</p>');

// 4. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

document.write('<br>');

document.write('<p>---------------------------------------------------Q4------------------------------------------------</p>');

var table_number = +prompt("Enter any number to print its table: ");

if (table_number != 0) {
    document.write('<h2>Table of ', table_number ,'</h2>');

    document.write('<p>',table_number,' x 1 = ',table_number*1,'</p>');
    document.write('<p>',table_number,' x 2 = ',table_number*2,'</p>');
    document.write('<p>',table_number,' x 3 = ',table_number*3,'</p>');
    document.write('<p>',table_number,' x 4 = ',table_number*4,'</p>');
    document.write('<p>',table_number,' x 5 = ',table_number*5,'</p>');
    document.write('<p>',table_number,' x 6 = ',table_number*6,'</p>');
    document.write('<p>',table_number,' x 7 = ',table_number*7,'</p>');
    document.write('<p>',table_number,' x 8 = ',table_number*8,'</p>');
    document.write('<p>',table_number,' x 9 = ',table_number*9,'</p>');
    document.write('<p>',table_number,' x 10 = ',table_number*10,'</p>');
}

else {
    document.write('<h2>Table of ', 5 ,'</h2>');

    document.write('<p>',5,' x 1 = ',5*1,'</p>');
    document.write('<p>',5,' x 2 = ',5*2,'</p>');
    document.write('<p>',5,' x 3 = ',5*3,'</p>');
    document.write('<p>',5,' x 4 = ',5*4,'</p>');
    document.write('<p>',5,' x 5 = ',5*5,'</p>');
    document.write('<p>',5,' x 6 = ',5*6,'</p>');
    document.write('<p>',5,' x 7 = ',5*7,'</p>');
    document.write('<p>',5,' x 8 = ',5*8,'</p>');
    document.write('<p>',5,' x 9 = ',5*9,'</p>');
    document.write('<p>',5,' x 10 = ',5*10,'</p>');
};

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

document.write('<br>');

document.write('<p>---------------------------------------------------Q5------------------------------------------------</p>');

var subject_name_1 = prompt("Enter Subject 1 name: ");
var subject_name_2 = prompt("Enter Subject 2 name: ");
var subject_name_3 = prompt("Enter Subject 3 name: ");

var subject_marks = 100;

var obtained_marks_1 = +prompt("Enter Subject 1 marks: ");
var obtained_marks_2 = +prompt("Enter Subject 2 marks: ");
var obtained_marks_3 = +prompt("Enter Subject 3 marks: ");

document.write('<table border="1"><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>');
document.write('<tr><td>',subject_name_1,'</td><td>',subject_marks,'</td><td>',obtained_marks_1,'</td><td>',(obtained_marks_1/subject_marks)*100,'%</td></tr>');
document.write('<tr><td>',subject_name_2,'</td><td>',subject_marks,'</td><td>',obtained_marks_2,'</td><td>',(obtained_marks_2/subject_marks)*100,'%</td></tr>');
document.write('<tr><td>',subject_name_3,'</td><td>',subject_marks,'</td><td>',obtained_marks_3,'</td><td>',(obtained_marks_3/subject_marks)*100,'%</td></tr>');
document.write('<tr><td></td><td><center>',subject_marks * 3,'</center></td><td><center>',obtained_marks_1 + obtained_marks_2 + obtained_marks_3,'</center></td><td><center>',(parseInt(obtained_marks_1 + obtained_marks_2 + obtained_marks_3)/parseInt(subject_marks * 3))*100,'%</center></td></tr></table>');