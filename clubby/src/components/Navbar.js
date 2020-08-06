import React from 'react';
import '../css/Navbar.css';
import { Navbar, Nav, Form, Button, FormControl, NavDropdow, Dropdown } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
    console.log(props);
    return (
        <Navbar bg="primary" variant="light" expand="lg">
            <Navbar.Brand class="logo" href="/"><img class="logo" src={require("../Clubby_Logo_cropped.JPG")} /></Navbar.Brand>
            <ul class="nav-container">
                <li class="nav-tags" ><Nav.Link id="home-page" href="/">&nbsp;&nbsp;Home&nbsp;&nbsp;</Nav.Link></li>
                <li class="nav-tags" ><Nav.Link href="/Clubs">&nbsp;&nbsp;Clubs&nbsp;&nbsp;</Nav.Link></li>
                <li class="nav-tags" ><Nav.Link href="/Events">&nbsp;&nbsp;Events&nbsp;&nbsp;</Nav.Link></li>
                <li class="nav-tags" ><Nav.Link href="/Applications">Applications</Nav.Link></li>
                <li id="search-area"><input type="text" class="search-input" placeholder="  Search" /></li>
                <li className="dropdown" id="dropdown-area">
                    <img className="menu" id="dropdown-icon" src={require("../menu-bar.png")} />
                    <div id="dropdown-container">
                        <ul id="dropdown-details">
                            <li class="dropdown-options"><Nav.Link href="/Clubs">Profile</Nav.Link></li>
                            <li class="dropdown-options"><Nav.Link href="/Clubs">Setting</Nav.Link></li>
                            <li class="dropdown-options"><Nav.Link href="/Clubs">Help</Nav.Link></li>
                            <li class="dropdown-options"><Nav.Link href="/Clubs">Log out</Nav.Link></li>
                        </ul></div>
                </li>
            </ul>
        </Navbar>
    )
}

window.onload = function () {
    var menu = document.getElementsByClassName("dropdown")[0];

    console.log(menu);
    menu.addEventListener("mouseover", function () {
        var tar = this.getElementsByTagName("div")[0]
        // console.log(tar);
        // console.log(event.target);
        tar.style.display = "block";
    }, false);


    menu.addEventListener("mouseout", function () {
        var tar = this.getElementsByTagName("div")[0]
        // console.log(tar);
        // console.log(event.target);
        tar.style.display = "none";
    }, false);
}

// const Navigation = (props) => {
//     console.log(props);
//     return (
//         <Navbar bg="primary" variant="light" expand="lg">
//             <Navbar.Brand class="logo" href="/"><img class="logo" src={require("../Clubby_Logo_cropped.JPG")} /></Navbar.Brand>
//             {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="mr-auto">
//                     <Nav.Link id="home-page" href="/">&nbsp;&nbsp;Home&nbsp;&nbsp;</Nav.Link>
//                     <Nav.Link id="clubs-page" href="/Clubs">&nbsp;&nbsp;Clubs&nbsp;&nbsp;</Nav.Link>
//                     <Nav.Link id="events-page" href="/Events">&nbsp;&nbsp;Events&nbsp;&nbsp;</Nav.Link>
//                     <Nav.Link id="applications-page" href="/Applications">Applications</Nav.Link>
//                     <Form class="form-inline">
//                         <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
{/* <Button variant="outline-success">Search</Button> */ }
// </Form>
{/* <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <img id="dropdown-icon" src={require("../menu-bar.png")} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}
{/* <NavDropdown title="drop" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="/">Setting</NavDropdown.Item>
                        <NavDropdown.Item href="/">Help</NavDropdown.Item>
                        <NavDropdown.Item href="/">Log out</NavDropdown.Item>
                    </NavDropdown> */}
//                 </Nav>

//             </Navbar.Collapse>
//         </Navbar>
//     )
// }

export default withRouter(Navigation);