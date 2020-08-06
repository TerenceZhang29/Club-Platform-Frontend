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

club.title = "Cornell Appdev";
club.image = require('../image/App+Dev+Logo+-+Red.png');
club.intro = "Cornell University’s open source app development project team. \r\n Simply put, we love building apps. Our 50 members take on various roles surrounding product development, beginning with an initial product vision and design, through engineering development, consistent iteration, and ultimately bringing a functional product to market. Our collaboration leads to stunning products that solve real problems for members of the Cornell and greater Ithaca community."
club.website = "www.appdev.com";
club.email = "Appdev@cornell.edu";
club.phone = "123-456-7890";
club.tags = ["engineering", "computer science"];
club.location = "Ithaca, NY";
club.events = ["Event1", "Event2", "Event3"];

class ClubHome extends React.Component {
  render() {
    return (
      <div class='club_home_page'>
        <ClubDetails />
        <ClubSlider />
      </div>
    )
  }
}

class ClubDetails extends React.Component {
  render() {
    return (
      <div class="club_details_wrapper">
        <div class="details icon_title_wrapper"></div>
        <div class="details introduction_wrapper"></div>
        <div class="details contact_info_wrapper"></div>
        <div class="details recruitment_info_wrapper"></div>
      </div>
    )
  }
}

class ClubSlider extends React.Component {
  render() {
    return (
      <div class="club_slider_wrapper">
        <div class="slider">
          <img src={require("./cropped_display_pic.png")} />
        </div>
        <div class="event_details_wrapper">
          <div class="event_description">
            <h3>Event Description</h3>
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