import { faBriefcase, faChartBar, faChartLine, faHeadset, faMoneyBillAlt, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from "react";
import Chart from '../Chart/Chart';
import ChartGame from '../chartGame/chartGame';
import operando from "../image/operand.jpg";
import "./Body.css";

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: "brl",
      mensagem: "Você pode acertar para onde o valor irá?",
    }
  };

  updateChartGame(clique) {
    let valor = [];
    for(let i = 0; i< 30; i++){
      valor.push(
          {
            x: new Date(1538839800000),
            y: [6589.3, 6598.89, 6589.1, 6596.08]
          },
          {
            x: new Date(1538841600000),
            y: [6597.5, 6600, 6588.39, 6596.25]
          },
          {
            x: new Date(1538843400000),
            y: [6598.03, 6600, 6588.73, 6595.97]
          },
          {
            x: new Date(1538845200000),
            y: [6595.97, 6602.01, 6588.17, 6602]
          },
          {
            x: new Date(1538847000000),
            y: [6602, 6607, 6596.51, 6599.95]
          },
          {
            x: new Date(1538848800000),
            y: [6600.63, 6601.21, 6590.39, 6591.02]
          },
          {
            x: new Date(1538850600000),
            y: [6591.02, 6603.08, 6591, 6591]
          },
          {
            x: new Date(1538852400000),
            y: [6591, 6601.32, 6585, 6592]
          },
          {
            x: new Date(1538854200000),
            y: [6593.13, 6596.01, 6590, 6593.34]
          },
          {
            x: new Date(1538856000000),
            y: [6593.34, 6604.76, 6582.63, 6593.86]
          },
          {
            x: new Date(1538857800000),
            y: [6593.86, 6604.28, 6586.57, 6600.01]
          },
          {
            x: new Date(1538859600000),
            y: [6601.81, 6603.21, 6592.78, 6596.25]
          },
          {
            x: new Date(1538861400000),
            y: [6596.25, 6604.2, 6590, 6602.99]
          },
          {
            x: new Date(1538863200000),
            y: [6602.99, 6606, 6584.99, 6587.81]
          },
          {
            x: new Date(1538865000000),
            y: [6587.81, 6595, 6583.27, 6591.96]
          },
          {
            x: new Date(1538866800000),
            y: [6591.97, 6596.07, 6585, 6588.39]
          },
          {
            x: new Date(1538868600000),
            y: [6587.6, 6598.21, 6587.6, 6594.27]
          },
          {
            x: new Date(1538870400000),
            y: [6596.44, 6601, 6590, 6596.55]
          },
          {
            x: new Date(1538872200000),
            y: [6598.91, 6605, 6596.61, 6600.02]
          },
          {
            x: new Date(1538874000000),
            y: [6600.55, 6605, 6589.14, 6593.01]
          },
          {
            x: new Date(1538875800000),
            y: [6593.15, 6605, 6592, 6603.06]
          },
          {
            x: new Date(1538877600000),
            y: [6603.07, 6604.5, 6599.09, 6603.89]
          },
          {
            x: new Date(1538879400000),
            y: [6604.44, 6604.44, 6600, 6603.5]
          },
          {
            x: new Date(1538881200000),
            y: [6603.5, 6603.99, 6597.5, 6603.86]
          },
          {
            x: new Date(1538883000000),
            y: [6603.85, 6605, 6600, 6604.07]
          },
          {
            x: new Date(1538884800000),
            y: [6604.98, 6606, 6604.07, 6606]
          },
      )
    }
    switch (clique) {
      case 0:
        break;
      case 1:
        this.setState({
          mensagem: "Você acertou !!!",
          data: (this.state.data + valor)
        })
        break;
      case 2:
        this.setState({
          mensagem: "Você Errou !!!",
          series: [{ data: valor }]
        })
        break;
      default:
        break;  
    }
    return
  }


  clicado(value){
    this.setState({
      clique: value
    })
  };

  render() {
    return (
      <div>
        <div className="container-fluid grafico texto1">
          <div className="row">
              <div className="col">
                <Chart myLanguage = { this.state.language} />
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
                  <h2>O que é a 355 BIT?</h2>
                  <p>  A 355 Bit é uma plataforma de trading em criptomoeda! Você pode investir na alta ou
                    na baixa e ter retornos imediatos!</p>
                </div>
                <div className="col operandoTxt"> 
                  <h2>Por que investir com a 355 BIT?</h2>
                  <p>Nossa plataforma possui uma ferramenta de análises de ativos, que analisa o gráfico em tempo
                  real e sugere as melhores operações de alta/baixa*
                  </p>
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
                <h2>Vantagens da 355BIT</h2>
              </div>
              <div className="col-3 vantagens text-center">
                <FontAwesomeIcon className="icons-vantagens" icon={faMoneyBillAlt} />
                <p>Conta mínima de R$50,00</p>
              </div>
              <div className="col-3 vantagens text-center">
                <FontAwesomeIcon className="icons-vantagens" icon={faChartLine} />
                <p>Montante de negociação: R$10,00</p>
              </div>
              <div className="col-3 vantagens text-center">
                <FontAwesomeIcon className="icons-vantagens" icon={faStopwatch} />
                <p>Único modo de negociação non stop</p>
              </div>
              <div className="col-3 vantagens text-center">
                <FontAwesomeIcon className="icons-vantagens" icon={faBriefcase} />
                <p>Trabalhe nos fins de semana</p>
              </div>
          </div>
        </div>
        <div className="container-fluid texto1">
          <div className="row imgS">
            <div className="col-12 txtS">
              <h2> Simples e prático</h2>
            </div>
          </div> 
          <div className="row doisColR">
            <div className="col-6 doisCol text-center">
                <FontAwesomeIcon className="iconS" icon={faChartBar} />
                <h5> Conta Demo</h5>
                <p>Você pode utilizar a conta demo sempre que quiser aprimorar suas habilidades de negociação. 
                  Quando se sentir preparado, mude para sua conta real.
                </p>
            </div>
              <div className="col-6 doisCol text-center">
              <FontAwesomeIcon className="iconS" icon={faHeadset} />
              <h5> Suporte Online </h5>
                <p>Você pode enviar mensagens pelo sistema a qualquer 
                  momento e acompanhar seus tickets que serão respondidos em tempo recorde! 
                </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
