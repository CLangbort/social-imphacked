import React from 'react';
import '../styles/components/donate-btn.scss';

const PEOPLE_LINK = 'http://www.peopleinparks.org/';

export default class DonateBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleLink: PEOPLE_LINK,
    }
  }

  render () {
    return (
      <div className='donate-btn'>
        <a href={this.state.peopleLink} className='donate-btn__link'>
          The Fund for People in Parks
        </a>
        <div className='donate-btn__info'>
          We assist Western National Parks by supporting their local groups with project funding and professional consulting.  Please visit our site for more information.
        </div>
      </div>
    );
  }
}
