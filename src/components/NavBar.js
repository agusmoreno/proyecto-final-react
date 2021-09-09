import { Button,Navbar,Nav,Form,FormControl,NavDropdown } from 'react-bootstrap';
import CartWidget from "./CartWidget"
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <Navbar bg="light" variant="light">
        <Link to="/">
        <Navbar.Brand href="#home">Richa</Navbar.Brand>
        </Link>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="Catalogo" id="basic-nav-dropdown">
        <NavDropdown.Item href="#hairCare">
        <Link to="/category/hairCare">
          Hair Care
          </Link>
          </NavDropdown.Item>
        <NavDropdown.Item href="#facialCare">
        <Link to="/category/facialCare">
          Facial Care
        </Link>
          </NavDropdown.Item>
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


export default NavBar;