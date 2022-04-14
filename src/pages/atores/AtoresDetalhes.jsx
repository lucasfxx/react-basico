import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const AtoresDetalhes = () => {

  const params = useParams()
  const [ator,  setAtor] = useState([])


  useEffectfect(() => {
    apiFilmes.get('person/' + params.id + '?language=pt-BR').then(resultado => {
        setFilme(resultado.data)
    })
}, [])

  return (
    <div>AtoresDetalhes</div>
  )
}

export default AtoresDetalhes