import React, { useEffect } from 'react';
import { UseFetch } from '../hooks/UseFetch.js';
import { UseCounter } from '../hooks/UseCounter.js';
import { LoadingMessage } from './LoadingMessage.jsx';
import { PokeCard } from './PokeCard.jsx';

export const MultipleCustomHooks = () => {
  const {counter,increment,decrement,reset} = UseCounter(1);
  const uri=`https://pokeapi.co/api/v2/pokemon/${counter}`
  const {data,loading} = UseFetch(uri)
 
  useEffect(() => {
    
  }, [counter])


  return (
    <>
      <h1>MultipleCustomHooks</h1>
      <hr />

      {

      loading ? 
      <LoadingMessage/>:
      (  <PokeCard 
        id={data?.id}
        name={data?.name} 
        sprites={
         
          [data?.sprites.front_default,data?.sprites.back_default]
        
         }
        />
      )
      }
      <h2>{data?.name }</h2>

      <button onClick={(event) => counter >1 && decrement(1)}>Anterior</button>
      <button onClick={reset}>Reset</button>
      <button 
      onClick={(event) => increment(1)}
      disabled={loading}
      >Siguiente</button>
    </>
  )
}
