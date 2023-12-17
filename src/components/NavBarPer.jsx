import "../style/NavBarPer.css";
import { Navbar, Container, Nav } from "react-bootstrap";

export const NavBarPer = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav-bar-principal" variant="dark">
      <Container className="contenedor-nav">
        <Navbar.Brand href="#"><h2>Yober Rodriguez</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="nav-bar-personalizado" id="responsive-navbar-nav" >
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about-me">About me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
