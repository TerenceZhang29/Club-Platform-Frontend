import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import history from './../history';
import '../css/Events.css'

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      events: []
    };
    // this.events = [];
    this.getAllEvents = this.getAllEvents.bind(this);
    this.extractData = this.extractData.bind(this);
    this.getAllEvents();
  }

  extractData(response) {
    var responseData = response.data['data'];
    for (var i = 0; i < responseData.length; i++) {
      var localEvents = this.state.events;
      localEvents.push({title: responseData[i]['name']});
      this.setState({events: localEvents})
      console.log("IN EXTRACTDATA:")
      console.log(this.state.events.length)
    }
  }

  getAllEvents() {
    axios({
      method: 'GET',
      url: 'http://127.0.0.1:5000/api/events/',
    })
      .then((response) => this.extractData(response))
      .catch(function (error) {
        console.log(error)
      })
  }

  render() {
    // var events = [
    //   {title: 'Cornell Cup Robotics Info Session'},
    //   {title: 'Cornell Chinese Drama Society Audition'},
    //   {title: 'Cornell AppDev Info Session'}
    // ];
    // while (this.events.length == 1) {

    // }
    console.log("this.events is: ");
    console.log(this.state.events);
    var fake = [{title: "WHAT THE FOOK IS GOING ON!"}, {title: "MY MAN WHAT THE HELL"}];
    return (
      <div>
        {/* <button onClick={this.run_blockly}>run blockly</button> */}
        <h1>Events</h1>
        <div class='filter-list-container'>
          <EventList events={this.state.events}/>
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
    var eventComponents = this.props.events.map(function(event) {
      return <div> 
               <button>{event.title}</button>
             </div>;
    });
    return <div>{eventComponents}</div>;

    // return (
    //   <div class="eventlist">
    //     <ListGroup>
    //     <ListGroup.Item>
    //       <EventButton title={"Cornell Appdev"} logo={require('./hack.png')} intro={"Cornell Univeristy's open source app development project team"} />
    //     </ListGroup.Item>
    //     <ListGroup.Item>
    //       <EventButton title={"Cornell Appdev"} logo={require('./hack.png')} intro={"Cornell Univeristy's open source app development project team"} />
    //     </ListGroup.Item>
    //     <ListGroup.Item>
    //       <EventButton title={"Cornell Appdev"} logo={require('./hack.png')} intro={"Cornell Univeristy's open source app development project team"} />
    //     </ListGroup.Item>
    //     <ListGroup.Item>
    //       <EventButton title={"Cornell Appdev"} logo={require('./hack.png')} intro={"Cornell Univeristy's open source app development project team"} />
    //     </ListGroup.Item>
    //     <ListGroup.Item>
    //       <EventButton title={"Cornell Appdev"} logo={require('./hack.png')} intro={"Cornell Univeristy's open source app development project team"} />
    //     </ListGroup.Item>
    //     </ListGroup>
    //   </div>
    // );
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