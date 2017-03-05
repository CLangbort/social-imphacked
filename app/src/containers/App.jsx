import React from 'react';
import { render } from 'react-dom';
import '../styles/app.scss';
import { Mock } from '../mock.js';

import SocialMedia from '../components/social-media.jsx';
import ParkInfo from '../components/park-info.jsx';
import ParkFact from '../components/park-fact.jsx';
import DonateBtn from '../components/donate-btn.jsx';

const backgroundStyle = {
  background: require('../styles/assets/mock/people-in-parks_yosemite2.jpg'),
  'margin-top': '12px',
};


class App extends React.Component {
  constructor(props) {
    super(props);
    const photoCredit = {
      photographer: Mock.image.photoCredit,
      web: Mock.image.photoCreditUrl,
    };
    this.state = {
      bgImage: Mock.image.url,
      parkName: Mock.park.name, // Used in ParkInfo
      parkLink: Mock.park.link, // Used in SocialMedia
      parkFacts: Mock.facts, // Used in ParkFact
      photoCredit, // Used in ParkInfo
    };
  }

  render () {
    return (
      <div>
        <img className='app__full-bg-img'
          src={this.state.bgImage}/>
        <div className='app__info'>
          <DonateBtn/>
          <ParkInfo
            name={ this.state.parkName }
            credit={ this.state.photoCredit }
            />
          <SocialMedia
            parkLink={ this.state.parkLink } />
          <ParkFact
            facts={ this.state.parkFacts }/>
        </div>
      </div>
    );
  }
}

render(
  <App/>,
  document.getElementById('app'),
);
