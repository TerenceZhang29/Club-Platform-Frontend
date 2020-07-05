import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import history from './../history';
import '../css/Events.css'

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null
    };
    this.run_blockly = this.run_blockly.bind(this);
  }

  run_blockly(event) {
    console.log("Chuck Norris");
    axios({
      method: 'GET',
      url: 'http://localhost:5000/api/events',
    })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.warn("NO");
      });

  }

  render() {
    return (
      // <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
      //     <div><h2>Event Page</h2>
      //         <Card style={{ width: '18rem' }}>
      //             <ListGroup>
      //                 <ListGroup.Item>AppDev Info Session</ListGroup.Item>
      //                 <ListGroup.Item onClick={this.cupInfo}>Cup Robotics Info Session</ListGroup.Item>
      //                 <ListGroup.Item>Drama Society Audition</ListGroup.Item>
      //             </ListGroup>
      //         </Card>
      //     </div>
      //     <div class='filter-list-container'>
      //     <EventList />
      //     <Filter />
      //     </div>
      // </div>
      <div>
        <button onClick={this.run_blockly}>run blockly</button>
        <h1>Events</h1>
        <div class='filter-list-container'>
          <EventList />
          <Filter />
        </div>
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
  
class EventList extends React.Component {
  render() {
    return (
      <div class="eventlist">
        <ListGroup>
        <ListGroup.Item>
          <EventButton title={"Cornell Appdev"} logo={require('./hack.png')} intro={"Cornell Univeristy's open source app development project team"} />
        </ListGroup.Item>
        <ListGroup.Item>
          <EventButton title={"Cornell Appdev"} logo={require('./hack.png')} intro={"Cornell Univeristy's open source app development project team"} />
        </ListGroup.Item>
        <ListGroup.Item>
          <EventButton title={"Cornell Appdev"} logo={require('./hack.png')} intro={"Cornell Univeristy's open source app development project team"} />
        </ListGroup.Item>
        <ListGroup.Item>
          <EventButton title={"Cornell Appdev"} logo={require('./hack.png')} intro={"Cornell Univeristy's open source app development project team"} />
        </ListGroup.Item>
        <ListGroup.Item>
          <EventButton title={"Cornell Appdev"} logo={require('./hack.png')} intro={"Cornell Univeristy's open source app development project team"} />
        </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}
  
class EventButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: null,
      logo: null,
      intro: null
    };
    this.cupInfo = this.cupInfo.bind(this);
  }

  cupInfo(event) {
    console.log("Sheldon");
    history.push('/cupInfo');
    window.location.reload();
  }
  
  render() {
    return (
      <div class='event_item' >
      <img src={this.props.logo} onClick={this.cupInfo}/>
      <h3>{this.props.title}</h3>
      <p>{this.props.intro}</p>
      </div >
    );
  }
}

export default Events;