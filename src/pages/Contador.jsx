import React from 'react'
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const Contador = () => {

    // let numero = 0;
    let [numero, setNumero] = useState(0)

    

    function somar(){
        setNumero(++numero)
        console.log(++numero)

    }
    function diminui(){
        setNumero(--numero)
        console.log(--numero)

    }
   




  return (
    <div>
        
        <h1>Contador</h1>

       
        {numero}<br/>
        <Button variant="success" onClick={somar} > + </Button>
        <Button variant="danger" onClick={diminui} > - </Button>
        
        
        </div>
  )
}

export default Contador