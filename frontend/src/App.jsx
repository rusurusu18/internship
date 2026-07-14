// import React from 'react'
// import { useState } from 'react'
// import React from 'react'
// import { useState } from 'react'


// const App = () => {
//   const [count,setCount]=useState(1)
//   function increase(){
//     setCount(count+1);
//   }
//   return (
//     <>
//     <h1>{count}</h1>
//     <button onClick={increase} className='bg-amber-800 text-blue-800'>increment</button>
    
      
//     </>
//   )
// }
/// example of the useEffect
// export default App
// setIntervale is used to repeatedly execute a function or a code snippet at fixed time intervals

//import React, { useEffect, useState } from 'react'


// const App= ()=>{
//     const[count,setCount]=useState(0)
//     useEffect(()=>{
//         console.log("component mounted")
//         return()=>{
//             console.log("component removed")
//         }
//     },[count])
//     return(
//         <>
//         <h1>hello mounting</h1>
//         <button onClick={()=>{setCount(count+1)}}>Increment</button>
//         </>
//     )
// }

// export default App



//Example of Life cycle 

// import React, { useState } from 'react'
// import Timer from "./components/Timer"


// const App = () => {
//   const[showerTimer,setShowerTimer]=useState(true)
//   return (
//     <>
//       <h1>React Lifecycle with timer</h1>
//       <button onClick={()=>{setShowerTimer(!showerTimer)}}>{showerTimer ? "stop Timer" : "start Timer"}</button>
//       <hr />
//       {showerTimer && <Timer />}
//     </>
//   )
// }

// export default App



import React from 'react'
import UserContext from './context/userContext'

const App = () => {
    const name="Rushu"
  return (
    <UserContext.Provider value={name} >
      <Navbar />

    </UserContext.Provider>
  )
}

export default App

//UserContext makes the user available to every components inside 
