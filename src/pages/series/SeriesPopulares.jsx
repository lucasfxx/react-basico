import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import apiFilmes from '../../services/apiFilmes'

const SeriesPopulares = () => {

    const [series, setSeries] = useState([])

    useEffect(() => {

        apiFilmes.get('tv/popular?language=pt-BR').then(resultado => {
            setSeries(resultado.data.results)
        })

    }, [])



  return (
    <div>
        <h1>Series Populares</h1>
        { series.length === 0 && <h1>...Carregando</h1>}

        <Row>
            {series.map(item => (
                <Col key={item.id} md={3} className="mb-3">
                    <Card>
                    <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                            <Card.Body>
                                <Card.Title>{item.title} ({item.id})</Card.Title>
                                <Card.Text>{item.original_title}</Card.Text>
                                <Card.Text>Popularidade: {item.popularity}</Card.Text>
                                </Card.Body>    
                    </Card>



                </Col>
            ))}




        </Row>



    </div>
  )
}

export default SeriesPopulares