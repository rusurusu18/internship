import React from 'react'

const User = (props) => { //can add {name, college, age here only} thorai parameter huda use 
  return (
    <>
      <h1 className='bg-red-500 text-amber-200'>Name:{props.name}</h1>

      <h2 className='w-2 h-2 font-bold'>{props.college}</h2> 
       {/* can use only college inside the bracket in another method*/}
        
      <h3 className='text-3xl m-2.5'>{props.Semester}</h3>

      <ul> 
        {props.skills.map((skill,index) => (
        <li key={index}>{skills}</li>
      ))} 
      </ul>


    </>
  )
}

export default User
