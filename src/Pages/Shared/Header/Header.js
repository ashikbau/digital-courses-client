import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FaBook } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
        <p><FaBook></FaBook></p>
          <Navbar.Brand > Digital Courses</Navbar.Brand>
          

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto mx-2">
                
                <Link className='mx-2' to='/'>Home</Link>
                <Link className='mx-2' to = '/faq'>FAQ</Link>
                <Link className='mx-2' to = '/blog'>Blog</Link>
              <Link className='mx-2' to='/courses/:id'>Courses</Link>
              
             </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;