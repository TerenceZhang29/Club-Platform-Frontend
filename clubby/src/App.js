import React, { Component } from 'react';
import './css/App.css';
import Navigation from './components/Navbar';
import Routes from './Routes';
import GoogleBtn from './components/GoogleBtn';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log_in: "NOT_LOGGED_IN",
      user: {}
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(data) {
    this.setState({
      log_in: "LOGGED_IN",
      user: data
    })
  }

  render() {
    return (
      <div className="App" >
        {/* <h3>LOG_IN_STATUS: {this.state.log_in}</h3> */}
        {console.log(this.state.user)}
        {/* <GoogleBtn log_in={this.state.log_in} handleLogin={this.handleLogin} /> */}
        <Navigation />
        <Routes log_in={this.state.log_in} user={this.state.user} />
      </div>
    );
  }
}

export default App;
