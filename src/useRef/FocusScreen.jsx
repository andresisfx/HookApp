

import React,{useRef} from 'react'

export const FocusScreen = () => {
    
    const inputRef=useRef()
    const onclickHandler=()=>{
      inputRef.current.select()
    }
  return (
   <>
     <h1>FocusScreen</h1>

     <hr/>

     <input
      ref={inputRef}
      type="text"
      placeholder='Ingrese su nombre'
      className='form-control'
     />

     <button
      type='button'
      onClick={onclickHandler}
      className='btn btn-primary mt-2'
     >
     Set focus
     </button>
   </>
  )
}
