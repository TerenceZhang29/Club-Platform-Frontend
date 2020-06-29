import React, { Component } from 'react';
import '../css/Clubs.css'

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
  render() {
    return (
      <div class="filter">
        <h2>Filter</h2>
      </div>
    );
  }
}

class ClubList extends React.Component {
  render() {
    return (
      <div class="clublist">
        <ClubButton title={"Cornell Appdev"} logo={require('./App+Dev+Logo+-+Red.png')} intro={"Cornell Univeristy's open source app development project team"} tags={["engineering", "computer science"]} />
        <ClubButton title={"Cornell Appdev"} logo={require('./App+Dev+Logo+-+Red.png')} intro={"Cornell Univeristy's open source app development project team"} tags={["engineering", "computer science"]} />
        <ClubButton title={"Cornell Appdev"} logo={require('./App+Dev+Logo+-+Red.png')} intro={"Cornell Univeristy's open source app development project team"} tags={["engineering", "computer science"]} />
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
      <div class='club_bt' >
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