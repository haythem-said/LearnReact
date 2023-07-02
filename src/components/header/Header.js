import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  Input,
} from "reactstrap";
import { FaReact } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
function Header(args) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header-component">
      <Navbar expand="md">
        <NavbarBrand className="navBarBrand-header">
          <FaReact className="icons-header"  href="/"/> <Link to="/"> <span style={{color:"white"}}>Learning ReactJS</span></Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                <Link className="navLink-header" to="/learn">
                  Learn
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="navLink-header" to="/document">
                  Document
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="navLink-header" to="/contact">
                  Contact
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className="input-header">
              <BsSearch className="serach-icon-header" />
              <Input placeholder="Search"> </Input>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
