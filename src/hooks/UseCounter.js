import { useState } from "react"

export const UseCounter = (initialState) => {
    const [counter, setCounter] = useState(initialState)

    const increment = (value) =>{
        
     setCounter(counter + value)
    }
    const decrement = (value) => {
        if(counter < 1) return
        setCounter(counter - value)
    }
    const reset = ()=> setCounter(initialState)

    return {counter, increment, decrement, reset}
}