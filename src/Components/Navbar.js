import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import Logo from './resources/logo.png'
import './styles/navbar.css'

const NavBar = () => {
    return(
        <div className="App">
          <ReactBootStrap.Navbar className='nav__' collapseOnSelect expand="xl" bg="primary" variant="dark">
            <Link to="/Home">
            <ReactBootStrap.Navbar.Brand href="#Home">
              <a href="#Home">
                <img src={Logo} alt="logo" className='Logo' href="#Home"/>
              </a>
              <span> Bibliocrypto </span>
              </ReactBootStrap.Navbar.Brand>
            </Link>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
              <ReactBootStrap.Nav className="mr-auto"> 
                <Link to="/Crypto">
                  <ReactBootStrap.Nav.Link href="#Crypto">Learn Crypto</ReactBootStrap.Nav.Link>
                </Link>
                <Link to="/Blockchain">
                  <ReactBootStrap.Nav.Link href="#Blockchain">Learn Blockchain</ReactBootStrap.Nav.Link>
                </Link>
                <Link to="/Mint">
                  <ReactBootStrap.Nav.Link href="#Mint">Mint Your Own NFT</ReactBootStrap.Nav.Link>
                </Link>
               
              </ReactBootStrap.Nav>
              <ReactBootStrap.Nav>
                <Link to="/Learn">
                  <ReactBootStrap.Nav.Link href="#Learn">Learn More</ReactBootStrap.Nav.Link>
                </Link>
                <Link to="/Contact">
                  <ReactBootStrap.Nav.Link eventKey={2} href="#Contact">
                  Contact
                  </ReactBootStrap.Nav.Link>
                </Link>
              </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;