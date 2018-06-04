import React, { Component } from 'react';
import Cover from './Cover';
import ProfilePic from './ProfilePic';
import Titles from './Titles';


class Intro extends Component {

  render() {
    return (
      <div className="intro-background">
        <header className="App-header">
          <Cover />
        </header>
        <ProfilePic />
        <Titles />
      </div>
    );
  }
}

export default Intro;
