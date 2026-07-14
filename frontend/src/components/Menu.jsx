import React, { useContext } from 'react'
import Profile from './Profile'
import UserContext from '../context/userContext'

const Menu = () => {
        const user1 =useContext(UserContext)
  return (
    <>
         <Profile />
        <h1>Welcome to Menu {user1} !</h1>

    </>
  )
}

export default Menu
