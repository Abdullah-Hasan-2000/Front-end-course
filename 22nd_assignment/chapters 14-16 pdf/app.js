// 1. Declare an empty array using JS literal notation to store
// student names in future.

var student_names = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.

var student_names_obj = new Array();

// 3. Declare and initialize a strings array.

var strings_arr = ['mouse','keyboard','monitor','printer'];

// 4. Declare and initialize a numbers array.

var numbers_arr = [1,2,3,4,5,6,7,8,9,10];

// 5. Declare and initialize a boolean array.

var boolean_arr = [true,false,false,true,false,true];

// 6. Declare and initialize a mixed array.

var mixed_arr = ['mouse',1,3,true,'printer'];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

var educations = ['SSC','HSC','BCS','BS','BCOM','MS','M.Phil','PhD'];

document.write('Qualifications: <br><br>');
for (i=0; i<= educations.length - 1; i++) {
    document.write(i+1,') ',educations[i],'<br>');
};

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

document.write('<br>');

student_names = ['Ali','Ahmed','Bilal'];
var student_score = [320,230,480];


for (i=0; i<= student_names.length - 1; i++) {
    document.write('Score of ',student_names[i],' is ',student_score[i],' . Percentage: ',(student_score[i]/500)*100,'<br>');
};

// 9. Initialize an array with color names. Display the array elements in your browser.

document.write('<br>');

var color_names = ['green','blue','red','yellow','white','black','orange','purple','pink'];
document.write(color_names,'<br>');
document.write('<br>');

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.

var color_start = prompt("Enter color you want to add at the start of array: ");

color_names.unshift(color_start);
document.write('Updated Colors Array: <br>',color_names,'<br>');
document.write('<br>');

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.

var color_end = prompt("Enter color you want to add at the end of array: ");

color_names.unshift(color_end);
document.write('Updated Colors Array: <br>',color_names,'<br>');
document.write('<br>');

// c. Add two more color to the beginning of the array. Display the updated array in your browser.

color_names.unshift('Light Green','Light Blue');
document.write('Updated Colors Array: <br>',color_names,'<br>');
document.write('<br>');

// d. Delete the first color in the array. Display the updated array in your browser.

color_names.shift();
document.write('Updated Colors Array: <br>',color_names,'<br>');
document.write('<br>');

// e. Delete the last color in the array. Display the updated array in your browser.

color_names.pop();
document.write('Updated Colors Array: <br>',color_names,'<br>');
document.write('<br>');

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.

var color_add = prompt("Enter what color to at: ");
var color_index = +prompt("Enter index number at which you want to add the color: ");

color_names.splice(color_index,0,color_add);
document.write('Updated Colors Array: <br>',color_names,'<br>');
document.write('<br>');

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
// position/index. .Display the updated array in your browser.

var color_delete = +prompt("Enter how many colors you want to delete: ");
color_index = +prompt("Enter index number at which you want to add the color: ");

color_names.splice(color_index,color_delete);
document.write('Updated Colors Array: <br>',color_names,'<br>');
document.write('<br>');


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

student_score = [320,230,480,120];
document.write('Students Score Array: <br>',student_score,'<br>');
document.write('<br>');
student_score.sort();
document.write('Sorted Students Score Array: <br>',student_score,'<br>');
document.write('<br>');

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

var cities_arr = ['Karachi','Lahore','Islamabad','Quetta','Peshawar'];
document.write('Cities Array: ', cities_arr,'<br>');
document.write('<br>');
var selected_cities = cities_arr.slice(2,4);
document.write('Selected Cities Array: ', selected_cities,'<br>');
document.write('<br>');

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = ['This ', ' is', ' my' , ' cat'];
document.write('Array: <br><br>',arr);
document.write('<br><br>');
var string_new = arr.join("");
document.write('String: ', string_new,'<br>');
document.write('<br>');

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

var devices = [];
devices.push('keyboard');
devices.push('mouse');
devices.push('printer');
devices.push('monitor');

document.write('Devices: <br>', devices,'<br>');
document.write('<br>');

for (i=0; i<= devices.length -1; i++) {
    document.write('Out: <br>',devices[i],'<br>');
};
document.write('<br>');

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

document.write('Devices: <br>', devices,'<br>');
document.write('<br>');

for (i=devices.length-1; i>= 0; i--) {
    document.write('Out: <br>',devices[i],'<br>');
};
document.write('<br>');

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

var phone = ['Apple','Samsung','Motorola','Nokia','Sony','Haier'];

document.write('<select>');
for (i=0; i<= phone.length-1; i++) {
    document.write('<option>',phone[i],'</option>');
};

document.write('</select>');
