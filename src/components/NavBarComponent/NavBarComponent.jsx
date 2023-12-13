import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import { Link } from "react-router-dom";

const NavBarComponent = () => {
  
    return (
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>E-commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link style={{textDecoration: "none", color: "black"}} to={"/"}>Home</Link></Nav.Link>
            <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Productos"
              menuVariant="dark"
            >
             <NavDropdown.Item href="#action/3.1">
                <Link style={{textDecoration: "none", color: "white"}} to={"/category/laptops"}>Laptops</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link style={{textDecoration: "none", color: "white"}} to={"/category/smartphones"}>Smartphones</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
            <Nav.Link href="#pricing">Servicios</Nav.Link>
          </Nav>
          <CartWidgetComponent/>
        </Container>
      </Navbar>
    );
};
export default NavBarComponent;