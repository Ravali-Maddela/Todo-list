import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function Header() {
  return (
    <div className='nav'>
        <Navbar className='bg-warning' fixed='top'>
            <Container>
                <Navbar.Brand href='/'>TodoList</Navbar.Brand>
                <Nav>
                    <Nav.Link href='/add'>Add</Nav.Link>
                    <Nav.Link href='/update'>update</Nav.Link>
                    <Nav.Link href='/delete'>Delete</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
      
    </div>
  )
}
