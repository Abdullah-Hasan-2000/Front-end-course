// Chapter 16 (Array II)

// 1. Code an array with 1 string element.
// Add an additional element to the array using push.
// Create an alert whose message is the last element.

var arr = ['name'];
arr.push('last name');
console.log(arr[1]);

// 2. var alphabet = ['h','i','j','k'];
// Remove the last element from the array Alphabet.

var alphabet = ['h','i','j','k'];
alphabet.pop();

// 3. var alphabet = ['h','i','j','k'];
// Add a new element, a number, to the end of an array.

alphabet = ['h','i','j','k'];
alphabet.push('jk');
alphabet.push(34);

// Chapter 16 (Array III)
// 1. var sizes = ['S','M','XL','XXL','XXXL'];.
// Remove the first element of an array.

var sizes = ['S','M','XL','XXL','XXXL'];
sizes.shift();

// 2. var sizes = ['S','M','XL','XXL','XXXL'];.
// Add three number elements to the beginning of an array.

sizes = ['S','M','XL','XXL','XXXL'];
sizes.unshift('XS');
sizes.unshift('XXS');
sizes.unshift('XXXS');
console.log(sizes)

// 3. Declare an array with one element.
// Add a second element to the beginning of the array.
// Create an alert whose message is the new first element.

arr = ['1 element'];
arr.unshift('0 element');
console.log(arr[0]);

// 4. var sizes = ['S','M','XL','XXL','XXXL'].
// Insert 'L' into the array between 'M' and 'XL'.

sizes = ['S','M','XL','XXL','XXXL'];
sizes.splice(2,0,'L')
console.log(sizes);

// 5.sizes = ['S','M','XL','XXL','XXXL'].
// Copy the first 3 sizes of the array and put them into a new array,
// regSizes.

sizes = ['S','M','XL','XXL','XXXL'];
var regSizes = sizes.slice(0,3);
console.log(regSizes);

// 6. var pets = ['dog','cat','ox','duck','frog'].
// Add 2 elements after 'dog' and remove 'cat', 'ox', and 'duck'.

var pets = ['dog','cat','ox','duck','frog'];
pets.splice(1,3,'elephant','goat');
console.log(pets);

// 7. var pets = ['dog','cat','ox','duck','frog'];
// remove 'cat', 'ox'.

pets = ['dog','cat','ox','duck','frog'];
pets.splice(1,2);
console.log(pets);

// 8. pets = ['dog','cat','ox','duck','frog'];
// Reduce it to 'duck' and 'frog' using slice.

pets = ['dog','cat','ox','duck','frog'];
pets = pets.slice(3);
console.log(pets);