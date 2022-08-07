import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar className="nav_behind" collapseOnSelect expand="lg" bg="transparent" variant='dark'>
      <Container>
      <Navbar.Brand href="#home" className="align-items-center ml-auto">
      <img className="main-logo-mb" src="/public/images/logo-main.png" alt="" />
      </Navbar.Brand>
        <Navbar.Toggle className="f-align" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="main-nav-left">
        <Nav>
            <Nav.Link href="#deets"><img src="/public/images/search-icon.svg" alt="" /></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Stores
            </Nav.Link>
            <NavDropdown title="INR" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">EUR</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                GBP
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">US</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="main-nav-center"> 
         
          <Navbar.Brand href="#home" className="align-items-center ml-auto"><img className="main-logo" src="/public/images/logo-main.png" alt="" /></Navbar.Brand>
          <div className="center-links">
          <Nav.Link href="#deets">Brands</Nav.Link>
          <Nav.Link href="#deets">Watches</Nav.Link>
          <Nav.Link href="#deets">Jewelry</Nav.Link>
          <Nav.Link href="#deets">Gifts</Nav.Link>
          <Nav.Link href="#deets">Sale</Nav.Link>
          <Nav.Link href="#deets">About</Nav.Link>
          <Nav.Link href="#deets">Contact</Nav.Link>
          </div>
          </Nav> 

          <Nav className="main-nav-right f-align">
            <Nav.Link href="#deets">Wishlist</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Account
            </Nav.Link>
            <Nav.Link href="#deets"><img src="/public/images/cart-icon.svg" alt="" /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;