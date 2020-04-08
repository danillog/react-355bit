import { faBriefcase, faChartBar, faChartLine, faHeadset, faMoneyBillAlt, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from "react";
import Chart from '../Chart/Chart';
import ChartGame from '../chartGame/chartGame';
import i18n from "../i18n";
import operando from "../image/operand.jpg";
import "./Body.css";

class Body extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid grafico texto1">
          <div className="row">
              <div className="col">
                <Chart />
              </div>
          </div>
        </div>

        <div className="container-fluid  texto1">
          <div className="row align-items-center">
              <div className="col-6 operando">
                <img src={operando}  alt="Usuario utilizando sistema"/>
              </div>
              <div className="col-6 ">
                <div className="col operandoTxt">
                  <h2>{i18n.t("operandoPorq")}</h2>
                  <p>{i18n.t("operandoResp")}</p>
                </div>
                <div className="col operandoTxt"> 
                  <h2>{i18n.t("operandoPorq1")}</h2>
                  <p>{i18n.t("operandoResp1")}</p>
                </div> 
              </div>
          </div>
        </div>

        <div className="container-fluid chart texto1">
          <div className="row">
              <div className="col">
                <ChartGame />
              </div>
          </div>
        </div>
        <div className="container-fluid texto1">
          <div className="row align-items-center">
              <div className="col-12 tituloV">
                <h2>{i18n.t("vantTitulo")}</h2>
              </div>
              <div className="col-3 vantagens text-center">
                <FontAwesomeIcon className="icons-vantagens" icon={faMoneyBillAlt} />
                <p>{i18n.t("vant1")}</p>
              </div>
              <div className="col-3 vantagens text-center">
                <FontAwesomeIcon className="icons-vantagens" icon={faChartLine} />
                <p>{i18n.t("vant2")}</p>
              </div>
              <div className="col-3 vantagens text-center">
                <FontAwesomeIcon className="icons-vantagens" icon={faStopwatch} />
                <p>{i18n.t("vant3")}</p>
              </div>
              <div className="col-3 vantagens text-center">
                <FontAwesomeIcon className="icons-vantagens" icon={faBriefcase} />
                <p>{i18n.t("vant4")}</p>
              </div>
          </div>
        </div>
        <div className="container-fluid texto1">
          <div className="row imgS">
            <div className="col-12 txtS">
              <h2> {i18n.t("simpTitulo")}</h2>
            </div>
          </div> 
          <div className="row doisColR">
            <div className="col-6 doisCol text-center">
                <FontAwesomeIcon className="iconS" icon={faChartBar} />
                <h5> {i18n.t("simpDemo")}</h5>
                <p>{i18n.t("simpDemoTxt")} </p>
            </div>
              <div className="col-6 doisCol text-center">
              <FontAwesomeIcon className="iconS" icon={faHeadset} />
              <h5>{i18n.t("simpSup")} </h5>
                <p> {i18n.t("simpSupTxt")} </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
