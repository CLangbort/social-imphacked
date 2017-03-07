import React from 'react';

export default class SocialMedia extends React.Component {
  render () {
    return (
      <div className='park-info'>
        {this.props.name}
        {this.props.credit.web ?(
          <a href={this.props.credit.web} className='park-info__photo-credits'>
            Photo taken by { this.props.credit.photographer }
          </a>
        ) : (
          <span className='park-info__photo-credits'>
            Photo taken by { this.props.credit.photographer }
          </span>
        )}
      </div>
    );
  }
}
