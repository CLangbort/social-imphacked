import React from 'react';
import '../styles/components/social-media.scss';

export default class SocialMedia extends React.Component {
  render () {
    return (
      <ul className='social-media'>
        <li className='social-media__icon'>
          <img className='social-media__icon-image'
            src={ require('../styles/assets/fb-icon.svg') } />
        </li>
        <li className='social-media__icon'>
          <img className='social-media__icon-image'
            src={ require('../styles/assets/youtube-icon.svg') } />
        </li>
        <li className='social-media__icon'>
          <img className='social-media__icon-image' 
            src={ require('../styles/assets/insta-icon.svg') } />
        </li>
      </ul>
    );
  }
}
