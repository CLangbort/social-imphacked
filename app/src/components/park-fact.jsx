import React from 'react';
import '../styles/components/park-fact.scss';

export default class SocialMedia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fact: 'The tallest waterfall in North America is located in Yosemite National Park. Its flow peaks in May and it has a 2,425 foot drop. Its name is Yosemite Falls. There is a waterfall in the park named Bridalveil Falls',
    };
  }

  render () {
    return (
      <div className='park-fact'>
        {this.state.fact}
      </div>
    );
  }
}
