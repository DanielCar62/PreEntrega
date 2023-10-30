import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";

const NavBarComponent = () => {
    return (
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing">Servicios</Nav.Link>
          </Nav>
          <CartWidgetComponent/>
        </Container>
      </Navbar>
    );
};
export default NavBarComponent;