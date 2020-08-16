import React from 'react';
import '../css/Navbar.css';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl, NavDropdow, Dropdown } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
    console.log(props);


    var loc = String(window.location.pathname);
    var home_tag_class = 'nav-link'
    var club_tag_class = 'nav-link'
    var event_tag_class = 'nav-link'
    var app_tag_class = 'nav-link'
    if (loc == "/") {
        home_tag_class += ' __onpage'
        console.log(home_tag_class)
    } else if (loc == "/Clubs") {
        club_tag_class += ' __onpage'
    } else if (loc == "/Events") {
        event_tag_class += ' __onpage'
    } else if (loc == "/Applications") {
        app_tag_class += ' __onpage'
    }

    console.log(home_tag_class)

    return (
        <Navbar collapseOnSelect bg="primary" variant="light" expand="lg">
            <Navbar.Brand href="/"><img className="logo" src={require("../Clubby_Logo_cropped.JPG")} /></Navbar.Brand>
            {/* <Navbar.Toggle data-target="#responsive-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse expand='sm' id="responsive-navbar-nav"> */}
            <Nav className="nav-container">
                <Nav.Link bsPrefix={home_tag_class} href="/">&nbsp;&nbsp;Home&nbsp;&nbsp;</Nav.Link>
                <Nav.Link bsPrefix={club_tag_class} href="/Clubs">&nbsp;&nbsp;Clubs&nbsp;&nbsp;</Nav.Link>
                <Nav.Link bsPrefix={event_tag_class} href="/Events">&nbsp;&nbsp;Events&nbsp;&nbsp;</Nav.Link>
                <Nav.Link bsPrefix={app_tag_class} href="/Applications">Applications</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="search-input" />
            </Form>
            <Nav.Item className="dropdown" id="dropdown-area" as="li">
                <img id="dropdown-icon" src={require("../menu-bar.png")} />
                <div id="dropdown-container">
                    <ul id="dropdown-details">
                        <li className="dropdown-options"><a href="/Profile">Profile</a></li>
                        <li className="dropdown-options"><a href="/Clubs">Setting</a></li>
                        <li className="dropdown-options"><a href="/Clubs">Help</a></li>
                        <li className="dropdown-options"><a href="/Clubs">Log out</a></li>
                    </ul></div>
            </Nav.Item>
            {/* </Navbar.Collapse> */}
        </Navbar>
    )
}

window.onload = function () {
    var menu = document.getElementsByClassName("dropdown")[0];

    console.log(menu);
    menu.addEventListener("mouseover", function () {
        var tar = this.getElementsByTagName("div")[0]
        tar.style.display = "block";
    }, false);


    menu.addEventListener("mouseout", function () {
        var tar = this.getElementsByTagName("div")[0]
        tar.style.display = "none";
    }, false);

}


export default withRouter(Navigation);