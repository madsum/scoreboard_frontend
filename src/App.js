import React, { Component } from 'react';
import Navigation from './component/Navigation/Navigation';
import Routes from './Routes.js';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Routes />
      </div>
    );
  }
}

export default App;