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
            <a href="#!">Registrar</a>
          </div>
          <div class="col-2 align-self-end login">
            <a href="#!">Login</a>
          </div>

          <div class="dropdown">
            <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Idiomas
            </button>
            <div class="dropdown-menu">
              <div class=" dropdown-item">
                  <icon alt="English" src="https://www.countryflags.io/us/shiny/64.png"/>
                  <a href="#!">Inglês</a>
              </div>
              <div class=" dropdown-item">
                  <icon alt="Español"src="https://www.countryflags.io/es/shiny/64.png" />
                  <a href="#!">Espanhol</a>
              </div>
              <div class=" dropdown-item">
                  <icon alt="Português" src="https://www.countryflags.io/br/shiny/64.png"/>
                  <a href="#!">Português</a>
              </div>
            </div>
          </div>
          
          <div className="row language">
           
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
