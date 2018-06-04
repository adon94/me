import React, { Component } from 'react';
import TechIcon from './TechIcon';

class TechStack extends Component {

  render() {
    const stack = [
      {
        image: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
        name: 'JS',
      },
      {
        image: 'https://cdn.worldvectorlogo.com/logos/react.svg',
        name: 'React',
      },
      {
        image: 'https://cdn.worldvectorlogo.com/logos/redux.svg',
        name: 'Redux',
      },
    ]
    
    return (
      <div className="stack-layout">
        <TechIcon tech={stack[0]} />
        <TechIcon tech={stack[1]} />
        <TechIcon tech={stack[2]} />
      </div>
    );
  }
}

export default TechStack;
