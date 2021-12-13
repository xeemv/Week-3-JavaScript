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


// using the "for..of" loop instead of the "for" loop to shorten the function and get rid of the "i"
for (name of customerNames){
    console.log(name);
} //test this and the names should be printed on your console.log 2x
// 

// function section
function myFunction(){ //any code inside these braces will be executed any time we use this function
    for(let i = 0; i < 100; i++) {
        console.log(i);
    }
}

// to invoke the function follow steps below
myFunction(); // this will cause console to print 0 - 99

// a function that has two parameters
function createFullName(firstName, lastName) { //our parameters go right here in the parentheses ==> firstName = 1st parameter and lastName = 2nd parameter
    console.log(firstName + " " + lastName);
} // if you run this right now. refresh and nothing is printed out because we have not called this function yet
// we have to use the function if we want to call the function
createFullName("Tom", "Swayer") //the arguement is ==> "Tom" = 1st and "Sawyer" = 2nd