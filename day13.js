//arrow function
//it is a compact syntax for writing function expressions using the => (arrow) operator.
// An arrow function is a shorter and modern way to write a function in JavaScript.

// const hello()=>{
//     console.log ("hello world")
// };
// hello()

// //
// const sum=(a,b)=>{
//     return a+b;
// }
// console.log(sum(10,12))

// //template literals
// //it is string enclosed in backicks(``)

// let name="Rushu"
// let surname="K.C."
// console.log("name"+ name)
// console.log(`My name is ${name} ${surname}`)

//why use multiple template literals
//- cleaner code
//- easier string formatting
//- supports multiple string

//import and export
//export allows us to share variable, funxtion or classes from one javascript file to another
//import allows us to use those exported itemss in another javascript file
//default and named export

//Named export
export default function add(a,b){
    return a+b;
}

export default function substract(a,b){
    return a-b;
}
//default is used to export the single items



//-----------------------------------------------------------//
//---------------------------REACT---------------------------//
//-----------------------------------------------------------//

//what is React.js?

//It is a javascript library developed by Meta(facebook) for building
// fast, interactive and reusable user interface(UI), especially single page applications

//features of react
//-component-Based architecture
//-virtual DOM
//-reusable component
//-fast performance


//What is SPA(single page applications)?
//--It loads on html page and updates only the necessary parts of the page 
//without a full page refresh

//vite is a modern frontend build tool used to create react projects quickly 

//advantages of vite
// very fast setup
// hot module replacement
// lightweight


//realdom vs virtual dom
//Real dom is the actual dom created and managed by the vrowser.
//whenever javascript changes something the browser updates the real dom
//virtual dom is a lightweight javascript representation(copy)
// of thereal DOM maintained by react.

//component like exammple button change
//virtual dom(copy of real dom)updates
//compare with previous virtual dom
//find diffrences
//updates only changes elements
//real dom 
