let fruits=["Apple","Banana","Mango","Grapes"];

//includes: helps us to check if an element is present in the array or not
console.log(fruits.includes("Mango")); // true
console.log(fruits.includes("Orange")); // false

//indexOf : helps us to find the index of an element in the array
console.log(fruits.indexOf("Banana")); // 1
console.log(fruits.indexOf("Orange")); // -1 (not found)

//short method : sorts the elements of the array in ascending order
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Grapes", "Mango"]

//slice : helps us to extract a portion of the array without modifying the original array
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // ["Banana", "Grapes"]

//reverse : reverses the order of the elements in the array
fruits.reverse();
console.log(fruits); // ["Mango", "Grapes", "Banana", "Apple"]

//splice : helps us to add/remove elements from the array
fruits.splice(1,2);
console.log(fruits); 

fruits.splice(2, 0, "Pineapple");
console.log(fruits); // ["Mango", "Grapes", "Pineapple", "Apple"]



//for each loop : helps us to iterate over the elements of the array
fruits.forEach(function(fruit, index) {
    console.log(index + ": " + fruit);
});
