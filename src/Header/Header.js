import React, { Component } from "react";
import logo from "../image/logo.png";
import "./Header.css";


class Header extends Component {
  render() {
    return (
        <div>
            <div class="jumbotron">
                <div class="row">
                    <div class="col align-self-start box-logo">
                        <img alt ="Logo" src={logo} />
                    </div>
                    <div class="col align-self-end box-language1">
                        <img alt="English" src="https://www.countryflags.io/us/shiny/64.png"/>
                    </div>
                    <div class="col align-self-end box-language2">
                        <img alt="Español"src="https://www.countryflags.io/es/shiny/64.png" />
                    </div>
                    <div class="col align-self-end box-language3">
                        <img alt="Português" src="https://www.countryflags.io/br/shiny/64.png"/>
                    </div>
                </div>
            </div>
        </div>
        );
    }
  }
  
  export default Header;
  