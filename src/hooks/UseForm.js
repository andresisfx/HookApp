import { useState } from "react";

import React from 'react'

export const UseForm = (initialForm={}) => {


    const [formState, setFormState] = useState(initialForm)
  
     const handleInputChange=({target})=>{
       const {name, value} = target
       setFormState({
         ...formState,
         [name]:value
       })
     }
        const onResetForm=(e)=>{ 
          e.preventDefault()
          setFormState(initialForm)
        }
  return {
    ...formState,
    formState,
    handleInputChange,
    onResetForm
  }
}

