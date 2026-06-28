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

let choice = Number (prompt("Enter operation\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Modulus\n6. Exponentiation\n7. Floor Division\n8. Increment\n9. Decrement\n10. Exit"));
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

switch (choice) {
    case 1:
        console.log("Addition: " + (num1 + num2));
        break;
    case 2:
        console.log("Subtraction: " + (num1 - num2));
        break;
    case 3:
        console.log("Multiplication: " + (num1 * num2));
        break;
    case 4:
        console.log("Division: " + (num1 / num2));
        break;
    case 5:
        console.log("Modulus: " + (num1 % num2));
        break;
    case 6:
        console.log("Exponentiation: " + Math.pow(num1, num2));
        break;
    case 7:
        console.log("Floor Division: " + Math.floor(num1 / num2));
        break;
    case 8:
        console.log("Increment: " + (++num1));
        break;
    case 9:
        console.log("Decrement: " + (--num2));
        break;
    case 10:
        console.log("Exiting...");
        break;
    default:
        console.log("Invalid operation");
}

let marks = Number(prompt("Enter your marks:"));
switch (true) {
    case marks >= 90:
        console.log("Grade: A");
        break;
    case marks >= 80:
        console.log("Grade: B");
        break;
    case marks >= 70:
        console.log("Grade: C");
        break;
    case marks >= 60:
        console.log("Grade: D");
        break;
    case marks < 60:
        console.log("Grade: Fail");
        break;
    default:
        console.log("Invalid marks");
}

//loops
for (let i = 1; i<=5; i++) {
    console.log("for loop");
}

//sum of natural numbers
let number = 30;
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum += i;
}
console.log("Sum of natural numbers: " + sum);