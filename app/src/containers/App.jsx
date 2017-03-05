import React from 'react';
import { render } from 'react-dom';
import '../styles/app.scss';
import { Mock } from '../mock.js';
import LoadData from '../actions/requests.js'

import SocialMedia from '../components/social-media.jsx';
import ParkInfo from '../components/park-info.jsx';
import ParkFact from '../components/park-fact.jsx';
import DonateBtn from '../components/donate-btn.jsx';

const backgroundStyle = {
  background: require('../styles/assets/mock/people-in-parks_yosemite2.jpg'),
  'margin-top': '12px',
};


class App extends React.Component {
  _fetchData(data) {
    const photoCredit = {
      photographer: data.image.photoCredit,
      web: data.image.photoCreditUrl,
    };
    const state = {
      bgImage: 'https://www.nps.gov/common/uploads/photogallery/pwr/park/labe/FD7876CF-1DD8-B71B-0B7080DD537C42FC/FD7876CF-1DD8-B71B-0B7080DD537C42FC.jpg',
      parkName: data.park.name, // Used in ParkInfo
      parkLink: data.park.link, // Used in SocialMedia
      parkFacts: data.facts, // Used in ParkFact
      photoCredit, // Used in ParkInfo
    };
    return state;
  }

  constructor(props) {
    super(props);
    LoadData().then(function(data) {
      this.setState(this._fetchData.bind(this, data));
    }.bind(this));
  }

  render () {
    if (!this.state) {
      return (
        <div></div>
      );
    }
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
