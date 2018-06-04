import React, { Component } from 'react';
import Intro from './components/Intro/Intro';
import TechStack from './components/Tech/TechStack';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <TechStack />
      </div>
    );
  }
}

export default App;
