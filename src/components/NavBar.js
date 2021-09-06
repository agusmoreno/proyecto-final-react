import React, { Component } from "react";
import { Button,Navbar,Nav,Form,FormControl,NavDropdown } from 'react-bootstrap';
import CartWidget from "./CartWidget"

class NavBar extends Component {
  render() {
    return (
        <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Richa</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="Catalogo" id="basic-nav-dropdown">
        <NavDropdown.Item href="#hairCare">Hair Care</NavDropdown.Item>
        <NavDropdown.Item href="#facialCare">Facial Care</NavDropdown.Item>
      </NavDropdown>
          <Nav.Link href="#contacto">Contacto</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
          <CartWidget />
        </Form>
      </Navbar>
    );
  }
}

export default NavBar;