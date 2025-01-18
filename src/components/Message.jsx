import React from 'react'
import { useState, useEffect } from 'react'
export const Message=()=>{

  
    const [cords,setCords] = useState({x:0,y:0})

    useEffect(()=>{
      const onMouseMove=({x,y})=>{
        setCords
        ({
          x,
          y
        })  
      }


      window.addEventListener('mousemove', onMouseMove)

      return()=>{
        window.removeEventListener('mousemove', onMouseMove)
      }

    },[]) 
  return (
    <div>
        <h1>El usuaio Ya existe</h1>
         {
            JSON.stringify(cords)
         }
    </div>
  )
}


