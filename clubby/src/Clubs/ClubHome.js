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
club.intro = "Cornell University’s open source app development project team. Simply put, we love building apps. Our 50 members take on various roles surrounding product development, beginning with an initial product vision and design, through engineering development, consistent iteration, and ultimately bringing a functional product to market. Our collaboration leads to stunning products that solve real problems for members of the Cornell and greater Ithaca community.";
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

class ClubDetails extends React.Component {
  render() {
    return (
      <div class="club-details-wrapper">
        <div class="details icon-title-wrapper">
          <div class="img-wrapper"><img src={club.image}></img></div>
          <div class="info-wrapper">
            <h1>{club.title}</h1>
            <div class="tag-btn-wrapper">{club.tags[0]}</div>
            <div class="sub-more-wrapper">
              <div class="subscribe-btn-wrapper">Subscribe</div>
              <div class='more-btn'>
                <div class='dot' />
                <div class='dot' />
                <div class='dot' />
              </div>
            </div>
          </div>
        </div>
        <div class="details introduction-wrapper">
          <p>Cornell University’s open source app development project team. <br />Simply put, we love building apps. Our 50 members take on various roles surrounding product development, beginning with an initial product vision and design, through engineering development, consistent intera-</p>
          <div class="wrapper"><p title={club.intro} class="more-details">...</p></div>
        </div>
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
        <div class="slider">
          <img src={require("./cropped_display_pic.png")} />
        </div>
        <div class="event-details-wrapper">
          <div class="event-description">
            <h4>Event Description</h4>
            <div class="register-btn-wrapper">Register</div>
          </div>
        </div>
      </div>
    )
  }
}
// class ClubHome extends React.Component {
//   render() {
//     return (
//       <div class='club_home_page'>
//         <body>
//           <ClubNameIcon />
//           <ClubIntroContact />
//           <ClubEvents />

//         </body>
//       </div>
//     )
//   }

// }

// class ClubNameIcon extends React.Component {
//   render() {
//     return (
//       <div class="club_name_image_section">
//         <div class='image'><img src={club.image} /></div>
//         <div class="title_sub">
//           <h1>{club.title}</h1>
//           <div>Already a member? <div class='sub_bt'> Subscribe</div></div>
//         </div>
//       </div>


//     );
//   }
// }

// class ClubIntroContact extends React.Component {
//   render() {
//     return (
//       <div class="club_intro_info_section">
//         <div class='intro'>
//           <h2>About</h2>
//           <p>{club.intro}</p>
//         </div>
//         <div class='contact'>
//           <div class='contact_cell'>
//             <h3>Email</h3>
//             <p>{club.email}</p>
//           </div>
//           <div class='contact_cell'>
//             <h3>Website</h3>
//             <p>{club.website}</p>
//           </div>
//           <div class='contact_cell'>
//             <h3>Phone</h3>
//             <p>{club.phone}</p>
//           </div>
//           <div class='contact_cell'>
//             <h3>Location</h3>
//             <p>{club.location}</p>
//           </div>

//         </div>
//       </div>
//     )
//   }
// }

// class ClubEvents extends React.Component {
//   renderEventBT() {
//     var tags = []

//     for (var i = 0; i < club.events.length; i++) {
//       tags.push(<div class='event_tag'>{club.events[i]}</div>)
//     }

//     return (
//       <div class='event_tag_wrapper'>
//         {tags}
//       </div>
//     )
//   }

//   render() {
//     return (
//       <div class='club_events'>
//         <h2>Recent Events</h2>
//         {this.renderEventBT()}
//       </div>
//     )
//   }



// }

export default ClubHome;