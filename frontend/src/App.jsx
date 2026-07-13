import React, { useState } from 'react' //rafce: short form for boiler template
import User from './User.jsx'

const App = () => {
  // const[count,setCount]=useState(0)
  function increase(){
    setCount(count+1);
  }
  return (
    <>
{/* 
      <User name="Rushu" age={21} college="IIC" Semester={5} />
      <User skills={ ["HTML","CSS","JS"] } /> */}

      <h1>{count}</h1>
      <button onClick={increase} className='bg-red-500 text-blue-800'>increment</button>


    </>
  )
}

export default App
