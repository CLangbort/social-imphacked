import React from 'react';
import '../styles/components/social-media.scss';

export default class SocialMedia extends React.Component {
  render () {
    return (
      <ul className='social-media'>
        <li className='social-media__icon'>
          <a href='#'>
            <img className='social-media__icon-image'
              src={ require('../styles/assets/tree-silhouette.svg') } />
          </a>
        </li>
        <li className='social-media__icon'>
          <a href='#'>
            <img className='social-media__icon-image'
              src={ require('../styles/assets/fb-icon.svg') } />
          </a>
        </li>
        <li className='social-media__icon'>
          <a href='#'>
            <img className='social-media__icon-image'
              src={ require('../styles/assets/youtube-icon.svg') } />
          </a>
        </li>
        <li className='social-media__icon'>
          <a href='#'>
            <img className='social-media__icon-image'
              src={ require('../styles/assets/insta-icon.svg') } />
          </a>
        </li>
      </ul>
    );
  }
}
