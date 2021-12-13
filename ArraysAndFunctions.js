// a // position zero = in an array
// b // position 1
// c // position 2
// d // position 3
// e // position 4
// f // position 5 = the length of the element (6) - 1 = position 5
//

//creating a customer's name array

var customerNames = [];
customerNames.push('Sam Smith'); //put the customer's name in the parentheses and use quotes
// dont forget that there is zero based indexing. 'Sam Smith' = array position zero
customerNames.push('Tommy Guns'); //array position 1

for (i = 0; i < customerNames.length; i++) {
// console.log(customerNames[1]); //testing to see if we are able to open array position zero on the browser
console.log(customerNames[i]); //using i in replacement of arrary position 0 or 1
}

// we can use a loop here to iterate over customer names and print each name out so instead of having two lines to print each one out ===> using the customerNames array function
// creating a new for loop on line 16