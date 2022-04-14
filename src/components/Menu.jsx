import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>

      <Navbar bg="dark" variant="dark" className="mb-3">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
          <NavDropdown title="Carros" className='show' id="basic-nav-dropdown">
            <Link className="dropdown-item" to="/carros">Carros</Link>
            <Link className="dropdown-item" to="/array">Array</Link>
            <Link className="dropdown-item" to="/objeto">Objeto</Link>
            <Link className="dropdown-item" to="/pagina1">Página 1</Link>
            </NavDropdown>
        <NavDropdown title="Filmes" className='show' id="basic-nav-dropdown">
            <Link className="dropdown-item" to="/filmes/populares">Filmes Populares</Link>
            <Link className="dropdown-item" to="/filmes/lancamentos">Filmes Lançamento</Link>
            <Link className="dropdown-item" to="/filmes/Em/Cartaz">Filmes em Cartaz</Link>
        </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Menu