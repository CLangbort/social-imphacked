import React from 'react';

const SOCIAL_MEDIA = {
  facebook: {
    link: 'https://www.facebook.com/Fund-for-People-in-Parks-1127588057321437/',
  },
  insta: {
    link: 'https://www.instagram.com/fundforpeopleinparks/',
  },
  youtube: {
    link: '',
  },
}

export default class SocialMedia extends React.Component {
  render () {
    return (
      <ul className='social-media'>
        <li className='social-media__icon'>
          <a href={this.props.parkLink}>
            <img className='social-media__icon-image'
              src={ require('../styles/assets/tree-silhouette.svg') } />
          </a>
        </li>
        {SOCIAL_MEDIA.facebook.link &&
          <li className='social-media__icon'>
            <a href={ SOCIAL_MEDIA.facebook.link }>
              <img className='social-media__icon-image'
                src={ require('../styles/assets/fb-icon.svg') } />
            </a>
          </li>
        }
        {SOCIAL_MEDIA.youtube.link &&
          <li className='social-media__icon'>
            <a href={ SOCIAL_MEDIA.youtube.link }>
              <img className='social-media__icon-image'
                src={ require('../styles/assets/youtube-icon.svg') } />
            </a>
          </li>
        }
        {SOCIAL_MEDIA.insta.link &&
          <li className='social-media__icon'>
            <a href={ SOCIAL_MEDIA.insta.link }>
              <img className='social-media__icon-image'
                src={ require('../styles/assets/insta-icon.svg') } />
            </a>
          </li>
        }
      </ul>
    );
  }
}
