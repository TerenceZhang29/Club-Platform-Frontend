import React from 'react';
import './css/App.css';
import Navigation from './components/Navbar';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;
