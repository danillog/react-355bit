import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
        <div>
            <div class="jumbotron">
                <div class="row">
                    <div class="col align-self-start box-logo">
                        <img
                        alt ="Logo"
                        src="https://raw.githubusercontent.com/danillog/react-355bit/master/src/image/Logos.png"/>
                    </div>
                    <div class="col align-self-end box-language1">
                    </div>
                    <div class="col align-self-end box-language2">
                    </div>
                    <div class="col align-self-end box-language3">
                    </div>
                </div>
            </div>
        </div>
        );
    }
  }
  
  export default Header;
  