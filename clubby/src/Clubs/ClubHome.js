import React, { Component } from 'react';
import '../css/ClubHome.css';

class Club {
  constructor() {
    this.title = null;
    this.image = null;
    this.intro = null;
    this.website = null;
    this.email = null;
    this.phone = null;
    this.tags = null;
    this.location = null;
    this.events = null;
  }
}

const club = new Club();

club.title = "Cornell App Dev";
club.image = require('../image/App+Dev+Logo+-+Red.png');
club.intro = ["Cornell University’s open source app development project team.", <br />, <br />, "Simply put, we love building apps. Our 50 members take on various roles surrounding product development, beginning with an initial product vision and design, through engineering development, consistent iteration, and ultimately bringing a functional product to market. Our collaboration leads to stunning products that solve real problems for members of the Cornell and greater Ithaca community."];
club.website = "www.appdev.com";
club.email = "Appdev@cornell.edu";
club.phone = "123-456-7890";
club.tags = ["engineering", "computer science"];
club.location = "Ithaca, NY";
club.events = ["Event1", "Event2", "Event3"];

class ClubHome extends React.Component {
  render() {
    return (
      <div class='club-home-page'>
        <ClubDetails />
        <ClubSlider />
      </div>
    )
  }
}

class SubscribeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subscribed: true
    }
    this.onClicked = this.onClicked.bind(this);
  }

  onClicked() {
    this.setState({
      subscribed: !this.state.subscribed
    })
  }

  render() {
    let text = (this.state.subscribed ? "Subscribed" : "Subscribe")
    let style = (this.state.subscribed ? "subscribe-btn-wrapper__subscribed" : "subscribe-btn-wrapper")
    return (
      <div class={style} onClick={this.onClicked}>{text}</div>
    )
  };
}

class RegisterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registered: false
    }
    this.onClicked = this.onClicked.bind(this);
  }

  onClicked() {
    this.setState({
      registered: !this.state.registered
    })
  }

  render() {
    let text = (this.state.registered ? "Registered" : "Register")
    let style = (this.state.registered ? "register-btn-wrapper__registered" : "register-btn-wrapper")
    return (
      <div class={style} onClick={this.onClicked}>{text}</div>
    )
  };
}

class HeartBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fav: false
    }
    this.onClicked = this.onClicked.bind(this);
  }
  onClicked() {
    this.setState({
      fav: !this.state.fav
    })
  }

  render() {
    let pic = (this.state.fav ? require("./heart.png") : require("./heart_empty.png"))
    return (
      <div class="heart-btn-wrapper" onClick={this.onClicked}><img src={pic} /> </div>
    )
  }
}

class HeartBtn2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favourited: false
    }
    this.onClicked = this.onClicked.bind(this);
  }

  onClicked() {
    this.setState({
      favourited: !this.state.favourited
    })
  }

  render() {
    let style1 = (this.state.favourited ? "eclipse1" : "eclipse1__empty")
    let style2 = (this.state.favourited ? "eclipse2" : "eclipse2__empty")
    let style3 = (this.state.favourited ? "square" : "square__empty")
    let style4 = (this.state.favourited ? "square2" : "square2__empty")
    return (
      <div class="heart-btn" onClick={this.onClicked}>
        <div class={style1} />
        <div class={style2} />
        <div class={style3} />
        <div class={style4} />
      </div>
    )
  };
}

class MoreBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: 'none',
    }
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);

  }

  handleMouseOver(e) {
    this.setState({
      modalIsOpen: 'block'
    })
  }

  handleMouseOut(e) {
    this.setState({
      modalIsOpen: 'none'
    })
  }

  render() {
    return (
      <div class='more-btn' onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseOut}>
        <div class='dot' />
        <div class='dot' />
        <div class='dot' />
        <div class="dropdown-wrapper"
          style={{ display: this.state.modalIsOpen }}>
          <div class="dropdown-container">
            <p>Already a member?</p>
            <span><img src={require("./fb_logo.png")}></img><a href="https://www.facebook.com/cornellappdev/">Facebook</a></span>
            <span><img src={require("./ins_logo.png")}></img><a href="https://www.instagram.com/cornellappdev/">Instagram</a></span>
          </div>
        </div>
      </div>
    )
  }


}

class DetailBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false
    }
    this.onClicked = this.onClicked.bind(this);
  }
  onClicked() {
    this.setState({
      expand: !this.state.expand
    })
  }

  render() {
    let style = (this.state.expand ? "intro-box__expand" : "intro-box")
    let text = (this.state.expand ? "collapse" : "more")
    return (
      <div class="details introduction-wrapper">
        <p class={style}>{club.intro}</p>
        <div class="more-detail-wrapper" onClick={this.onClicked}><p class="more-details">{text}</p></div>
      </div>

    )
  }
}
class ClubDetails extends React.Component {
  render() {
    return (
      <div class="club-details-wrapper">
        <div class="details icon-title-wrapper">
          <img class="logo-img" src={club.image}></img>
          <div class="info-wrapper">
            <div class="title-heart-wrapper">
              <h1>{club.title}</h1>
              <HeartBtn />
            </div>
            <div class="tag-btn-wrapper">{club.tags[0]}</div>
            <div class="sub-more-wrapper">
              <SubscribeButton />
              <MoreBtn />
            </div>
          </div>
        </div>
        <DetailBtn />
        <div class="details contact-info-wrapper">
          <div class="info-display">
            <h3>Website</h3>
            <p>{club.website}</p>
          </div>
          <div class="info-display">
            <h3>Phone</h3>
            <p>{club.phone}</p>
          </div>
          <div class="info-display">
            <h3>Email</h3>
            <p>{club.email}</p>
          </div>
          <div class="info-display">
            <h3>Location</h3>
            <p>{club.location}</p>
          </div>
        </div>
        <div class="details recruitment-info-wrapper">
          <div class="apply-label">
            <h2>Apply</h2>
            <div class="apply-btn-wrapper">Apply Now</div>
          </div>
          <div class="recruit-info">
            <div class="recruit-detail"><p class="team">IOS Team</p>
              <p class="time">ends October, 2020</p></div>
            <div class="recruit-detail"><p class="team">Design Team</p>
              <p class="time">ends October, 2020</p></div>
            <div class="recruit-detail"><p class="team">Android Team</p>
              <p class="time">ends October, 2020</p></div>
          </div>
        </div>
      </div>
    )
  }
}

class ClubSlider extends React.Component {
  render() {
    return (
      <div class="club-slider-wrapper">
        <div class="slider js-flickity" data-flickity-options='{ "freeScroll": true, "wrapAround": true, "autoPlay":4000}'>
          <img class="slider-cell" src={require("./display_pic1.jpeg")} alt="" ></img>
          <img class="slider-cell" src={require("./display_pic2.jpeg")} alt=""></img>
          <img class="slider-cell" src={require("./display_pic3.jpeg")}></img>
        </div>
      </div>
    )
  }
}

export default ClubHome;