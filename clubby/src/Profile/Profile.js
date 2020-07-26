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
  constructor(name, picture) {
    this.name = name;
    this.picture = picture;

  }
}

const USER = new User("Ezra Cornell", require("../image/Ezra_Cornell.jpg"));

class MainContent extends React.Component {

  render() {
    return (
      <div class="main_content">
        <div class="profile_section content_section">
          <h3>Profile</h3>
          <p>
            <div>{USER.name}</div>
            <div><img src={USER.picture} /></div>
          </p>
        </div>
        <div class="club_section content_section">
          <h3>Clubs</h3>
          <div></div>
        </div>
        <div class="event_section content_section">
          <h3>Events</h3>
        </div>
        <div class="setting_section content_section">
          <h3>Setting</h3>
        </div>
      </div>
    )
  }
}