import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import axios from 'axios';

const NavBarComponent = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
    .get('https://dummyjson.com/products/categories')
    .then((res) => {setCategories(res.data);})
    .catch((error) => console.log(error));
}, []);

    return (
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand><Link to={"/"}>E-commerce</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Productos"
              menuVariant="dark"
            >
              {
                categories.map((category, index) => {
                  return (
                    <NavDropdown.Item key={index}><Link to={`/category/${category}`}>{category}</Link></NavDropdown.Item>
                  )
                })
              }
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