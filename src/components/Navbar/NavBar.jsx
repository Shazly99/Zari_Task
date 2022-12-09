import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Img from '../../assets/Img';
import Icons from '../../constants/Icons';

import './navbar.scss'
function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={Img.Logo} alt="" srcset="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
            >
              <Nav.Link href="#action1" className='active'>Home</Nav.Link>
              <Nav.Link href="#action2">Features</Nav.Link>
              <Nav.Link href="#action3">OurApp</Nav.Link>
              <Nav.Link href="#action4">Plans</Nav.Link>


            </Nav>

            <div className="nav__btn d-flex  ">
              <Button className='btn__nav-trans ' variant="outline-success">
                <Icons.globe/>
                En</Button>
              <Button className='btn__nav-login' >Sign In</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

export default NavBar