import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "../css/Home.css";
import Flickity from "flickity";
import "../../node_modules/flickity/css/flickity.css";
import "../../node_modules/flickity/dist/flickity.min.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div class="container">
          <DisplayPic />
          <SubscribedClubs />
        </div>
      </div>
    );
  }
}

class DisplayPic extends Component {
  render() {
    return (
      <div class="picDisplay">
        <div class="display_board">
          <div class="gallery js-flickity" data-flickity-options='{ "freeScroll": true, "wrapAround": true, "autoPlay":4000}'>
            <img class="gallery-cell" src={require("./display_pic1.jpeg")} alt="" ></img>
            <img class="gallery-cell" src={require("./display_pic2.jpeg")} alt=""></img>
            <img class="gallery-cell" src={require("./display_pic3.jpeg")}></img>
          </div>
        </div>
      </div>
    );
  }
}

class SubscribedClubs extends Component {
  render() {
    return (
      <div class="subscribedPane">
        <text>Most interested Clubs</text>
        <div class="club_bg">
          <MyClub title={"Cornell Appdev"} logo={require("./club_logo2.png")} />
          {/* <img src={require("./club_logo2.png")}></img> */}
        </div>
      </div>
    )
  }
}

class MyClub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      logo: null,
    }
    this.ToClubHomePage = this.ToClubHomePage.bind(this);
  }

  ToClubHomePage(event) {
    console.log("Sheldon")
    history.push('../Clubs/ClubHome');/* need implement */
    window.location.reload();
  }

  render() {
    return (
      <div class='club_logo' onClick={this.ToClubHomePage}>
        <div><img title={this.props.title} src={this.props.logo} /></div>
      </div>
    )
  }
}