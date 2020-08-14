import React, { Component } from 'react';
import '../css/EventPage.css';

class Event {
    constructor() {
        this.title = null;
        this.image = null;
        this.intro = null;
        this.time = null;
        this.location = null;
        this.club = null;
        this.tags = null;
    }
}

const event = new Event();
event.title = "Big Red Hacks";
event.image = require("./hack.png");
event.intro = "Whether it’s developing a mobile app, building a robust backend system, or designing a user-friendly product, we strongly believe that the best way to learn something is by doing. That's the foundation on which we've constructed our courses. We want students to not only gain practical skills in design or development, but also to leave the course with tangible projects they can showcase on their resume or portfolio. With 150+ students each semester, the semesterly AppDev Hack Challenge allows for students to have this opportunity. The AppDev Hack Challenge involves students across all our courses (iOS, backend, and design), and each group of 3-4 students works together to create a functional, polished app to showcase by the end of the semester.";
event.time = "Jun 1st - Jun 3rd, 2020";
event.location = "Ithaca, NY";
event.club = "Cornell App Dev";
event.tags = ["engineering", "computer science"];

class RegisterButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registered: false
        }
        this.onClicked = this.onClicked.bind(this);
    }

    onClicked() {
        this.setState({
            registered: !this.state.registered
        })
    }

    render() {
        let text = (this.state.registered ? "Registered" : "Register")
        let style = (this.state.registered ? "register-btn-wrapper__registered" : "register-btn-wrapper")
        return (
            <div class={style} onClick={this.onClicked}>{text}</div>
        )
    };
}

class HeartBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fav: false
        }
        this.onClicked = this.onClicked.bind(this);
    }
    onClicked() {
        this.setState({
            fav: !this.state.fav
        })
    }

    render() {
        let pic = (this.state.fav ? require("./heart.png") : require("./heart_empty.png"))
        return (
            <div class="heart-btn-wrapper" onClick={this.onClicked}><img src={pic} /> </div>
        )
    }
}

class MoreBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: 'none',
        }
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver(e) {
        this.setState({
            modalIsOpen: 'block'
        })
    }

    handleMouseOut(e) {
        this.setState({
            modalIsOpen: 'none'
        })
    }

    render() {
        return (
            <div class='more-btn' onMouseOver={this.handleMouseOver}
                onMouseLeave={this.handleMouseOut}>
                <div class='dot' />
                <div class='dot' />
                <div class='dot' />
                <div class="dropdown-wrapper"
                    style={{ display: this.state.modalIsOpen }}>
                    <div class="dropdown-container">
                        <p>Share Event</p>
                        <span><img src={require("./fb_logo.png")}></img><a href="https://www.facebook.com/cornellappdev/">Facebook</a></span>
                        <span><img src={require("./ins_logo.png")}></img><a href="https://www.instagram.com/cornellappdev/">Instagram</a></span>
                    </div>
                </div>
            </div>
        )
    }
}

class EventDetails extends React.Component {
    render() {
        return (
            <div class="event-details-wrapper">
                <div class="title-register-wrapper">
                    <div class="title-heart-wrapper">
                        <h1>{event.title}</h1>
                        <HeartBtn />
                    </div>
                    <div class="tag-btn-wrapper">{event.tags[0]}</div>
                    <div class="register-more-wrapper">
                        <RegisterButton />
                        <MoreBtn />
                    </div>
                </div>
                <div class="logistics-wrapper">
                    <div class="info-display">
                        <h3>Time</h3>
                        <p>{event.time}</p>
                    </div>
                    <div class="info-display2">
                        <h3>Location</h3>
                        <p>{event.location}</p>
                    </div>
                    <div class="info-display">
                        <h3>Club</h3>
                        <p>{event.club}</p>
                    </div>
                </div>
                <div class="participants-wrapper">
                    <div class="title-search-wrapper">
                        <h2>Who's going</h2>
                        <input type="text" class="search-input" placeholder="  Search" />
                    </div>
                    <div class="person-section">
                        <div class="person">
                            <img src={require("./headshot1.png")}></img>
                            <p>Andrew Bu...</p>
                        </div>
                        <div class="person">
                            <img src={require("./headshot2.png")}></img>
                            <p>Hannah Wil..</p>
                        </div>
                        <div class="person">
                            <img src={require("./headshot3.png")}></img>
                            <p>Taylor Hill</p>
                        </div>
                        <div class="person" id="last-person">
                            <img src={require("./headshot4.png")}></img>
                            <p>Michael Yo...</p>
                        </div>
                        <div class="person">
                            <img src={require("./headshot3.png")}></img>
                            <p>Kathy Hoff...</p>
                        </div>
                        <div class="person">
                            <img src={require("./headshot1.png")}></img>
                            <p>Caleb Joh...</p>
                        </div>
                        <div class="person">
                            <img src={require("./headshot4.png")}></img>
                            <p>George Will...</p>
                        </div>
                        <div class="person" id="last-person">
                            <span class="more-participant">
                                <text>54+</text>
                            </span>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class EventPicIntro extends React.Component {
    render() {
        return (
            <div class="pic-intro-wrapper">
                <div class="pic-wrapper"><img src={require("./display_pic1.jpeg")} /></div>
                <div class="intro-wrapper"><p>{event.intro}</p></div>
            </div>
        )
    }
}

class EventPage extends React.Component {
    render() {
        return (
            <div class="event-home-page">
                <EventDetails />
                <EventPicIntro />
            </div>
        )
    }
}

export default EventPage;