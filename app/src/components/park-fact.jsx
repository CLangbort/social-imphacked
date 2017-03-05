import React from 'react';
import '../styles/components/park-fact.scss';

const FACT_CLASS = 'park-fact__fact park-fact__fact-transition-left';
const FACT_ACTIVE_CLASS = 'park-fact__fact park-fact__active';

const TIME_INTERVAL = 5000;

export default class SocialMedia extends React.Component {
  _setActiveFact() {
    const state = this.state

    state.facts[state.activeKey].active = false;
    state.activeKey++;

    if (state.activeKey >= state.factsLen) {
      state.facts[0].active = true;
      state.activeKey = 0;
    } else {
      state.facts[state.activeKey].active = true;
    }

    return state;
  }

  constructor(props) {
    super(props);

    this.state = {
      facts: props.facts,
    }

    const facts = this.state.facts;
    const factsLen = facts.length;
    for (let i=0; i < factsLen; i++) {
      facts[i].active = false;
    }

    facts[0].active = true;
    this.state.activeKey = 0;
    this.state.factsLen = factsLen;

    setInterval(function() {
      this.setState(this._setActiveFact);
    }.bind(this), TIME_INTERVAL);
  }

  render () {
    return (
      <div className='park-fact__container'>
        <ul className='park-fact__list'>
          {this.state.facts.map(function(fact) {
            // const className = !fact.active ? FACT_CLASS : `${FACT_CLASS} ${FACT_ACTIVE_CLASS}`;
            const className = !fact.active ? FACT_CLASS : `${FACT_ACTIVE_CLASS}`;
            return (
              <li className={className}>
                {fact.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
