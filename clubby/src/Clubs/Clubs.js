import React, { Component } from 'react';
import '../css/Clubs.css';
import history from './../history';

class Clubs extends Component {
  render() {
    return (
      <div class="clublistpage">
        <body>
          <h1>Clubs</h1>
          <div class='filter-list-container'>
            <Filter />
            <ClubList />
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
    return (
      <div class="clublist">
        <ClubButton title={"Cornell Appdev"} logo={require('./App+Dev+Logo+-+Red.png')} intro={"Cornell Univeristy's open source app development project team"} tags={["engineering", "computer science"]} />
        <ClubButton title={"Cornell Cup Robotics"} logo={require('./App+Dev+Logo+-+Red.png')} intro={"Cornell Univeristy's open source app development project team"} tags={["engineering", "computer science", "mechanics"]} />
        <ClubButton title={"Cornell Chinese Drama Society"} logo={require('./App+Dev+Logo+-+Red.png')} intro={"Cornell Univeristy's open source app development project team"} tags={["engineering", "computer science"]} />
        <ClubButton title={"Cornell Appdev"} logo={require('./App+Dev+Logo+-+Red.png')} intro={"Cornell Univeristy's open source app development project team"} tags={["engineering", "computer science"]} />
        <ClubButton title={"Cornell Appdev"} logo={require('./App+Dev+Logo+-+Red.png')} intro={"Cornell Univeristy's open source app development project team"} tags={["engineering", "computer science"]} />

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

export default Clubs;