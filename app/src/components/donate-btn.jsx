import React from 'react';
import '../styles/components/donate-btn.scss';

const DONATE_LINK = 'http://www.peopleinparks.org/contribute.html';

export default class DonateBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      donateLink: DONATE_LINK,
    }
  }

  render () {
    return (
      <a href={this.state.donateLink} className='donate-btn'>
        Donate
      </a>
    );
  }
}
