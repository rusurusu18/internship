import React, { useEffect, useState } from 'react'

const Timer=()=> {
    const[seconds,setSeconds]=useState(0)
    //mounting + updating + unmounting
    useEffect(()=>{
        const timer = setInterval(()=>{
            setSeconds((prev)=>prev+1)
        },1000)
        return()=>{
            clearInterval(timer)
            console.log("component unmounted")
        }
    },[])
  return (
    <>
      <h2>Timer: Seconds {seconds}</h2>
    </>
  )
}

export default Timer
