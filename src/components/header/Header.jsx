import React from 'react'
import "./header.css"
import { Navbar ,Container,Nav } from 'react-bootstrap'
import Logo from "../../assets/logo.png"



const Header = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Activities</Nav.Link>
            <Nav.Link href="#link">Latest News</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
