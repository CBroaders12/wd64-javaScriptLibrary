import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const [ isOpen, changeIsOpen ] = useState(false);

  const toggleNavbarMenu = () => changeIsOpen(!isOpen);

  return(
    <Navbar color="dark" dark expand="sm">
      <NavbarBrand>ToDo</NavbarBrand>
      <NavbarToggler onClick={toggleNavbarMenu}/>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <p>Lists</p>
          </NavItem>
          <NavItem>
            <Link to="/login">Login</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavbarComponent;