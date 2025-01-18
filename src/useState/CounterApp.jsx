import React from 'react'
import { useState } from 'react'

export const CounterApp = () => {
    const [count, setCount] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30})

    return (
        <>
            <h1>Counter1: {count.counter1}</h1>
            <h1>Counter2: {count.counter2}</h1>
            <h1>Counter3: {count.counter3}</h1>
            <button onClick={() => setCount(
                {
                    ...count, counter1: count.counter1 + 1
                }
                )}
                className='btn btn-primary w-25 mx-5'
            >+1</button>
        </>
    )
}