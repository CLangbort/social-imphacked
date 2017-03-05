import React from 'react';
import '../styles/components/park-info.scss';

export default class SocialMedia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Yosemite National Park, CA',
      photoCredit: 'Johnny Tsunami',
    };
  }

  render () {
    return (
      <div className='park-info'>
        <p className='park-info__text'>{this.state.name}</p>
        <p className='park-info__text'>{this.state.photoCredit}</p>
      </div>
    );
  }
}
