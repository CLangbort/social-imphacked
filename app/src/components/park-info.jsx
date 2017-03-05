import React from 'react';
import '../styles/components/park-info.scss';

export default class SocialMedia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Yosemite',
      photoCredit: 'Johnny Tsunami',
    };
  }

  render () {
    return (
      <div className='park-info'>
        {this.state.name}
      </div>
    );
  }
}
