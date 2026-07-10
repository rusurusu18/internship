import React from 'react' //rafce: short form for boiler template
import User from './User.jsx'

const App = () => {
  return (
    <>

      <User name="Rushu" age={21} college="IIC" Semester={5} />
      <User skills={ ["HTML","CSS","JS"] } />
    </>
  )
}

export default App
