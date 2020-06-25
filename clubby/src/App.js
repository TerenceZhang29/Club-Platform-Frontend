import React from 'react';
import logo from './logo.svg';
import ClubListPage from "./Clublist.js"
import './App.css';

import NavBar from './navBar.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <ClubListPage />
      </div>
    );
  }
}

export default App;
