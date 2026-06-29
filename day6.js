
//Variables 
// let age = 23;
// var age = 23;
// const age = 23;
// console.log(age);
// const pie= 3.14

//Data Types
let number= 23; //number
const name= "John21"; //string
let isLoggedin= true; //boolean
let  city; //undefined
let user= null; //null

console.log(typeof number);
console.log(typeof name);
console.log(typeof isLoggedin);
console.log(typeof city);
console.log(typeof user);

//operations

//arthmetic operations
let x=20;
let y= 6;
let sum= x + y; //addition
let subtract= x - y; //subtraction

console.log(sum);
console.log(subtract);
console.log(x * y); //multiplication
console.log(x / y); //division
console.log(x % y); //modulus

//comparison operatiors
// ==, ===, !=, !==, >, <, >=, <=
let a= 10;
let b= "10";    

console.log(a == b); //loose equality
console.log(a === b); //strict equality
console.log(a != b); //loose inequality
console.log(a !== b); //strict inequality
console.log(a > b); //greater than
console.log(a < b); //less than
console.log(a >= b); //greater than or equal to
console.log(a <= b); //less than or equal to

//logical operators
// &&, ||, !
let isAdult= true;
let hasLicense= false;

console.log(isAdult && hasLicense); //logical AND
console.log(isAdult || hasLicense); //logical OR
console.log(!isAdult); //logical NOT

//assignment operators
// =, +=, -=, *=, /=, %=
let c= 5;
c += 3; // equivalent to c = c + 3
console.log(c);

//conditons
//if else
let age= 22;
if (age >= 18) {
    console.log("Elegible to vote.");
} else {
    console.log("Not elegible to vote.");
}

//if else if else
let marks= 85;                      
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}

//else if
let score= 75;
if (score >= 90) {
    console.log("Excellent");   
} else if (score >= 75) {
    console.log("Good");
} else if (score >= 60) {
    console.log("Average");
}

//switch case
let day= Number(prompt("Enter a number between 1 and 4:"));
switch (day) {
    case 1:     
    console.log("Sunday");
    break;
    case 2:
    console.log("Monday");
    break;  
    case 3:
    console.log("Tuesday");
    break;
    case 4:
    console.log("Wednesday");
    break;
    default:
    console.log("Invalid day");
}
