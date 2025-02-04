import React, { useEffect } from 'react';
import { UseFetch } from '../hooks/UseFetch.js';
import { UseCounter } from '../hooks/UseCounter.js';
import { LoadingQuote } from './LoadingQuote.jsx';
import { PokeCard } from './PokeCard.jsx';
import { Quote } from './Quote.jsx';




export const MultipleCustomHooks = () => {

    const { counter, increment } = UseCounter(1);
    const { data, isLoading, hasError } = UseFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    if(isLoading){
      console.log("existe el loadig")
    }
    const { author, quote } = !!data && data[0];
    
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading
                 ? <LoadingQuote/>
                 : <Quote author={ author } quote={ quote } />
            }
                      
            <button 
                className="btn btn-primary"
                disabled={ isLoading }
                onClick={ () => increment() }>
                Next quote
            </button>

        </>
    )
}