import React from 'react'

export const PokeCard = ({id,name,sprites}) => {
   
  return (
    <section
    style={{height: 200}}
    >
      
      <h2 className='text-capitalize'>#{id} - {name}</h2>

      <div className='container'>
       {
        sprites.map(spr=>(
          <img className='img-fluid mb-2 w-50' key={spr} src={spr} alt={name} />
       ))}
      </div>

    </section>
  )
}
