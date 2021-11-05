import { Link } from 'react-router-dom';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {
    return(
        <Navbar id="NavBar" expand="lg">
            <Container>
                <Link to = '/'><img src="../../logo2.png" alt="logo" /></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                    <Nav.Link>¿Cómo comprar?</Nav.Link>
                    <NavDropdown title="Categorías" id="basic-nav-dropdown">
                    <NavDropdown.Item><Link to = '/category/Romantica'>Romántica</Link></NavDropdown.Item>
                    <NavDropdown.Item> <Link to='/category/Fantasia'>Fantasía</Link> </NavDropdown.Item>
                    <NavDropdown.Item><Link to='/category/Ciencia Ficcion'>Ciencia Ficción</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to='/category/Suspenso'>Suspenso</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to='/category/Terror'>Terror</Link></NavDropdown.Item>
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