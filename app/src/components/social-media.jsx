import React from 'react';
import '../styles/components/social-media.scss';

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
  constructor(props) {
    super(props);
    this.state = {
      facebook: SOCIAL_MEDIA.facebook,
      insta: SOCIAL_MEDIA.insta,
      youtube: SOCIAL_MEDIA.youtube,
    };
  }

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
            <a href={ this.state.facebook.link }>
              <img className='social-media__icon-image'
                src={ require('../styles/assets/fb-icon.svg') } />
            </a>
          </li>
        }
        {this.state.youtube.link &&
          <li className='social-media__icon'>
            <a href={ this.state.youtube.link }>
              <img className='social-media__icon-image'
                src={ require('../styles/assets/youtube-icon.svg') } />
            </a>
          </li>
        }
        {this.state.insta.link &&
          <li className='social-media__icon'>
            <a href={ this.state.insta.link }>
              <img className='social-media__icon-image'
                src={ require('../styles/assets/insta-icon.svg') } />
            </a>
          </li>
        }
      </ul>
    );
  }
}
