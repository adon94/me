import React, { Component } from 'react';
import Particles from 'react-particles-js';
import pConfig from './particlesjs-config.json';

class Cover extends Component {

  render() {
    return (
      <Particles width='100%' height="37vh" params={pConfig} />
    );
  }
}

export default Cover;
