import React, { Component } from 'react';
import '../css/Profile.css';

export default class Profile extends React.Component {
  render() {
    return (
      <div>
        <body>
          <div class="sidebar_content_wrapper">
            <SideBar />
            <MainContent />
          </div>

        </body>
      </div>
    )
  }
}

class SideBar extends React.Component {
  render() {
    return (
      <div class="side_bar">
        <SideBtn text={"Profile"} />
        <SideBtn text={"Clubs"} />
        <SideBtn text={"Events"} />
        <SideBtn text={"Settings"} />
        <SideBtn text={"Log out"} />
      </div>
    )
  }
}

class SideBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    }
  }
  render() {
    return (
      <div class="side_btn">
        {this.props.text}
      </div>
    )
  }
}

class User {
  constructor(name, picture, register_clubs, subscribe_clubs, register_events, subscribe_events) {
    this.name = name;
    this.picture = picture;
    this.register_clubs = register_clubs;
    this.subscribe_clubs = subscribe_clubs;
    this.register_events = register_events;
    this.subscribe_events = subscribe_events;


  }
}

const club_ls_1 = ['club1', 'club2', 'club3'];
const club_ls_2 = ['club4', 'club5', 'club6'];
const event_ls_1 = ['event1', 'event2', 'event3'];
const event_ls_2 = ['event4', 'event5', 'event6'];

const USER = new User("Ezra Cornell", require("../image/Ezra_Cornell.jpg"), club_ls_1, club_ls_2, event_ls_1, event_ls_2);

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shown_clubs: "subscribe",
      shown_events: "subscribe"
    }
    this.renderClubList = this.renderClubList.bind(this)
    this.switchToRegisterClubs = this.switchToRegisterClubs.bind(this)
    this.switchToSubsribeClubs = this.switchToSubsribeClubs.bind(this)
    this.switchToRegisterEvents = this.switchToRegisterEvents.bind(this)
    this.switchToSubsribeEvents = this.switchToSubsribeEvents.bind(this)
  }

  renderClubList() {

    var club_tags = [];
    var clubs = [];

    if (this.state.shown_clubs == "subscribe") {
      clubs = USER.subscribe_clubs;
    } else {
      clubs = USER.register_clubs;
    }

    for (var i = 0; i < clubs.length; i++) {
      club_tags.push(<div><img src="" alt={clubs[i]} height="100px" width="100px" /></div>)
    }

    return (<div>{club_tags}</ div>);
  }

  renderEventList() {
    var events_tags = [];
    var events = [];

    if (this.state.shown_events == 'subscribe') {
      events = USER.subscribe_events;
    } else {
      events = USER.register_events;
    }

    for (var i = 0; i < events.length; i++) {
      events_tags.push(<div><img src="" alt={events[i]} height="100px" width="100px" /></div>)
    }

    return (<div>{events_tags}</div>)
  }

  switchToRegisterClubs() {
    this.setState({ shown_clubs: "register" })
  }

  switchToSubsribeClubs() {
    this.setState({ shown_clubs: "subscribe" })
  }

  switchToRegisterEvents() {
    this.setState({ shown_events: "register" })
  }

  switchToSubsribeEvents() {
    this.setState({ shown_events: "subscribe" })
  }

  render() {
    let sub_clubs_btn_class = this.state.shown_clubs == "subscribe" ? "switch_btn_active" : "switch_btn";
    let reg_clubs_btn_class = this.state.shown_clubs == "register" ? "switch_btn_active" : "switch_btn";
    let sub_events_btn_class = this.state.shown_events == "subscribe" ? "switch_btn_active" : "switch_btn";
    let reg_events_btn_class = this.state.shown_events == "register" ? "switch_btn_active" : "switch_btn";

    return (
      <div class="main_content">
        <div class="profile_section content_section">
          <h3>Profile</h3>
          <p>
            <div>{USER.name}</div>
            <div><img src={USER.picture} length="100px" width="100px" /></div>
          </p>
        </div>
        <div class="club_section content_section">
          <h3>Clubs</h3>
          <div>
            <div class={sub_clubs_btn_class} ><span onClick={() => this.switchToRegisterClubs()}>Your Clubs</span></div>
            <div class={reg_clubs_btn_class}><span onClick={() => this.switchToSubsribeClubs()}>Subscribed Clubs</span></div>
            {this.renderClubList()}
          </div>
        </div>
        <div class="event_section content_section">
          <h3>Events</h3>
          <div>
            <div class={sub_events_btn_class}><span onClick={() => this.switchToRegisterEvents()}>Register Events</span></div>
            <div class={reg_events_btn_class}><span onClick={() => this.switchToSubsribeEvents()} > Subscribed Events</span></div>
            {this.renderEventList()}
          </div>
        </div>
        <div class="setting_section content_section">
          <h3>Setting</h3>
        </div>
      </div >
    )
  }
}