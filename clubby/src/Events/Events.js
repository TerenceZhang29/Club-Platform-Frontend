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
  renderClickableBox(text) {
    return (
      <div class="filter-check-box">
        <p><a href=""></a>{text}</p>
      </div>
    );
  }

  render() {
    return (
      <div class="filter">
        <h2>Filter</h2>
        <div class='favorite-events-filter'>
          {this.renderClickableBox('Favorite Events')}
        </div>
        <div class='search-bar-filter'>
          <p>Search</p>
          <textarea></textarea>
        </div>
        <div class='category-search-filter'>
          <p>Category</p>
          <textarea></textarea>
          <div class='category-list'>
            {this.renderClickableBox("Engineering")}
            {this.renderClickableBox("Business")}
            {this.renderClickableBox("Sport")}
            {this.renderClickableBox("Pre-law")}
            {this.renderClickableBox("Art")}
          </div>
        </div>
        <div class='registered-filter'>
          <p>Registered</p>
          <div class='registered-list'>
            {this.renderClickableBox("10 - 20")}
            {this.renderClickableBox("20 - 50")}
            {this.renderClickableBox("50 - 100")}
            {this.renderClickableBox("100 - 200")}
          </div>
        </div>
      </div>
    );
  }
}

class EventList extends React.Component {
  render() {
    return (
      <div class='event-container'>
        <div class='event-item'>
          <div class='event-item-1'>
            <EventButton title={"BigRedHacks"} logo={require('./hack.png')} intro={"BigRedHacks is the oldest student-run, large-scale hackathon at Cornell University."} />
          </div>
          <div class='event-item-2'>
            <EventButton title={"BigRedHacks"} logo={require('./hack.png')} intro={"BigRedHacks is the oldest student-run, large-scale hackathon at Cornell University."} />
          </div>
          <div class='event-item-3'>
            <EventButton title={"BigRedHacks"} logo={require('./hack.png')} intro={"BigRedHacks is the oldest student-run, large-scale hackathon at Cornell University."} />
          </div>
          <div class='event-item-4'>
            <EventButton title={"BigRedHacks"} logo={require('./hack.png')} intro={"BigRedHacks is the oldest student-run, large-scale hackathon at Cornell University."} />
          </div>
          <div class='event-item-5'>
            <EventButton title={"BigRedHacks"} logo={require('./hack.png')} intro={"BigRedHacks is the oldest student-run, large-scale hackathon at Cornell University."} />
          </div>
          <div class='event-item-6'>
            <EventButton title={"BigRedHacks"} logo={require('./hack.png')} intro={"BigRedHacks is the oldest student-run, large-scale hackathon at Cornell University."} />
          </div>
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
      <div class='event_item' >
        <img src={this.props.logo} onClick={this.cupInfo} />
        <h3>{this.props.title}</h3>
        <p>{this.props.intro}</p>
        {/* <button type='buttom' onClick={style.color = "#776DC8;"}>Register</button> */}
        <div class='register-buttom'>
          <RegisterButtom title={"Register"} count={0} bgColor={'#BCB5F7'} onClick={this.handleclick}></RegisterButtom>
        </div>
        <div class='heart-buttom'>
          <HeartButtom logo={require('./Heart.png')} clicked={0} onClick={this.handleclick}></HeartButtom>
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
    this.setState(state => ({ open: !state.open }))
  }
  getImageName = () => this.state.open ? 'Registered_buttom' : 'Register_buttom'

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

      <img src={require('./' + imageName + '.png')} onClick={this.toggleImage} />
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
    // this.handleclick = this.handleclick.bind(this);
  }

  state = {
    open: true
  }
  toggleImage = () => {
    this.setState(state => ({ open: !state.open }))
  }
  getImageName = () => this.state.open ? 'filled_heart' : 'Heart'

  // handleclick() {
  //   if (this.state.clicked) {
  //     this.setState(this.state = ({ logo: require('./Heart.png'), clicked: 0 }));
  //   }
  //   else {
  //     this.setState(this.state = ({ logo: require('./filled_heart.png'), clicked: 1 }));
  //   }
  // }

  render() {
    const imageName = this.getImageName();
    return (
      // <img src={this.props.logo} onClick={this.handleclick} />
      <img src={require('./' + imageName + '.png')} onClick={this.toggleImage} />
    );
  }
}

export default Events;