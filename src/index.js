import React, { Component } from 'react';
import { render } from 'react-dom';
import Select from 'react-select';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import logo from './image/logo1.png';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "select",
      options : [
      { value: 'English', label: 'English' },
      { value: 'Espanol', label: 'Español' },
      { value: 'Portugues', label: 'Português' }
    ]
    };
  }

  render() {
    return (
      <div>
        <div className="row row-color">   
          <div className="col-6 align-self-start box-logo">
              <img alt ="Logo" src={logo} />
          </div>
          <div className="col-2 align-self-end links">
            <a href="#!">Registrar</a>
          </div>
          <div className="col-2 align-self-end login">
            <a href="#!">Login</a>
          </div>
          {/* <select id="lang" onChange={this.change} value={this.state.value}>
            <option value="select">Select</option>
            <option value="Java">Java</option>
            <option value="C++">C++</option>
          </select> */}
          <Select className="dropdown" isSearchable="false" options={this.state.options} placeholder="Select the lenguage"/>
        </div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
