import React, { useEffect, useState } from 'react'
import { Card, Col, NavItem, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const SeriesDetalhes = () => {

    const params = useParams()

    const [tv, setTv] = useState({})
    const [atores, setAtores] = useState([])
    const [seasons, setSeasons] = useState([])
    const [elenco, setElenco] = useState([])
 

    useEffect(() => {
        apiFilmes.get('tv/' + params.id + '?language=pt-BR').then(resultado => {
            setTv(resultado.data)
        })
        apiFilmes.get('tv/' + params.id + '/credits?language=pt-BR').then(resultado => {
            setAtores(resultado.data.cast)
            setElenco(resultado.data.crew)
             })
        apiFilmes.get('tv/' + params.id + '/season?language=pt-BR').then(resultado => {
            setSeasons(resultado.data.cast)
                 })

        }, [])


  return (
    <div>
                {!tv.id && <h1>...Carregando</h1>}
                {tv.id && 
                <div> 
                    <h1>{tv.title}</h1>
                    <Row>
                    <Col md={4}>
                                <Card>
                                    <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + tv.poster_path} />
                                </Card>
                            </Col>
                            </Row>
                
                   
                            <Col md={8}>
                                <p><strong>Título Original: </strong>{tv.original_title}</p>
                                <p><strong>Popularidade: </strong>{tv.popularity}</p>
                                <p><strong>Data de Lançamento: </strong>{tv.release_date}</p>
                                <p><strong>Orçamento: </strong>{tv.budget}</p>

                                <p><strong>Gêneros: </strong>
                                    {tv.genres.map(item => (
                                        <span key={item.id}>{item.name}, </span>
                                    ))}
                                </p>

                                <p><strong>Sinopse: </strong>{tv.overview}</p>

                                <Link className='btn btn-primary' to={-1}>Voltar</Link>

                            </Col>
                            <Col md={12} className="mt-3">
                                <h1>Temporadas</h1>
                            </Col>

                            <Col md={12} className="mt-3">
                                <h1>Atores</h1>
                            </Col>
                            <Row>
                                {atores.map(item => (
                                    <Col className="mb-3" md={2} key={item.id}>
                                        <Link to={'/atores/' + item.id}>
                                            <Card title={item.name}>
                                                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.profile_path} />
                                            </Card>
                                        </Link>
                                    </Col>
                                ))}
                            </Row>






                    

                  
            </div>  






                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                }





    </div>
  )
}

export default SeriesDetalhes