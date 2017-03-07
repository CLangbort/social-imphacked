import React from 'react';
import '../styles/components/learn-more.scss';

const PEOPLE_LINK = 'http://www.peopleinparks.org/';

export default class LearnMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleLink: PEOPLE_LINK,
    }
  }

  render () {
    return (
      <div className='learn-more'>
        <a href={this.state.peopleLink} className='learn-more__link'>
          The Fund for People in Parks
        </a>
        <div className='learn-more__info'>
          We assist Western National Parks by supporting their local groups with project funding and professional consulting.  Please visit our site for more information.
        </div>
      </div>
    );
  }
}
