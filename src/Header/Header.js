import React, { Component } from "react";
import i18n from "../i18n";
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <div>
                
                <div className="jumbotron image" id="topo">
                    <div className="text-box"> 
                        <h2> {i18n.t("texto1")}</h2>
                    </div>
                </div>
            </div>
            );
        }
    }
export default Header;
