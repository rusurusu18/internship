import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const User = () => {
    const[name, setName]=useLocalStorage("username",'value')
  return (
    <div>
      <input value={name} onChange={(e)=>{setName(e.target.value)}} />
      <h2>{name}</h2>
    </div>
  )
}

export default User
