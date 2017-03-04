import React from 'react';
import '../styles/components/time-container.scss';

export default class TimeContainer extends React.Component {
  constructor(props) {
    super(props);
    const date = new Date();
    this.state = {
      currentTime: `${date.getHours()}:${date.getMinutes()}`,
    };
  }

  render () {
    return (
      <div className='time-container'>
        {this.state.currentTime}
      </div>
    );
  }
}
