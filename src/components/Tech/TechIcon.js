import React, { Component } from 'react';

class TechIcon extends Component {

  render() {
    const { tech } = this.props;
    const techStyle = {
      background: `url(${tech.image}) center`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      height: '100%',
    }
    return (
      <div className="icon-back">
        <div style={techStyle} />
      </div>
    );
  }
}

export default TechIcon;
