
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
