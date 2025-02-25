// Chapter 10 (if statements)

// 1. var city = &quot;Karachi&quot; if (city = &quot;Karachi&quot;) { console.log(&quot;The City
// OF Lights&quot;) Correct the above statement:
// Also try this statement by yourself

var city = "Karachi";

if (city === 'Karachi') {
    console.log("The City OF Lights"); 
};

// 2. This is the first line of an if statement:
// if (x === y) {
// Complete the statement. If the condition is true, display a box
// that asks the user value of z? and assign it to another variable.

var x = true;
var y = true;

if (x === y) {
    var z = +prompt("Enter value for z: ");

};

// 3. Code an if statement that tests if ZipCode is "10010" so, Alert
// that "Karachi". if not then alert ("Please write correct city")

var zip_code = +prompt("Enter zip code");

if (zip_code === 10010) {
    alert("Karachi");
} else {
    alert("Enter correct city zip code");
};

// 4. Code an if statement. Test whether a variable has a particular
// numerical value. If so, assign a new value to that variable, as in
// x = 1;

var x = 45;
if (x === 45) {
    x = 1;
};