import React, { Component } from 'react';
import { render } from 'react-dom';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import logo from './image/logo1.png';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
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

          <div className="dropdown">
            <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Idiomas
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">  
              <a href="#!" className=" dropdown-item">
                <img alt="English" src="https://www.countryflags.io/us/shiny/64.png"/>
                Inglês
              </a>
              <a href="#!" className=" dropdown-item">
                <img alt="Español"src="https://www.countryflags.io/es/shiny/64.png" />
                Espanhol
              </a>
              <a href="#!" className=" dropdown-item">
                <img alt="Português" src="https://www.countryflags.io/br/shiny/64.png"/>
                Português
              </a>
            </div>
          </div>
        </div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
