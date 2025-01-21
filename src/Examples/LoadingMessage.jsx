import React from 'react'
import { useState } from 'react'

export const LoadingMessage = () => {
    const [loading, setLoading] = useState(true)
  return (
   <section
    style={{
     
     height: 200
    }}
    className='alert alert-info p-0 m-0 d-flex justify-content-center align-items-center'
   >
    <h1>Loading</h1>
   </section>
  )
}
