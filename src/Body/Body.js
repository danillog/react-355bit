import { faBriefcase, faChartBar, faChartLine, faHeadset, faMoneyBillAlt, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from "react";
import Chart from '../Chart/Chart';
import ChartGame from '../chartGame/chartGame';
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
              <div className="col-9">
                <ChartGame />
              </div>
              <div className="col-3 chartTxt">
                <p> O gráfico irá subir ou descer? </p>
                <button type="button" class="btn btn-success btn-lg btn-block"> Vai Subir </button>
                <button type="button" class="btn btn-danger btn-lg btn-block"> Vai Descer </button>
              </div>
          </div>
        </div>
        
       {/* <div className="container-fluid texto1">
          <div className="row">
              <div className="col">
                  <p>Invista com a mesma rentabilidade que os tubarões de wall street, de 
                    forma inteligente e simplificada a <span>355BIT</span> recomenda operação através de 
                    ferramentas feitas para iniciantes no mercado financeiro.</p>
              </div>
          </div>
        </div>
         <div className="container-fluid texto1">
          <div className="row">
              <div className="col">
                  <p>Opere com <span>forex</span>, <span>cryptomoedas</span>, <span>ouro</span>, <span>prata</span> e 
                  <span>diversos ativos</span>.Deposite e saque de forma simples
                     e rápida usando bitcoins, com pagamentos instantâneos, dando 
                     suporte necessário aos seus investimentos.</p>
              </div>
          </div>
        </div> */}

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
