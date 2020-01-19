import React, { Component } from "react";
import "./Language.css";

class Language extends Component {
  render() {
    return (
      <div>
        <div class="row align-items-center">
          <div class="box col mx-auto text-center">
            <img
              class="logo"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/91436790925937.5e24891fa5818.png"
            />
            <h1> Enter in your language </ h1>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="box col mx-auto text-center">
            <img class="country" src="https://www.countryflags.io/us/shiny/64.png"/>
            <h2>English</h2>
          </div>
          <div class="box col mx-auto text-center">
            <img class="country" src="https://www.countryflags.io/es/shiny/64.png"/>
            <h2>Español</h2>
          </div>
          <div class="box col mx-auto text-center">
          <img class="country" src="https://www.countryflags.io/br/shiny/64.png"/>
          <h2>Português</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Language;
