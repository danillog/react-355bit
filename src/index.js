import React, { Component } from 'react';
import { render } from 'react-dom';
import Body from './Body/Body';
import Header from './Header/Header';
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
        <Header />
        <Body />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
