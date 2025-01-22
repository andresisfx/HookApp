import React from 'react'
import {UseCounter} from '../hooks/useCounter'
import {Small} from './Small'
import { useState } from 'react'

export const MemoHook = () => {

    const {counter,increment} = UseCounter(10)
    const [show, setShow] = useState(true)
  return (
    <>
        <h1>Counter: <Small value={counter} /></h1>
        <hr />

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
