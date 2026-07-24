import React from 'react'
import useToogle from '../hooks/useToogle'

const Toogle = () => {
    const[darkmode, toogle]=useToogle()
  return (
    <div>
    <h1>{darkmode ? "dark mode ": "Light mode "}</h1>
      <button onClick={toogle}>toogle theme</button>
    </div>
  )
}

export default Toogle
