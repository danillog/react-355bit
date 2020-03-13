import React, { Component } from "react";
import "./Language.css";

class Language extends Component {
  render() {
    return (
      <div className="box-main container">
        <div className="linha row align-items-center">
          <div className="box-logo col mx-auto text-center">
            <img className="logo" src="https://raw.githubusercontent.com/danillog/react-355bit/master/src/image/Logos.png"/>
          </div>
        </div>
        <div className="row space align-items-center">
          <div className="box-language col mx-auto text-center">
            <img className="country" src="https://www.countryflags.io/us/shiny/64.png"/>
            <h2>English</h2>
          </div>
          <div className="box-language col mx-auto text-center">
            <img className="country" src="https://www.countryflags.io/es/shiny/64.png"/>
            <h2>Español</h2>
          </div>
          <div className="box-language col mx-auto text-center">
          <img className="country" src="https://www.countryflags.io/br/shiny/64.png"/>
          <h2>Português</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Language;
