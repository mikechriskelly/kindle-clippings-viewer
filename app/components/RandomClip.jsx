import React from 'react';
import Clip from './Clip';
import LoadingIndicator from 'react-loading-indicator';

class RandomClip extends React.Component {
  setMainContent() {
    if(this.props.clippings.length > 0) {
      const clip = this.props.clippings[Math.floor(Math.random() * this.props.clippings.length)];
      return (
        <div className="RandomClip container">
          <p>{clip.text}</p>
          <div className="Clip--title">{clip.title}</div>
        </div>
      );
    } else {
      return(
        <LoadingIndicator 
          className="main-loader"
        />
      );
    }
  }
  render() {
    return (
      <div>
        {this.setMainContent()}
      </div>
    );
  }
}

export default RandomClip;