import { Link } from 'react-router-dom';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {
    return(
        <Navbar id="NavBar" expand="lg">
            <Container>
                <Link to = '/'><img id="logo" src="../../logoCaliza.png" alt="logo" /></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link>¿Cómo comprar?</Nav.Link>
                    <NavDropdown title="Categorías" id="basic-nav-dropdown">
                    <NavDropdown.Item href='/category/Romantica'> Romántica </NavDropdown.Item>
                    <NavDropdown.Item href='/category/Fantasia'> Fantasía </NavDropdown.Item>
                    <NavDropdown.Item href='/category/Ciencia Ficcion'>Ciencia Ficción</NavDropdown.Item>
                    <NavDropdown.Item href='/category/Suspenso'>Suspenso</NavDropdown.Item>
                    <NavDropdown.Item href='/category/Terror'>Terror</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <div className="icon-container">
                    <CartWidget/>
                
                </div>

            </Container>
        </Navbar>

    )
}

export default NavBar