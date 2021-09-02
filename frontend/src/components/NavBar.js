import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-scroll'

function NavBar(){

    return (
        <div className='nav-bar'>
            <Navbar bg='dark' expand='sm' variant='dark' fixed='top'>
                <Container>
                    <Navbar.Brand>
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link>Projects</Nav.Link>
                        <Nav.Link>Music</Nav.Link>
                        <Nav.Link>Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            
        </div>
    )
}
export default NavBar