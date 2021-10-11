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
          <NavDropdown title="Categories" id="basic-nav-dropdown">
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
        </Nav>
        <CartWidget />
      </Navbar>
    );
  }


export default NavBar;