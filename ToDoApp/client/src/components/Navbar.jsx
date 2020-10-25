import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

const NavbarComponent = (props) => {
  const [ isOpen, changeIsOpen ] = useState(false);

  const toggleNavbarMenu = () => changeIsOpen(!isOpen);

  return(
    <Navbar color="dark" dark>
      <NavbarBrand>ToDo</NavbarBrand>
      <NavbarToggler onClick={toggleNavbarMenu}/>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {
            props.isLoggedIn
              ? (
                <>
                  <NavItem>
                    <Link to="/mylists">My Lists</Link>
                  </NavItem>
                  <NavItem>
                    <p>Logout</p>
                  </NavItem>
                </>
              )
              : (
                <>
                  <NavItem>
                    <Link to="/login">Login</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/register">Register</Link>
                  </NavItem>
                </>
              )
          }
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavbarComponent;