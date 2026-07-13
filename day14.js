//props are used to pass data from parent component to child components
//in props only can send data from parent to child

import { useState } from "react";

//prop are read only (no changes can be made)

//App.jsx as parent
//students.jsx
//users.jsx
//teacher.jsx


//state is a built in react object used to store data that can change over time 
//when the state change , react automatically updates the user interface(UI)
//like: number in cart increases, notifications turning to 0

//hooks: special rreact inbuilt function that lets function components use react features such as:
//useState, useEffect, useContext, useMemo, etc

const [value, setValue] = useState(0)


//class App extends React.Component{ }

//props vs state

//props                                                         |        state
//props are data passed from a parents to child component       | state is data that is managed within a component when state changes, the component re-renders
//props are immutable -- it cannot be changed by the child      | state are mutable -- it can chyange over time 
//does not trigger re-render by itself                          | state updates may trigger re-render of the component
//used for passing data from parent to child component          | used of local data that change in the component

//why do we use hooks
//1 useState and others many reactfeatures able to used in functional components
//2 simpler code
//3 re-useful logic
//4 easier testing


//useState in React
//it is a React Hook that lets us to add state to functional components it returns a state variable and a function to update that state

// how its works 
// initailize the state    useState() 0
//update the state using the setState/setCount() 1
// components re-renders with new state 1

// useEffect 

 //it is a react hook that let us perform side effects in functional components
 //types of the useeffect     
 //1 not dependencies array    runs after every render (mounted and updated)
 useEffect(()={

 });

 //2 empty dependencies array []   runs only once after the component is mounted 
 // useEffect()=>{

 //},[];

 //3 with dependencies array[deps]  runs when the specified dependencies changes


 // usecases of the useEffect

 //1 fetching data from apis 
 //2 updating the document title or meta data
 //3 controllig timers (settimeout/setinterval())



