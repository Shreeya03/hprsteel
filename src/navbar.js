import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './navbar.css';
const Navbarr = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='yyy'>
    <Navbar.Brand href="#" className='xx'>HPR Steel Private Limited</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarSupportedContent" />
    <Navbar.Collapse id="navbarSupportedContent">
      <Nav className="mr-auto">
        <Nav.Link href="/" className='xx'>Home</Nav.Link>
        <Nav.Link href="/" className='xx'>About Us</Nav.Link>
        <NavDropdown title="Products" id="navbarDropdown">
          <NavDropdown.Item href="/carbonsteel" className='xx'>Carbon Steel</NavDropdown.Item>
          {/* <NavDropdown.Item href="/galvalume" className='xx'>Galvalume Steel</NavDropdown.Item> */}
          <NavDropdown.Item href="/steelwire" className='xx'>Steel Wire/Rod</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link  href="#contact" className='xx'>Contact Us</Nav.Link>
      </Nav>
      
    </Navbar.Collapse>
  </Navbar>
  );
};

export default Navbarr;
