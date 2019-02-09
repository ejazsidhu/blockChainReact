import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {BrowserRouter as Router} from 'react-router-dom'


class Header extends Component {
    render() {
        return (
            <p>header</p>
            // <Router>
            // <Navbar bg="light" expand="lg">
            //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
            //     <Navbar.Collapse id="basic-navbar-nav">
            //         <Nav className="mr-auto">
            //             <Nav.Link to={'/home'} >Home</Nav.Link>
            //             <Nav.Link to={'/about'}>About</Nav.Link>
            //             <Nav.Link to={'/contact'}>Contact</Nav.Link>

            //         </Nav>

            //     </Navbar.Collapse>
            // </Navbar>
            // </Router>
        );
    }
}

export default Header