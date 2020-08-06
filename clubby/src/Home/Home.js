import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "../css/Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">

        <div class="home-page-container">
          <DisplayPic />
          <SubscribedClubs />
        </div>
      </div>
    );
  }
}
