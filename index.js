import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Language from './Language/Language'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Language />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
