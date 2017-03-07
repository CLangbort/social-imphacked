import React from 'react';

const LINK_TEXT = 'Come check out our video!';
const VIDEO_CLASS = 'video-link__container';
const VIDEO_CLASS_BTN_CLOSED = 'video-link__btn-closed';
const TIMEOUT = 5000;

export default class VideoLink extends React.Component {
  /**
   * Used to either open/close the element showing the video button
   */
  _toggleVideoBtn() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.setState((prevState, props) => {
      prevState.open = !prevState.open;
      return prevState;
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      open: true,
    }

    this.timeout = setTimeout(this._toggleVideoBtn.bind(this), TIMEOUT);
  }

  render () {
    return (
      <div className={this.state.open ? VIDEO_CLASS : `${VIDEO_CLASS} ${VIDEO_CLASS_BTN_CLOSED}`}>
        <button
          className='video-link__btn'
          onClick={this._toggleVideoBtn.bind(this)}></button>
        <a href={this.props.link} className='video-link__link'>
          {LINK_TEXT}
        </a>
      </div>
    );
  }
}
