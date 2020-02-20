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
        <div class="row row-color">   
          <div class="col-6 align-self-start box-logo">
              <img alt ="Logo" src={logo} />
          </div>
          <div class="col-2 align-self-end links">
            <a>Registrar</a>
          </div>
          <div class="col-2 align-self-end login">
            <a>Login</a>
          </div>
          <div class="col-2 align-self-end sel">    
            <select className= " form-control form-control-sm seletor" id="idiomas">
              <option disabled selected>Idioma</option>
              <option value="Eng">English</option>
              <option value="Esp">Español</option>
              <option value="Pt">Português</option>
            </select>
          </div>
            {/* <div class="col align-self-end box-language1">
                <img alt="English" src="https://www.countryflags.io/us/shiny/64.png"/>
            </div>
            <div class="col align-self-end box-language2">
                <img alt="Español"src="https://www.countryflags.io/es/shiny/64.png" />
            </div>
            <div class="col align-self-end box-language3">
                <img alt="Português" src="https://www.countryflags.io/br/shiny/64.png"/>
            </div> */}
        </div>
        <Header/>
         <Body />
        <Footer />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
