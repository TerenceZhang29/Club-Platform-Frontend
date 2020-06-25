import React from 'react';
import NavBar from './navBar.js';
import './Clublist.css'

class ClubListPage extends React.Component {
  render() {
    return (
      <div class="clublistpage">
        <header>
          <NavBar />
        </header>

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
        <ClubButton title={"Cornell Appdev"} logo={require('./App+Dev+Logo+-+Red.png')} intro={"Cornell Univeristy's open source app development project team"} />
        <ClubButton title={"Cornell Appdev"} logo={require('./App+Dev+Logo+-+Red.png')} intro={"Cornell Univeristy's open source app development project team"} />
        <ClubButton title={"Cornell Appdev"} logo={require('./App+Dev+Logo+-+Red.png')} intro={"Cornell Univeristy's open source app development project team"} />
        <ClubButton title={"Cornell Appdev"} logo={require('./App+Dev+Logo+-+Red.png')} intro={"Cornell Univeristy's open source app development project team"} />
        <ClubButton title={"Cornell Appdev"} logo={require('./App+Dev+Logo+-+Red.png')} intro={"Cornell Univeristy's open source app development project team"} />
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
      intro: null
    };
  }

  render() {
    return (
      <div class='club_bt' >
        <img src={this.props.logo} />
        <h3>{this.props.title}</h3>
        <p>{this.props.intro}</p>
      </div >
    );
  }
}

export default ClubListPage