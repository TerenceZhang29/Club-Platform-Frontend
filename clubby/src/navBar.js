import React from 'react'

class NavBar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {

      }
  }

  render() {
    return (
      <ul>
        <li><a class="active" href="#home">Home</a></li>
        <li><a href="#news">Clubs</a></li>
        <li><a href="#contact">Events</a></li>
        <li><a href="#about">Applications</a></li>
        {/* <li><a href="#about">Profile</a></li> */}
      </ul>
    )
  }
}

export default NavBar