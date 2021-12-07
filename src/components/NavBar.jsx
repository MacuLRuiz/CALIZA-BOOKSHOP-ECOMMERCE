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

              <Link to='/'>Home</Link>
                <NavDropdown title="Categorías" id="basic-nav-dropdown">
                    <Link className="item-category" to='/category/Romantica'> Romántica</Link>
                    <Link className="item-category" to='/category/Fantasia'> Fantasia</Link>
                    <Link className="item-category" to='/category/Ciencia Ficcion'> Ciencia Ficción</Link>
                    <Link className="item-category" to='/category/Suspenso'>Suspenso</Link>
                    <Link className="item-category" to='/category/Terror'> Terror</Link>
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