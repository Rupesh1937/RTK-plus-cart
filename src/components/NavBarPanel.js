import React from 'react'
import {  Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBarPanel() {
    const cartProducts = useSelector(state => state.cart)
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">ReduxToolkit</Navbar.Brand>
          
          
            <Nav>
              <Nav.Link to="/" as={Link}>
                Products
              </Nav.Link>
            </Nav>
            <Navbar.Toggle></Navbar.Toggle>
            <Navbar.Collapse className='justify-content-end'>
                <Navbar.Text>
                    <Nav.Link to="/cart" as={Link}>My Bag {cartProducts.length}</Nav.Link>
                </Navbar.Text>
            </Navbar.Collapse>
          
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarPanel
