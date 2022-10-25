import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FaBook, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Header = () => {
  const { user,logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.error(error))
}


  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <p><FaBook></FaBook></p>

        <Navbar.Brand > Digital Courses</Navbar.Brand>



        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mx-2">

            <Link className='mx-2' to='/home'>Home</Link>
            <Link className='mx-2' to='/faq'>FAQ</Link>
            <Link className='mx-2' to='/blog'>Blog</Link>
            <Link className='mx-2' to='/courses'>Courses</Link>
            <Link className='mx-2' to='/login'>LogIn</Link>
            <Link className='mx-2' to='/register'>Register</Link>

          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              {
                user?.uid ?
                  <>
                    <span>{user?.displayName}</span>
                    <Button onClick={handleLogOut} variant="light" >Log out</Button>
                  </>
                  :
                  <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                  </>
              }


            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {user?.photoURL ?
                <Image
                  style={{ height: '30px' }}
                  roundedCircle
                  src={user?.photoURL}>
                </Image>
                : <FaUser></FaUser>
              }

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;