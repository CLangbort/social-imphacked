import React from 'react';
import '../styles/components/park-info.scss';

export default class SocialMedia extends React.Component {
  render () {
    return (
      <div className='park-info'>
        {this.props.name}
      </div>
    );
  }
}
