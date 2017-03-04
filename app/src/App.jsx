import React from 'react';
import {render} from 'react-dom';

import TimeContainer from './components/time-container.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <TimeContainer/>
      </div>
    );
  }
}

render(
  <App/>,
  document.getElementById('app'),
);
