import React, { Component } from 'react';
import { render } from 'react-dom';
import Language from './Language/Language';
import './style.css';

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
