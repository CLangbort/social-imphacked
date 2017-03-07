import React from 'react';
import '../styles/components/park-fact.scss';

const FACT_CLASS = 'park-fact__fact';
const FACT_ACTIVE_CLASS = 'park-fact__fact park-fact__active';

const TIME_INTERVAL = 5000;

export default class ParkFact extends React.Component {
  /**
   * gets random key so the next fact shown is never the same and, when opening
   * a new tab, you don't always get shown the facts in the same order
   * @param currentKey {int} key of current active element
   */
  _getRandomNumber(currentKey = -1) {
    const max = this.state.factsLen - 1;
    const random = Math.floor(Math.random() * max);
    if (currentKey === random) {
      return this._getRandomNumber(currentKey);
    }
    return random;
  }

  /**
   * sets active element to not be active and sets new element to be active
   */
  _setActiveFact() {
    const state = this.state

    state.facts[state.activeKey].active = false;

    state.activeKey = this._getRandomNumber.call(this, state.activeKey);
    state.facts[state.activeKey].active = true;

    return state;
  }

  _nextFact() {
    clearInterval(this.interval);
    this.setState.call(this, this._setActiveFact)
    this.interval = setInterval(this.setState.bind(this, this._setActiveFact), TIME_INTERVAL);
  }

  constructor(props) {
    super(props);

    this.state = {
      facts: props.facts,
    }

    // makes all facts default to not active
    const facts = this.state.facts;
    const factsLen = facts.length;
    for (let i=0; i < factsLen; i++) {
      facts[i].active = false;
    }

    // sets necessary state properties to choose active element
    this.state.factsLen = factsLen;
    this.state.activeKey = this._getRandomNumber.call(this);
    facts[this.state.activeKey].active = true;

    // every x seconds (TIME_INTERVAL) update active fact
    // this.interval = setInterval(this.setState.bind(this, this._setActiveFact), TIME_INTERVAL);
  }

  render () {
    return (
      <div className='park-fact__container'>
        <ul className='park-fact__list'>
          {this.state.facts.map(function(fact, index) {
            return (
              <li
                key={index}
                className={!fact.active ? FACT_CLASS : `${FACT_CLASS} ${FACT_ACTIVE_CLASS}`}>
                <button
                  className='park-fact__btn-text'
                  onClick={this._nextFact.bind(this)}>
                  {fact.value}
                </button>
              </li>
            );
          }.bind(this))}
        </ul>
      </div>
    );
  }
}
