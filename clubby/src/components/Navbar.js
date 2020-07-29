import React from 'react';
import '../css/Navbar.css';
import { Navbar, Nav, Form, Button, FormControl, NavDropdow, Dropdown } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
    console.log(props);
    return (
        <Navbar bg="primary" variant="light" expand="lg">
            <Navbar.Brand class="logo" href="/"><img class="logo" src={require("../Clubby_Logo_cropped.JPG")} /></Navbar.Brand>
            <nav>
                <ul class="nav-container">
                    <li><ul class="tag-container">
                        <li><Nav.Link id="home-page" href="/">&nbsp;&nbsp;Home&nbsp;&nbsp;</Nav.Link></li>
                        <li><Nav.Link id="clubs-page" href="/Clubs">&nbsp;&nbsp;Clubs&nbsp;&nbsp;</Nav.Link></li>
                        <li><Nav.Link id="events-page" href="/Events">&nbsp;&nbsp;Events&nbsp;&nbsp;</Nav.Link></li>
                        <li><Nav.Link id="applications-page" href="/Applications">Applications</Nav.Link></li>
                    </ul></li>
                    <li><div class="search-container">
                        <span class="search">
                            <input type="text" class="search-input" placeholder="  Search" />
                        </span>
                    </div></li>
                    <li><div class="hover-menu-container">
                        <img id="dropdown-icon" src={require("../menu-bar.png")} />
                    </div></li>
                </ul>
            </nav>
        </Navbar>
    )
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