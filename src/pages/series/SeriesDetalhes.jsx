import React, { useEffect, useState } from 'react'
import { Card, Col, NavItem, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const SeriesDetalhes = () => {

    const params = useParams()

    const [tv, setTv] = useState({})
    const [atores, setAtores] = useState([])
    const [temporadas, setTeporadas] = useState([])
    const [elenco, setElenco] = useState([])
 

    useEffect(() => {
        apiFilmes.get('tv/' + params.id + '?language=pt-BR').then(resultado => {
            setTv(resultado.data)
        })
        apiFilmes.get('tv/' + params.id + '/credits?language=pt-BR').then(resultado => {
            setAtores(resultado.data.cast)
            setElenco(resultado.data.crew)
             })
        }, [])
        useEffect(()=>{
            const promessa = apiFilmes.get('tv/' + params.id + '?language=pt-BR')
            promessa.then(resultado=>{setTeporadas(resultado.data.seasons);
            })
        }, [])



  return (
    <div>
                {!tv.id && <h1>...Carregando</h1>}
                {tv.id && 
                <div> 
                    <h1>{tv.name}</h1>
                    <Row>
                    <Col md={4}>
                                <Card>
                                    <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + tv.poster_path} />
                                </Card>
                            </Col>
                            
                
                   
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
                            </Row>
                            <div>                                
                           <Row>
                            {temporadas.map(item =>(
                                <Col className='mb-3' key={item.id}>
                                 <Card>
                                 <Card.Img variant="top" src={ item.poster_path ? 'https://image.tmdb.org/t/p/w500'+ item.poster_path : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6pdTz5L8m-BnQaPfYvrKXSpvTxri_DDtSqw&usqp=CAU'} />
                                    <Card.Body>
                                      <Card.Title>{item.name} - {item.season_number}</Card.Title>
                                    </Card.Body>
                                  </Card>
                                 </Col>
                               ))}
                           </Row>
                         </div>

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