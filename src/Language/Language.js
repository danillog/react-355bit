import React, { Component } from "react";
import Logo from "../image/Logos.png";
import "./Language.css";

class Language extends Component {
  render() {
    return (
      <div class="box-main container">
        <div class="linha row align-items-center">
          <div class="box-logo col mx-auto text-center">
            <img class="logo" src={Logo}/>
          </div>
        </div>
        <div class="row space align-items-center">
          <div class="box-language col mx-auto text-center">
            <img class="country" src="https://www.countryflags.io/us/shiny/64.png"/>
            <h2>English</h2>
          </div>
          <div class="box-language col mx-auto text-center">
            <img class="country" src="https://www.countryflags.io/es/shiny/64.png"/>
            <h2>Español</h2>
          </div>
          <div class="box-language col mx-auto text-center">
          <img class="country" src="https://www.countryflags.io/br/shiny/64.png"/>
          <h2>Português</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Language;
