import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import apiFilmes from '../../services/apiFilmes'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FilmesPopulares = () => {

  const [filmes, setFilmes] = useState([])

  useEffect(() => {

    apiFilmes.get('movie/popular?language=pt-BR').then(resultado => {
      setFilmes(resultado.data.results)
    })






  }, [])




  return (
    <div>


      <h1> Filmes Populares</h1>
      <Row>
        {filmes.map(item => (
          <Col md={3} className='mb-3'>
            <Card>
              <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path}/>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.original_title}
                </Card.Text>
                <Card.Text>
                  Popularidade: {item.popularity}
                </Card.Text>
                <Link className='btn btn-danger' to={'/filmes/' + item.id}>
                     Ver Detalhes
                
                </Link>
              </Card.Body>
            </Card>



            
            



          </Col>
        ))}
      </Row>


    </div>
  )
}

export default FilmesPopulares