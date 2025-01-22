import React from 'react'
import {UseCounter} from '../hooks/useCounter'

import { useState, useMemo } from 'react'

const heavyStuff = (iterationNumber=100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('Ahi vamos')
  }
  return `${iterationNumber} iteraciones realizadas`
}

export const MemoHook = () => {

    const {counter,increment} = UseCounter(4000)
    const [show, setShow] = useState(true)
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])
  return (
    <>
        <h1>Counter: <small>{counter}</small></h1>
        <hr />
        <h4>{memorizedValue}</h4>
        <button
        className='btn btn-primary '
        onClick={() => increment(1)}
        >  
            increment
        </button>

        <button
        className='btn btn-outline-primary ms-3'
        onClick={() => setShow(!show)}
        >  
            Show/Hide {JSON.stringify(show)}
        </button>
    </>
  )
}
