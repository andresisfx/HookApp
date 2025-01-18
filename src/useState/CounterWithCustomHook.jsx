import React from "react";
import { useState } from "react";
import { UseCounter } from "../hooks/UseCounter";


export const CounterWithCustomHook = () => {
  const {counter,increment,decrement,reset} = UseCounter();
    
    return (
        <>
         <div className="container text-center mt-5 align-items-center">
            <h1>CounterWithCustomHook:{counter} </h1>
            
            <button  className="btn btn-primary me-5 w-25"  onClick={() => decrement(2)}>-1</button>
            <button  className="btn btn-primary me-5 w-25" onClick={reset}>Reset</button>
            <button  className="btn btn-primary me-5 w-25" onClick={() => increment(2)}>+1</button>
          </div>   
        </>
    )
}