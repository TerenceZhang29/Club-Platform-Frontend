import React, { Component } from 'react';
import '../css/Profile.css';

class User {
  constructor(name, picture, tags, email, phone, register_clubs, subscribe_clubs, register_events, subscribe_events) {
    this.name = name;
    this.picture = picture;
    this.tags = tags;
    this.email = email;
    this.phone = phone;
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

const USER = new User("Ezra Cornell", require("../image/Ezra_Cornell.jpg"), ["Engineering", "Business", "Comedy"], "ce123@cornell.edu", "(1)123-456-7890", club_ls_1, club_ls_2, event_ls_1, event_ls_2);


export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: USER
    }
  }
  render() {
    return (
      <div class="profile-page">
        <LeftContent />
        <RightContent />
      </div>
    )
  }
}

class LeftContent extends React.Component {
  renderTags() {
    var tagComponent = USER.tags.map(tag =>
      <div class='tag-btn'>{tag}</div>
    )
    return (
      <div class='tag-btn-container'>
        {tagComponent}
      </div>
    )
  }

  renderClubs() {
    var clubComponent = USER.register_clubs.map(club =>
      <div class='your-club-img'><img src={require('../image/App+Dev+Logo+-+Red.png')} /></div>
    )

    return (
      <div class='your-club-gallery'>
        {clubComponent}
        <span class="arrow"><img src={require('../image/arrowRight.png')} /></span>
      </div>
    )
  }

  renderAppTag() {
    return (
      <div class='application-tag-wrapper'>
        <ProfileApplicationTag name={"Cornell App Dev"} status={"Under Review"} picture={require('../image/App+Dev+Logo+-+Red.png')} date={"September 12, 2020 11:17 AM"} />
        <ProfileApplicationTag name={"Cornell App Dev"} status={"Under Review"} picture={require('../image/App+Dev+Logo+-+Red.png')} date={"September 12, 2020 11:17 AM"} />
      </div>
    )
  }

  render() {
    return (
      <div class="left-content-wrapper">
        <div class="picture-name-section">
          <div class='user-pic'><img src={USER.picture} /></div>
          <div class='user-name-tag'>
            <h2>{USER.name}</h2>
            {this.renderTags()}
            <div class='btn-wrapper'>
              <div class='setting-btn'>Settings</div>
              <div class='setting-btn'>Log out</div>
            </div>
          </div>
        </div>
        <div class="contact-section">
          <div class='sub-contact-section'>
            <h3>Email</h3>
            <p>{USER.email}</p>
          </div>
          <div class='sub-contact-section'>
            <h3>Phone</h3>
            <p>{USER.phone}</p>
          </div>
        </div>
        <div class='your-clubs-section'>
          <h3 class='section-head'>Your Clubs</h3>
          {this.renderClubs()}
        </div>
        <div class='your-application-section'>
          <h3 class='section-head'>Your Applications</h3>
          {this.renderAppTag()}
          <div>

          </div>
        </div>
      </div>
    )
  }
}

class ProfileApplicationTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      status: null,
      date: null,
      picture: null,
    }
  }

  render() {
    return (
      <div class='application-tag'>
        <div class="application-img"><img src={this.props.picture} /></div>
        <div class='application-text'>
          <h4>{this.props.name}</h4>
          <p>{this.props.status == 'Under Review' ? "Submitted" : "Unsubmit"}</p>
          <p>{this.props.date}</p>
        </div>
        <div class='application-status'><span class="status-btn">{this.props.status}</span></div>
      </div>
    )
  }
}



class RightContent extends React.Component {

  renderClubs() {
    var clubComponent = USER.subscribe_clubs.map(club =>
      <div class='your-club-img'><img src={require('../image/App+Dev+Logo+-+Red.png')} /></div>
    )

    return (
      <div class='your-club-gallery'>
        {clubComponent}
        <span class="arrow"><img src={require('../image/arrowRight.png')} /></span>
      </div>
    )
  }

  renderEvents() {
    return (
      <div class='event-tag-wrapper'>
        <ProfileEventTag name={"Big Red Hack"} host_club={"Cornell Appdev"} picture={require('../image/App+Dev+Logo+-+Red.png')} date={'Jun 1st - Jun 3rd, 2020'} location={'Ithaca, NY'} />
        <ProfileEventTag name={"Big Red Hack"} host_club={"Cornell Appdev"} picture={require('../image/App+Dev+Logo+-+Red.png')} date={'Jun 1st - Jun 3rd, 2020'} location={'Ithaca, NY'} />
        <ProfileEventTag name={"Big Red Hack"} host_club={"Cornell Appdev"} picture={require('../image/App+Dev+Logo+-+Red.png')} date={'Jun 1st - Jun 3rd, 2020'} location={'Ithaca, NY'} />
        <ProfileEventTag name={"Big Red Hack"} host_club={"Cornell Appdev"} picture={require('../image/App+Dev+Logo+-+Red.png')} date={'Jun 1st - Jun 3rd, 2020'} location={'Ithaca, NY'} />
      </div>
    )
  }

  render() {
    return (
      <div class='right-content-wrapper'>
        <div class='subscribed-club-section'>
          <h3>Subscribed Clubs</h3>
          {this.renderClubs()}
        </div>
        <div class='registered-event-section'>
          <h3>Registered Events</h3>
          {this.renderEvents()}
        </div>
      </div>
    )
  }
}

class ProfileEventTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      picture: null,
      host_club: null,
      date: null,
      location: null,
    }
  }

  render() {
    return (
      <div class="event-tag">
        <div class="event-img"><img src={this.props.picture} /></div>
        <div class='event-text'>
          <h4>{this.props.name}</h4>
          <p>By {this.props.host_club}</p>
        </div>
        <div class='event-time-loc'>
          <p>{this.props.date}</p>
          <p>{this.props.location}</p>
        </div>
      </div>
    )
  }
}