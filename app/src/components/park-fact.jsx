import React from 'react';
import '../styles/components/park-fact.scss';

const FACT_CLASS = 'park-fact__fact';
const FACT_ACTIVE_CLASS = 'park-fact__active';

const TIME_INTERVAL = 15000;

export default class SocialMedia extends React.Component {
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
      this.setState(() => {
        const state = this.state

        state.facts[state.activeKey].active = false;
        state.activeKey++;

        if (state.activeKey >= state.factsLen) {
          state.facts[0].active = true;
          state.activeKey = 0;
        } else {
          state.facts[state.activeKey].active = true;
        }

        console.log(state.activeKey);
        return state;
      });
    }.bind(this), TIME_INTERVAL);
  }

  render () {
    return (
      <ul className='park-fact__list'>
        {this.state.facts.map(function(fact) {
          const className = !fact.active ? FACT_CLASS : `${FACT_CLASS} ${FACT_ACTIVE_CLASS}`;
          return (
            <li className={className}>
              {fact.value}
            </li>
          );
        })}
      </ul>
    );
  }
}
