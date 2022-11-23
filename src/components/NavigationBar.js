import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return(
        <div>
        <Navbar bg="light">
            <Container>
                <Navbar.Brand><b>WATCH DRAMA</b>.CO</Navbar.Brand>
                <Nav>
                <Nav.Link to="#trending">Trending</Nav.Link>
                <Nav.Link to="#drama">Latest</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigationBar