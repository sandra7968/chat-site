import React from 'react'
import  {Container, Nav, Navbar, Button , NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function header() {
  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand ><Link style={{textDecoration:'none'}} to={'/'}><i className="fa-solid fa-feather  me-2"></i>Swoosh!</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link ><Link style={{textDecoration:'none'}} to={'/login'}>Login</Link></Nav.Link>
            <Nav.Link ><Link style={{textDecoration:'none'}} to={'/chat'}>Chat</Link></Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default header