import React from 'react'
import { UseFetch } from '../hooks/UseFetch.js'

export const MultipleCustomHooks = () => {
  const uri='https://pokeapi.co/api/v2/pokemon/4'
  const {data,loading} = UseFetch(uri)

  return (
    <>
      <h1>MultipleCustomHooks</h1>
      <hr />

      {loading && <div className='alert alert-info'>Loading...</div>}
      <h2>{data?.name }</h2>
    </>
  )
}
