import React, { Component } from "react";
import i18n from "../i18n";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
        <div>
            <footer className="page-footer font-small blue pt-4">   
                <div className="container-fluid text-center text-md-left">
                    <div className="row">

                    <div className="col-md-6 mt-md-0 mt-3 footerP">
                        <p>{i18n.t("footer")}</p>
                    </div>
                    <hr className="clearfix w-100 d-md-none pb-3"/>
                    <div className="col-md-3 mb-md-0 mb-3">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <a href="#topo">{i18n.t("footerIni")}</a>
                            </li>
                            <li className="list-group-item">
                                <a href="#!">{i18n.t("footerTerm")}</a>
                            </li>
                            <li className="list-group-item">
                                <a href="#!">{i18n.t("footerSup")}</a>
                            </li>
                            <li className="list-group-item">
                                <a href="#!">{i18n.t("footerPol")}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
                <div className="footer-copyright text-center py-3 ">©355 BIT Copyright 2020
                </div>
            </footer>
        </div>
        );
    }
  }
  
  export default Footer;
  