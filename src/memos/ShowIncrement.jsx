import React from 'react'

export const ShowIncrement =React.memo( ({increment}) => {
   console.log('me volvi a generar')

   // hay que tener en cuenta que la funcion increment que recibimos como parametro es el callback que está dentro del calback osea
   //const incrementFunction = useCallback( 
    //   (value) =>{ ESTO ES "increment" Y ESTE VALUE ES "5" PARA QUE INCREMENTE DE 5 EN 5
    //        setCounter((value) => value + 1)
     //  },[])
  return (
    <button
    className='btn btn-primary'
    onClick={ () => increment(5)}
    >
       incrementing 
    </button>
  )
})
