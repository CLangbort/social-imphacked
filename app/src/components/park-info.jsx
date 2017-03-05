import React from 'react';
import '../styles/components/park-info.scss';

export default class SocialMedia extends React.Component {
  render () {
    return (
      <div className='park-info'>
        {this.props.name}
        {this.props.credit.web ?(
          <a href={this.props.credit.web} className='park-info__photo-credits'>
            { this.props.credit.photographer }
          </a>
        ) : (
          <span className='park-info__photo-credits'>
            { this.props.credit.photographer }
          </span>
        )}
      </div>
    );
  }
}
