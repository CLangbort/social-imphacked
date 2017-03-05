import React from 'react';
import {render} from 'react-dom';

import TimeContainer from '../components/time-container.jsx';
import SocialMedia from '../components/social-media.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <SocialMedia/>
        <TimeContainer/>
      </div>
    );
  }
}

render(
  <App/>,
  document.getElementById('app'),
);
