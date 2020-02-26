import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
        <div>
            <footer class="page-footer font-small blue pt-4">   
                <div class="container-fluid text-center text-md-left">
                    <div class="row">

                    <div class="col-md-6 mt-md-0 mt-3 footerP">
                        <p>*O robô não prevê 100% dos casos.</p>
                    </div>
                    <hr class="clearfix w-100 d-md-none pb-3"/>
                    <div class="col-md-3 mb-md-0 mb-3">
                        <ul class="list-group list-group-flush">
                            <li className="list-group-item">
                                <a href="#topo">Início</a>
                            </li>
                            <li className="list-group-item">
                                <a href="#!">Termos de Serviço</a>
                            </li>
                            <li className="list-group-item">
                                <a href="#!">Suporte</a>
                            </li>
                            <li className="list-group-item">
                                <a href="#!">Política de Privacidade</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
                <div class="footer-copyright text-center py-3 ">©355 BIT Copyright 2020
                </div>
            </footer>
        </div>
        );
    }
  }
  
  export default Footer;
  