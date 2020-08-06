import React, { Component } from 'react';
import '../css/Navbar.css';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

class Navigation extends React.Component {
    render() {
        return (

            <Navbar bg="primary" variant="dark">
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Clubs">Clubs</Nav.Link>
                        <Nav.Link href="/Events">Events</Nav.Link>
                        <Nav.Link href="/Applications">Applications</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default withRouter(Navigation);