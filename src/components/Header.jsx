import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar className="nav_behind" collapseOnSelect expand="lg" bg="transparent" variant='dark'>
      <Container>
      <Navbar.Brand href="#home" className="align-items-center ml-auto">.
      <img className="main-logo-mb" src="/public/images/logo-main.png" alt="" />
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="main-nav-left">
        <Nav>
            <Nav.Link href="#deets"><img src="/public/images/search-icon.svg" alt="" /></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Stores
            </Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
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

          <Nav className="main-nav-center"> 
         
          <Navbar.Brand href="#home" className="align-items-center ml-auto"><img className="main-logo" src="/public/images/logo-main.png" alt="" /></Navbar.Brand>
          <div className="center-links">
          </div>
          </Nav> 

          <Nav className="main-nav-right">
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;