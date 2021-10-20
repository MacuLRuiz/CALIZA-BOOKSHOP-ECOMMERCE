
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {
    return(
        <Navbar id="NavBar" expand="lg">
            <Container>
                <a>
                    <img src="../../logo2.png" alt="" />
                </a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Conocenos</Nav.Link>
                    <Nav.Link href="#link">¿Cómo comprar?</Nav.Link>
                    <NavDropdown title="Categorías" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Fantasía</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Romance</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">ciencia ficción</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Policiales</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">No Ficción</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <div class="icon-container">
                    <CartWidget/>
                    <a>
                        <img class="icon" src="../../user.svg" alt="user icon" />
                    </a>
                </div>

            </Container>
        </Navbar>

    )
}

export default NavBar