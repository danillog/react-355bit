import React, { Component } from 'react';
import { render } from 'react-dom';
import Select from 'react-select';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import i18n from './i18n';
import logo from './image/logo1.png';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      options : [
        { value:'en', label: 'English' },
        { value:'es', label: 'Español' },
        { value:'pt', label: 'Português' }
      ],
      valor: 'usd'
    }
  }

  handleChange = (event) => {
    let moeda;
    if(event.value === "en"){
      moeda = "usd";
    }
    if (event.value === "es") {
      moeda = "eur"
    } 
    if(event.value === "pt") {
      moeda = "brl"
    }
    this.setState({
      valor: moeda
    })
    i18n.changeLanguage(event.value);

  };

  render() {
    if (!this.state)
      return (<div>Loading...</div>);
    return (
      <div>
        <div className="row row-color">   
          <div className="col-6 align-self-start box-logo">
              <img alt ="Logo" src={logo} />
          </div>
          <div className="col-2 align-self-end links">
            <a href="#!">{i18n.t("Registrar")}</a>
          </div>
          <div className="col-2 align-self-end login">
            <a href="#!">Login</a>
          </div>
          <Select className="dropdown" isSearchable="false" options={this.state.options} 
          onChange= {this.handleChange}
          placeholder= {i18n.t("idioma")}/>
        </div>
        <Header />
        <Body moeda = {this.state.valor}/>
        <Footer />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
