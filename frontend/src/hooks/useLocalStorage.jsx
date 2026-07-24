import React, { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
    const[value,setValue]=useState(()=>{
        const storevalue= localStorage.getItem(key)
})

    const saveValue = (newValue)=>{
        setValue(newValue)

        localStorage.setItem(key, JSON.stringify(newValue))

    }
  return [value, saveValue]
}

export default useLocalStorage
