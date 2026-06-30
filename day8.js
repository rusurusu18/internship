//while loop

// while (condition) {
//  checks condition before executing the block of code
//     console.log("Hello World");
// }

//example of while loop

let count=11;
while(count<=10){
    console.log("Number are" +count);
    count++;
}

//do while loop

//first executes code then checks the condition

let count=12;
do{
    console.log("Number are" +count);
    count--;
}while(count>=10)





//function
// reusable block of code that performs a specific task
function sum(a, b) {
    return a + b;
}
let result=sum(10, 15);
let result1=sum(20, 40);

console.log(result);
console.log(result1);



//grade checking using function
function checkGrade(marks) {
    if (marks >= 90) {
        console.log(" grade A+");
    } else if (marks >= 80) {
        console.log(" grade A");
    } else if (marks >= 70) {
        console.log(" grade B+");
    } else {
        console.log("fail");
    }
}

checkGrade(85);




//function with expression
const sayhello = function() {
    console.log("Hello function with argument." );
}





//scope
//variabe lai access garxa ki gardaina 

//global scope
let name  = "Rushu"; //global variable
function myname(){
    console.log(name); 
}
myname();
console.log(name); //outside function ma pani access garna milxa


//local scope
function myname1(){
    let name1 = "Rushu"; 
    console.log(name1); 
}
myname1();
console.log(name1); //outside function ma access garna mildaina
//print hudaina ya baira 






//object
//collection of related data stored using key value pair
let student = {
    //key: value
    name: "Rushu",
    age: 21,
    faculty: "BSc.Hons(Computing)",
    college:"Itahari International College"
};

console.log(student);
//console.log(student.name); //accessing value using key

student.address = "Itahari"; //adding new key value pair
student.address="Sundarharaincha-4"; //updating value of existing key
delete student.address; //deleting key value pair


let fruit = {
    name: "Mango",
    color: "yellow",
    taste: "sweet"
}
console.log(fruit);
console.log(fruit.name); //auta value access

fruit.color = "green"; //value update gareko 
fruit.price = 60; //naya value add gareko 

console.log(fruit);


//array
//multiple values single variable ma store garna 
let fruits = ["Mango", "Banana", "Apple", "Orange"]; //[0,1,2,3]]
//console.log(fruits);
console.log(fruits[0]); //accessing first element

//push method
fruits.push("Grapes"); //adding new element at the end
//console.log(fruits);

//pop method
fruits.pop(); //removing last element
//console.log(fruits);

//shift method : shifts/dlts first element 
fruits.shift(fruits);
//console.log(fruits)

//unshift
fruits.unshift("Apple");// adding in first
//console.log(fruits)

//length
console.log(fruits.length)
