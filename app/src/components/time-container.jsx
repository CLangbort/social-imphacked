import React from 'react';
import '../styles/components/time-container.scss';

const LOCALE = 'en-us';
const DEFAULT_MONTH_LEN = 'short';

export default class TimeContainer extends React.Component {
  constructor(props) {
    super(props);
    const date = new Date();
    const month = date.toLocaleString(LOCALE, { month: DEFAULT_MONTH_LEN });
    const hours = date.getHours();
    const hours_twelve = hours > 12 ? hours - 12 : hours;
    this.state = {
      day: `${month} ${date.getDate()}`,
      time: `${hours_twelve}:${date.getMinutes()}`,
    };
  }

  render () {
    return (
      <div className='time-container'>
        {this.state.day}
        {this.state.time}
      </div>
    );
  }
}
