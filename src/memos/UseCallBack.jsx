
import React, { useState, useCallback, useEffect } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const UseCallBack = () => {

    const [counter, setCounter] = useState(1)
    // const incrementFunction =()=>{
    //     setCounter(counter + 1)
    // }

   //  reemplazamos lo anterior por useCallback
   const incrementFunction = useCallback( 
    (value) =>{
         setCounter((value) => value + 1)
    },[])

    useEffect(() => {
       incrementFunction(3)  
    },[incrementFunction])
  return (
    <>
      <h1>UseCallBack hook {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFunction}/>
    </>
  )
}
// useCallback: Memoriza la referencia de una función
// Cuando usas useCallback, le dices a React que memorice la función incrementFunction y solo la vuelva a crear si cambia alguna dependencia en el array de dependencias ([] en tu caso).

// Sin useCallback: En cada renderizado, React crea una nueva instancia de la función incrementFunction. Esto significa que cualquier dependencia que use esa función (por ejemplo, en el useEffect o en un componente hijo) detectará un cambio, lo que podría causar un bucle infinito o re-renderizados innecesarios.

// Con useCallback: React reutiliza la misma instancia de la función a menos que cambie alguna de las dependencias. Esto es importante porque el array de dependencias de useEffect ahora puede incluir incrementFunction sin riesgo de que se ejecute innecesariamente.

// 2. useEffect: Ejecutar efectos basados en dependencias
// En el caso de tu código, useEffect tiene como dependencia incrementFunction. Si la referencia de incrementFunction cambia, useEffect se ejecutará nuevamente.

// Sin useCallback: incrementFunction cambia en cada renderizado porque React crea una nueva referencia de la función en cada render. Esto haría que useEffect se ejecutara en cada renderizado, lo que puede causar un bucle infinito si incrementFunction actualiza el estado.

// Con useCallback: La referencia de incrementFunction no cambia en cada renderizado (gracias a useCallback), lo que evita que useEffect se dispare innecesariamente.