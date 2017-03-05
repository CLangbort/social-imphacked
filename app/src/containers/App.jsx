import React from 'react';
import {render} from 'react-dom';
import '../styles/app.scss';

import TimeContainer from '../components/time-container.jsx';
import SocialMedia from '../components/social-media.jsx';
import ParkInfo from '../components/park-info.jsx';
import ParkFact from '../components/park-fact.jsx';

const backgroundStyle = {
  background: require('../styles/assets/mock/people-in-parks_yosemite2.jpg'),
  'margin-top': '12px',
};

// TODO: delete when update with api
const imageSrc = 'https://travelpast50.com/wp-content/uploads/2015/09/half-dome-yosemite-close-2.jpg';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bgImage: imageSrc,
    }
  }

  render () {
    return (
      <div>
        <img className='app__full-bg-img'
          src={this.state.bgImage}/>
        <div className='app__info'>
          <ParkInfo/>
          <SocialMedia/>
          <TimeContainer/>
          <ParkFact/>
        </div>
      </div>
    );
  }
}

render(
  <App/>,
  document.getElementById('app'),
);
