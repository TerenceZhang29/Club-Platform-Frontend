import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import history from './../history';
import '../css/Events.css';
import axios from 'axios';

class Events extends Component {
  constructor(props) {
    super(props);

    this.extractEvents = this.extractEvents.bind(this);
    this.getAllEvents = this.getAllEvents.bind(this);
    this.getAllEvents();
  }

  state = {
    events: [],
    shadow: []
  }

  extractEvents(response) {
    var eventsData = response.data['data'];
    for (var i = 0; i < eventsData.length; i++) {
      var localevents = this.state.events;
      var localshadow = this.state.shadow;
      localevents.push({ title: eventsData[i]['name'], description: eventsData[i]['description'] });
      localshadow.push(false);
      this.setState({ events: localevents, shadow: localshadow })
    }
  }

  getAllEvents() {
    axios({
      method: 'GET',
      url: 'http://127.0.0.1:5000/api/events',
    })
      .then((response) => this.extractEvents(response))
      .catch(function (error) {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <div class='events-page'>
          <EventList events={this.state.events} shadow={this.state.shadow} />
          <Filter />
        </div>
      </div>
    );
  }
}

class ClickableBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      text: null
    }
    this.onClicked = this.onClicked.bind(this)
  }

  onClicked() {
    if (this.state.clicked) {
      this.setState({
        clicked: false
      })
    } else {
      this.setState({
        clicked: true
      })
    }
  }

  render() {
    var circle_class = (this.state.clicked ? 'check-circle __dark' : 'check-circle')

    return (
      <div class="text-with-check-box">
        <p onClick={this.onClicked}><div class={circle_class} />{this.props.text}</p>
      </div>
    );
  }
}

class Filter extends React.Component {



  render() {
    return (
      <div class="filter-container">
        <h2>Filters</h2>
        <div class='filter-section'>
          <ClickableBox text={'Favorite Clubs'} />
        </div>
        <div class='filter-section'>
          <h3>Search</h3>
          <input type='text' />
        </div>
        <div class='filter-section'>
          <h3>Category</h3>
          <input type='text' />

          <ClickableBox text={'Engineering'} />
          <ClickableBox text={'Business'} />
          <ClickableBox text={'Sport'} />
          <ClickableBox text={'Pre-law'} />
          <ClickableBox text={'Art'} />

        </div>
        <div class='filter-section'>
          <h3>Registered</h3>

          <ClickableBox text={'10-20'} />
          <ClickableBox text={'20-50'} />
          <ClickableBox text={'50-100'} />
          <ClickableBox text={'100-200'} />

        </div>
      </div>
    );
  }
}

class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // shadow1: false,
      // shadow2: false,
      // shadow3: false,
      shadow: this.props.shadow
    }
    this.changeShadow1 = this.changeShadow1.bind(this)
    this.changeShadow2 = this.changeShadow2.bind(this)
    this.changeShadow3 = this.changeShadow3.bind(this)
    // this.changeShadow = this.changeShadow.bind(this)
    // this.createShadow = this.createShadow.bind(this)
  }

  // createShadow() {
  //   for (var i = 0; i < this.props.events.length; i++){
  //    this.state.shadow.push(false);
  //   }
  // }

  changeShadow1() {
    this.setState(state => ({ shadow1: !state.shadow1 }))
  }

  changeShadow2() {
    this.setState(state => ({ shadow2: !state.shadow2 }))
  }

  changeShadow3() {
    this.setState(state => ({ shadow3: !state.shadow3 }))
  }

  changeShadow(id) {
    console.log(id);
    this.state.shadow.splice(id, 1, !this.state.shadow[id]);
    this.setState(state => ({ shadow: state.shadow }))
  }

  // changeShadow(index) {
  //   this.state.sha
  //   this.setState(state => )
  // }


  render() {
    var eventList = [];
    console.log(this.state.shadow);

    for (var i = 0; i < this.props.events.length; i++) {
      const id = i;
      eventList.push(
        <div class={(this.state.shadow[id]) ? '__push' : 'event-item-' + (id + 1).toString()}>
          <EventButton onChange={() => this.changeShadow(id)} title={this.props.events[id].title} logo={require('./hack.png')} intro={this.props.events[id].description} />
        </div>
      );
    };

    return (
      <div class='event-container'>
        <div class='event-item'>
          {eventList}
          {/* <div class={this.state.shadow1 ? '__push' : 'event-item-1'}>
            <EventButton onChange={this.changeShadow1} title={"BigRedHacks"} logo={require('./hack.png')} intro={"BigRedHacks is the oldest student-run, large-scale hackathon at Cornell University."} />
          </div>
          <div class={this.state.shadow2 ? '__push' : 'event-item-2'}>
            <EventButton onChange={this.changeShadow2} title={"BigRedHacks"} logo={require('./hack.png')} intro={"BigRedHacks is the oldest student-run, large-scale hackathon at Cornell University."} />
          </div>
          <div class={this.state.shadow3 ? '__push' : 'event-item-3'}>
            <EventButton onChange={this.changeShadow3} title={"BigRedHacks"} logo={require('./hack.png')} intro={"BigRedHacks is the oldest student-run, large-scale hackathon at Cornell University."} />
          </div> */}
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
      intro: null,
      clicked: true
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
        {/* <button type='buttom' onClick={style.color = "#776DC8;"}>Register</button> */}
        <div class='register-buttom'>
          <RegisterButtom title={"Register"} count={0} bgColor={'#BCB5F7'} onChange={this.props.onChange}></RegisterButtom>
        </div>
        <div class='heart-buttom'>
          <HeartButtom logo={require('./Heart.png')} clicked={0} ></HeartButtom>
        </div>
      </div >
    );
  }
}

class RegisterButtom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "Register",
      count: 0,
      bgColor: '#BCB5F7'
    };
    // this.handleclick = this.handleclick.bind(this);
  }

  state = {
    open: true
  }
  toggleImage = () => {
    this.setState(state => ({ open: !state.open }));
  }
  getImageName = () => this.state.open ? 'Registered_buttom' : 'Register_buttom'

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
    this.props.onChange();
  }

  // handleclick() {
  //   if (this.state.count) {
  //     this.setState(this.state = ({ title: "Register", count: 0, bgColor: '#BCB5F7' }));
  //   }
  //   else {
  //     this.setState(this.state = ({ title: "Registered", count: 1, bgColor: '#776DC8' }));
  //   }
  // }

  render() {
    const imageName = this.getImageName();
    return (
      // **** clickable button with changing text and color ****
      // <button onClick={this.handleclick} style={{ backgroundColor: this.state.bgColor, borderRadius: 10, border: "hidden" }}>
      //   {this.state.title}
      // </button>

      // **** changing color only ****
      // <div className="regi-buttom"
      //   style={{ backgroundColor: this.state.bgColor }}
      //   onClick={this.handleclick}
      // >{this.props.title}
      // </div>

      <img src={require('./' + imageName + '.png')} onClick={this.handleClick} />
    );
  }
}

class HeartButtom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logo: null,
      clicked: null
    };
  }

  state = {
    open: true
  }
  toggleImage = () => {
    this.setState(state => ({ open: !state.open }))
  }
  getImageName = () => this.state.open ? 'filled_heart' : 'Heart'

  // handleClick = () => {
  //   this.setState(state => ({ open: !state.open }));
  //   this.props.onChange();
  // }

  render() {
    const imageName = this.getImageName();
    return (
      <img src={require('./' + imageName + '.png')} onClick={this.toggleImage} />
    );
  }
}

export default Events;