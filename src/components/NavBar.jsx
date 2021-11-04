import { Link } from 'react-router-dom';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {
    return(
        <Navbar id="NavBar" expand="lg">
            <Container>
                <a>
                    <img src="../../logo2.png" alt="logo" />
                </a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                    <Nav.Link>¿Cómo comprar?</Nav.Link>
                    <NavDropdown title="Categorías" id="basic-nav-dropdown">
                    <NavDropdown.Item><Link to = '/categoria/Romantica'>Romantica</Link></NavDropdown.Item>
                    <NavDropdown.Item> <Link to='/categoria/Fantasia'>Fantasia</Link> </NavDropdown.Item>
                    <NavDropdown.Item><Link to='/categoria/Ciencia Ficcion'>Ciencia Ficcion</Link></NavDropdown.Item>
                    <NavDropdown.Item>Policiales</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>No Ficción</NavDropdown.Item>
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