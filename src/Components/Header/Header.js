import { Navbar, Nav, Container, Row, Col,} from 'react-bootstrap';

function Header() {
    return (
        <header className="text-white text-start py-4">
            <div className='wrapper'>
                <Row>
                    <Col md={4} className="portfolioTitle">
                        <h1>My Portfolio</h1>
                    </Col>
                    <Col md={8} className="portfolioNav">   
                        <Navbar expand="lg">
                            <Container>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto">
                                    <Nav.Link href="#about">About Me</Nav.Link>
                                    {/* <Nav.Link href="#projects">Projects</Nav.Link> */}
                                    <Nav.Link href="#contact">Contact</Nav.Link>
                                </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Col>
                </Row>
            </div>
        </header>
    );
}

export default Header;