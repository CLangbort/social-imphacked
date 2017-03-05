import React from 'react';
import '../styles/components/social-media.scss';

export default class SocialMedia extends React.Component {
  render () {
    return (
      <div className='social-media'>
        <img className='social-media__icon'
            src={ require('../styles/assets/fb-icon.svg') } />
            <img className='social-media__icon'
            src={ require('../styles/assets/youtube-icon.svg') } />
        <img className='social-media__icon'
            src={ require('../styles/assets/insta-icon.svg') } />
      </div>
    );
  }
}
