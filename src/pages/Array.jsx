import React from 'react'

const Array = () => {

  const carros = ["fusca", "Gol", 'Celta', 'Corola', 'Corsa']
  const pessoas = ['Lucas', 'Orion', 'Cleitin', 'Felipe']

  return (
    <div>

      <h1>
        Array
      </h1>
      <h2>
        Carros
      </h2>

      {carros.map(item => (
        <p>{item}</p>
      ))}
      <h2>
        Pessoas
      </h2>
      <ol>
        {pessoas.map(item => (
          <li>{item}</li>
        ))}
      </ol>





    </div>
  )
}

export default Array