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
//

// dont write codes like this (line 50 below)
// function createName("Tom", "Sawyer") { //what you don't want to do is you don't want to try writing code like this for one it's not going to work because it's incorrect syntax
    //applying this function to Tom Sawyer will not work
    // console.log(firstName + " " + lastName); 
// }
// createFullName("Tom", "Swayer")

// another things students will do wrong is:
function createFullName(firstName, lastName) { //set this up correctly
    console.log(firstName + " " + lastName);  
    //console.log("Tom" + " " + "Sawyer") by doing this instead which is put the values here which is wrong
    //because they put the values here, not no matter what we pass, it's going to print out Tom Sawyer
}
createFullName("Tom", "Swayer")
//

// learning about return statement
myFunction();
    function createFullName(firstName, lastName) {
    //console.log(firstName + " " + lastName); ===> get rid of this line and use line 69
    return firstName + " " + lastName; //no longer need the parentheses
}
createFullName("Tom", "Swayer"); // add a semicolon to the end of this line
// test this out
// the name will not be printed in your console.log
console.log(createFullName("Tom", "Swayer")); //this way does allow you to print out the name
// test this by printing and it should say "Tom Sawyer"

// or make it a variable for later
var fullName = createFullName("Tom", "Swayer"); //or store this value as a variable to use later
console.log("Welcome, " + fullName);
// print this and it should say, "Welcome, Tom Sawyer"

// learning array objects
// object literals literal representation of our DVD player 

var dvdPlayer = {
    //inside these curly braces we're going to put key value pairs
    // going to be the names of the properties or methods on the DVD player on the object 
    // the values assigned to each key will be either the values of the property or the function that makes up the method so
    height: 3, // this is a key
    // they're going to have values that say what the values of these properties are it's all going to be separated by commas
    // 3 inches
    width: 18, // this is a key
      // they're going to have values that say what the values of these properties are it's all going to be separated by commas
      // 18 inches
    depth: 12, // this is a key
      // they're going to have values that say what the values of these properties are it's all going to be separated by commas
      // 12 inches
    weight: 7, // this is a key
      // they're going to have values that say what the values of these properties are it's all going to be separated by commas
      //7 pounds
    color: 'black', // this is a key     
      // they're going to have values that say what the values of these properties are it's all going to be separated by commas
      // make sure to put black in quotes  
    dvdName: "Mulan", //the last property does not need a comma
    // the dvdname is what is the name of the currently loaded DVD 
    //make sure to put Mulan in quotes
    printDVDName: function() {
        // console.log(dvdName); ==> it will not print and will show up as "not define" because it is not a variable that lives outside the object 
        console.log(this.dvdName); 
        //since DVD name is not a variable that lives outside the object (reference line 85, it is not a variable) we're calling it as a property inside the object so we say this.dvdName so this object's property dvd name
        // test it out and it should now say "Mulan"
    }
};
// there we go so there's our object it has properties that define it and then it has a method that provides some functionality
console.log(dvdPlayer.depth); //test this out ==> should equal 12
//use our DVD object and access the properties and methods on it using
dvdPlayer.printDVDName(); //test this one out ==> it will display as not define due to line 108
//

// var x = 5
// function loopUntilX(){
//     for(let i = 0; i < x; i++);
//     loopUntilX(x);
// //do not change below, used for testing purposes
// console.log(loopUntilX(x));
// } console.log('true');

// function myFunction(){ //any code inside these braces will be executed any time we use this function
//     for(let i = 0; i < 100; i++) {
//         console.log(i);
//     }
// } myFunction();