import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import apiFilmes from '../../services/apiFilmes'
import { useParams } from 'react-router-dom'


const FilmesDetalhes = () => {



    const params =  useParams()

    const [Filme, setFilme] = useState({})

  
    useEffect(() => {
    

        apiFilmes.get('movie/' + params.id + '?language=pt-BR').then(resultado => {
          console.log(resultado.data)
        })
    
    
    
    
    
    
      }, [])





  return (
    <div>
        <h1>{filme.title}</h1>
        
        </div>
  )
}

export default FilmesDetalhes