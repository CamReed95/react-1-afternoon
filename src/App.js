import React, { Component } from 'react';
import'./index.css';
import TopicBrowser from './components/TopicBrowser/TopicBrowser'

class App extends Component {
  render() {
     < TopicBrowser />
  }
}

export default App;


render () {
  return (
    <div className="puzzleBox evenAndOddPB">
      <h4> Evens and Odds </h4>
      <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)} />
      <button className="confirmationButton"> Split </button>
  <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) }</span>
      <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) }</span>

    </div>
  )
}

constructor () {
  super();

  this.state = {
    evenArray: [],
    oddArray: [],
    userInput: ''
  }
}

handleChange(val) {
  this.setState( {userInput: val} )
}