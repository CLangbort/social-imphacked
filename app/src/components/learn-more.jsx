import React from 'react';

const PEOPLE_LINK = 'http://www.peopleinparks.org/';

export default class LearnMore extends React.Component {
  render () {
    return (
      <div className='learn-more'>
        <a href={PEOPLE_LINK} className='learn-more__link'>
          The Fund for People in Parks
        </a>
        <div className='learn-more__info'>
          We assist Western National Parks by supporting their local groups with project funding and professional consulting.  Please visit our site for more information.
        </div>
      </div>
    );
  }
}
