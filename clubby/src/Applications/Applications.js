import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import '../css/Clubs.css';
import history from './../history';
import axios from 'axios';

class Applications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clubs: []
    }

    this.getAllClubs = this.getAllClubs.bind(this);
    this.extractData = this.extractData.bind(this);
    this.getAllClubs();
  }

  extractData(response) {
    var responseData = response.data['data'];
    for (var i = 0; i < responseData.length; i++) {
      var localClubs = this.state.clubs;
      localClubs.push({ title: responseData[i]['name'] });
      this.setState({ clubs: localClubs })
      console.log("IN EXTRACTDATA:")
      console.log(this.state.clubs.length)
    }
  }

  getAllClubs() {
    axios({
      method: 'GET',
      url: 'http://127.0.0.1:5000/api/clubs',
    })
      .then((response) => this.extractData(response))
      .catch(function (error) {
        console.log(error)
      })
  }

  render() {
    return (
      <div class="clublistpage">
        <body>
          <h1>Clubs</h1>
          <div class='filter-list-container'>
            <Filter />
            <ClubList clubs={this.state.clubs} />
          </div>
        </body>
      </div>
    );
  }
}

class Filter extends React.Component {

  renderClickableBox(text) {
    return (
      <div class="filter_check_box">
        <p><a href=""></a>{text}</p>
      </div>
    );
  }

  render() {
    return (
      <div class="filter">
        <h2>Filter</h2>
        <div class='subscribed_clubs_filter'>
          {this.renderClickableBox('Subscribed Clubs')}
        </div>
        <div class='search_bar_filter'>
          <p>Search</p>
          <textarea></textarea>
        </div>
        <div class='category_search_filter'>
          <p>Category</p>
          <textarea></textarea>
          <div class='category_list'>
            {this.renderClickableBox("Engineering")}
            {this.renderClickableBox("Business")}
            {this.renderClickableBox("Sport")}
            {this.renderClickableBox("Pre-law")}
            {this.renderClickableBox("Art")}
          </div>

        </div>
        <div class='size_filter'>
          <p>Club Size</p>
          <div class='category_list'>
            {this.renderClickableBox("10-20")}
            {this.renderClickableBox("20-50")}
            {this.renderClickableBox("50-100")}
            {this.renderClickableBox("100-200")}
          </div>
        </div>
      </div>
    );
  }
}

class ClubList extends React.Component {
  render() {
    var clubComponent = this.props.clubs.map(club =>

      <ClubButton title={club.title} logo={require('../image/App+Dev+Logo+-+Red.png')} intro={"Cornell Univeristy's open source app development project team"} tags={["engineering", "computer science"]} />

    );

    return (
      <div class="clublist">
        {clubComponent}
      </div>
    );
  }
}

class ClubButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: null,
      logo: null,
      intro: null,
      tags: null,
    };
    this.ToClubHomePage = this.ToClubHomePage.bind(this);
  }

  ToClubHomePage(event) {
    console.log("Sheldon")
    history.push('/ClubHome');
    window.location.reload();
  }

  renderClubTags() {

    var tags = []

    for (var i = 0; i < this.props.tags.length; i++) {
      tags.push(<div class='club_tag'>{this.props.tags[i]}</div>)
    }

    return (
      <div class='tag_wrapper'>
        {tags}
      </div>
    )
  }


  render() {
    return (
      <div class='club_bt' onClick={this.ToClubHomePage}>
        <div><img src={this.props.logo} /></div>

        <div class='clubinfo'>
          <div class='title'>{this.props.title}</div>
          <div>{this.renderClubTags()}</div>
          <div>{this.props.intro}</div>
        </div>

        <div class="sub_bt">Subscribe</div>

      </div >
    );
  }
}

export default Applications;