import React from 'react';
import '../styles/components/video-link.scss';

const LINK_TEXT = 'Come check out our video!';
const VIDEO_CLASS = 'video-link__container';
const VIDEO_CLASS_BTN_CLOSED = 'video-link__btn-closed';

export default class VideoLink extends React.Component {
  toggleVideoBtn() {
    this.setState((prevState, props) => {
      prevState.open = !prevState.open;
      return prevState;
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      linkText: LINK_TEXT,
      open: true,
    }
  }

  render () {
    const videoLinkClass = this.state.open ? VIDEO_CLASS : `${VIDEO_CLASS} ${VIDEO_CLASS_BTN_CLOSED}`;

    return (
      <div className={videoLinkClass}>
        <button
          className='video-link__btn'
          onClick={this.toggleVideoBtn.bind(this)}></button>
        <a href={this.props.link} className='video-link__link'>
          {this.state.linkText}
        </a>
      </div>
    );
  }
}
