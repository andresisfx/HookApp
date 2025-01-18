import React, { useEffect } from 'react'
import { useState } from 'react'
import { Message } from './Message'
import { UseForm } from '../hooks/UseForm'

export const SimpleForm=()=> {

        const {formState,nameUser,onResetForm,emailUser,passwordUser,handleInputChange} = UseForm(
          {
            nameUser:'',
            emailUser:'',
            passwordUser:''
          }
        )
      
        
      

      return (
        <>
        
          <div className='vh-100 vw-100 d-flex justify-content-center align-items-center'>
                <form action=""  className='w-50 p-3 bg-primary border-rounded shadow-sm'>
                    <div className="mb-3">
                      <label htmlFor="exampleInputName1" className="form-label">Name</label>
                      <input value={nameUser} onChange={handleInputChange} type="text" name='nameUser' className="form-control" id="exampleInputName1" aria-describedby="emailHelp"/>
                      <div  id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                      <input value={emailUser} onChange={handleInputChange} type="email" name='emailUser' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                      <div  id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                      <input value={passwordUser} onChange={handleInputChange}   type="password" name ='passwordUser' className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3 form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                      {
                        (formState.emailUser==='Andres'&&<Message/>)
                      }
                      <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button onClick={(event) => onResetForm(event)} className="btn btn-danger mx-5">Reset</button>

              </form>
              
          </div>
        </>
      )
}
