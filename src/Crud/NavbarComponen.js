import React from "react";
import {
  NavDropdown,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const NavbarComponen = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <div className="container">
        <Navbar.Brand href="#home">Crud React-Js</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">User Profile</Nav.Link>
            <NavDropdown title="Master" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Skill</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Skill Level
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarComponen;
