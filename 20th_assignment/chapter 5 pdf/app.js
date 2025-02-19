// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// num_1 = prompt("Enter 1st number: ");
// num_2 = prompt("Enter 2nd number: ");

// document.write('<p>Sum of ', num_1, ' and ', num_2, ' is ', num_1+num_2, '</p>');

// // 2. Repeat task1 for subtraction, multiplication, division &
// // modulus.

// document.write('<p>Subtraction of ', num_1, ' and ', num_2, ' is ', num_1-num_2, '</p>');
// document.write('<p>Multiplication of ', num_1, ' and ', num_2, ' is ', num_1*num_2, '</p>');
// document.write('<p>Division of ', num_1, ' and ', num_2, ' is ', num_1/num_2, '</p>');
// document.write('<p>Modulus of ', num_1, ' and ', num_2, ' is ', num_1%num_2,'</p>');

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.
document.write('<br>');

var var_3;
document.write('<p>Value after variable declaration is: ', var_3, '</p>');
var_3 = 5;
document.write('<p>Initial value: ', var_3, '</p>');
++var_3;
document.write('<p>Value after increment is: ', var_3, '</p>');
var_3 = var_3 + 7;
document.write('<p>Value after addition is: ', var_3, '</p>');
--var_3;
document.write('<p>Value after decrement is: ', var_3, '</p>');
var_3 = var_3 % 3;
document.write('<p>The remainder is: ', var_3, '</p>');

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store ticket price in a variable & calculate the cost of buying 5 tickets
// to a movie.

document.write('<br>');

var ticket_price = 600;
document.write('<p>Total cost to buy 5 tickets to a movie is ', ticket_price * 5, 'PKR</p>');

// 5. Write a script to display multiplication table of any
// number in your browser.

document.write('<br>');
var table_number = prompt("Enter any number to print its table: ");
document.write('<p>Table of ', table_number ,'</p>');
document.write('<br>');
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

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

document.write('<br>');

celsius_temp = prompt("Enter temp in Celsuis: ");
document.write('<p>',celsius_temp,'<sup>0</sup>C is ',(celsius_temp * 9/5 ) + 32,'<sup>0</sup>F</p>');

fehrenheit_temp = prompt("Enter temp in Fehrenheit: ");
document.write('<p>',fehrenheit_temp,'<sup>0</sup>F is ',(fehrenheit_temp - 32 ) * 5/9,'<sup>0</sup>C</p>');

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.

document.write('<br>');

document.write('<h1>Shopping Cart</h1>');

var price_item_1 = 650;
var quantity_item_1 = 3;
var price_item_2 = 100;
var quantity_item_2 = 7;
var shipping_charges = 100;

document.write('<p>Price of Item 1 is: ',price_item_1,'</p>');
document.write('<p>Qunatity of Item 1 is: ',quantity_item_1,'</p>');
document.write('<p>Price of Item 2 is: ',price_item_2,'</p>');
document.write('<p>Qunatity  of Item 2 is: ',quantity_item_2,'</p>');
document.write('<p>Shipping Charges is: ',shipping_charges,'</p>');

document.write('<br>');

document.write('<p>Total Cost of your order is: ',(price_item_1*quantity_item_1)+(price_item_2*quantity_item_2)+(shipping_charges),'</p>');

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

document.write('<br>');

var total_marks = 980;
document.write('<p>Total Marks is: ',total_marks,'</p>');
var marks_obtained = 804;
document.write('<p>Obtained Marks is: ',marks_obtained,'</p>');
document.write('<p>Percentage: ',(marks_obtained/total_marks)*100,'</p>');

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

document.write('<br>');
document.write('<h1>Currency in PKR</h1>');

var dollars = 10;
var riyals = 25;

document.write('<p>Total currency in PKR is: ',(dollars*104.80)+(riyals*28),'</p>');

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

document.write('<br>');

var any_number = 56;
document.write('<p>Initial Value ',any_number,'</p>');
document.write('<p>Performing all operations in a single statment ',((any_number+5)*10)/2,'</p>');

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

document.write('<br>');

var current_year = 2025;
var birth_year = 2000;
document.write('<p>Current Year ',current_year,'</p>');
document.write('<p>Birth Year ',birth_year,'</p>');
document.write('<p>Your age is either ',current_year - birth_year,' or ', current_year - (birth_year+1) ,'</p>');

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

document.write('<br>');

document.write('<h1>The Geometrizer</h1>');

var radius_circle = 20;
var pie = 3.142;
document.write('<p>Radius of the circle is ',radius_circle,'</p>');
document.write('<p>The circumference of circle is ',2 * radius_circle * pie,'</p>');
document.write('<p>The area of circle is ',pie * (radius_circle ** 2),'</p>');

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

document.write('<br>');

document.write('<h1>The Lifetime Supply Calculator</h1>');

var fav_snack = 'chocolate';
var current_age = 24;
var max_age = 65;
var est_amount = 3;

document.write('<p>Favourite Snack: ',fav_snack,'</p>');
document.write('<p>Current Age: ',current_age,'</p>');
document.write('<p>Estimated Maximum Age: ',max_age,'</p>');
document.write('<p>Amount of Snacks per day: ',est_amount,'</p>');

document.write('<p>You will need ',((max_age - current_age) * 365) * 3,' ', fav_snack,' to last you until the ripe old age of ',max_age,'</p>');