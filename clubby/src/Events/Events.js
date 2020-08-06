import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import history from './../history';
import '../css/Events.css'

class Events extends Component {
  constructor(props) {
    super(props);
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

        <div class='events-page'>


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

      <div class='event-container'>
        <div class='event-item'>
          <div class={this.state.shadow1 ? '__dark' : 'event-item-1'}>
            <EventButton onChange={this.changeShadow1} title={"BigRedHacks"} logo={require('./hack.png')} intro={"BigRedHacks is the oldest student-run, large-scale hackathon at Cornell University."} />
          </div>
          <div class={this.state.shadow2 ? '__dark' : 'event-item-2'}>
            <EventButton onChange={this.changeShadow2} title={"BigRedHacks"} logo={require('./hack.png')} intro={"BigRedHacks is the oldest student-run, large-scale hackathon at Cornell University."} />
          </div>
          {/* <div class='event-item-3'>
            <EventButton title={"BigRedHacks"} logo={require('./hack.png')} intro={"BigRedHacks is the oldest student-run, large-scale hackathon at Cornell University."} />
          </div>
          <div class='event-item-4'>
            <EventButton title={"BigRedHacks"} logo={require('./hack.png')} intro={"BigRedHacks is the oldest student-run, large-scale hackathon at Cornell University."} />
          </div> */}
          {/* <div class={this.state.shadow ? '__dark' : 'event-item-3'}>
            <EventButton onChange={this.changeShadow} title={"BigRedHacks"} logo={require('./hack.png')} intro={"BigRedHacks is the oldest student-run, large-scale hackathon at Cornell University."} />
          </div>
          <div class={this.state.shadow ? '__dark' : 'event-item-4'}>
            <EventButton onChange={this.changeShadow} title={"BigRedHacks"} logo={require('./hack.png')} intro={"BigRedHacks is the oldest student-run, large-scale hackathon at Cornell University."} />
          </div>
          <div class={this.state.shadow ? '__dark' : 'event-item-5'}>
            <EventButton onChange={this.changeShadow} title={"BigRedHacks"} logo={require('./hack.png')} intro={"BigRedHacks is the oldest student-run, large-scale hackathon at Cornell University."} />
          </div>
          <div class={this.state.shadow ? '__dark' : 'event-item-6'}>
            <EventButton onChange={this.changeShadow} title={"BigRedHacks"} logo={require('./hack.png')} intro={"BigRedHacks is the oldest student-run, large-scale hackathon at Cornell University."} />
          </div>
          <div class={this.state.shadow ? '__dark' : 'event-item-7'}>
            <EventButton onChange={this.changeShadow} title={"BigRedHacks"} logo={require('./hack.png')} intro={"BigRedHacks is the oldest student-run, large-scale hackathon at Cornell University."} />
          </div>
          <div class={this.state.clicked ? '__dark' : 'event-item-7'}>
            <EventButton onChange={this.changeShadow} title={"BigRedHacks"} logo={require('./hack.png')} intro={"BigRedHacks is the oldest student-run, large-scale hackathon at Cornell University."} />
          </div> */}
        </div>
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
    console.log("Sheldon")
    history.push('/cupInfo');
    window.location.reload();
  }

  render() {
    return (

      <div class='event-btn' >

        <img src={this.props.logo} onClick={this.cupInfo} />
        <h3>{this.props.title}</h3>
        <p>{this.props.intro}</p>
      </div>
    );
  }
}

export default Events;