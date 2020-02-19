import React, { Component } from "react";
import "./Body.css";

class Body extends Component {
  render() {
    return (
      <div>

        <div className="container texto1">
          <div className="row">
              <div className="col">
                  <charView  />
              </div>
          </div>
        </div>
       
        <div className="container texto1">
          <div className="row">
              <div className="col">
                  <p>Invista com a mesma rentabilidade que os tubarões de wall street, de 
                    forma inteligente e simplificada a <span>355BIT</span> recomenda operação através de 
                    ferramentas feitas para iniciantes no mercado financeiro.</p>
              </div>
          </div>
        </div>
        <div className="container texto1">
          <div className="row">
              <div className="col">
                  <p>Opere <span>forex</span>, <span>cryptomoedas</span>, <span>ouro</span>, <span>prata</span> e 
                  <span>diversos ativos</span>.Deposite e saque de forma simples
                     e rápida usando bitcoins, com pagamentos instantâneos, dando 
                     suporte necessário aos seus investimentos.</p>
              </div>
          </div>
        </div>
        <div className="container texto1">
          <div className="row">
              <div className="col">
                  <h2>Uma ferramenta que faz o dinheiro trabalhar pra você. </h2>
              </div>
          </div>
        </div>
        <div className="container texto1">
          <div className="row">
              <div className="col">
                  <h2>Vantagens da 355BIT:</h2>
                  <ul>
                    <li>Saques instantâneos. Em menos de 24 horas
                      o dinheiro sacado já estará na sua carteira.</li>
                    <li>Robô de recomendações: Instale a ferramenta ‘’tal’’ 
                      em sua plataforma e obtenha as melhores recomendações para 
                      suas operações, comprovado com mais de 80% de assertividade em um período de 5 anos. </li>
                      <li>Tempo é dinheiro: Não se prive de trabalhar aos finais de 
                        semana, na sua casa de campo ou da praia. 
                        Nossa plataforma trabalha 24h por dia, inclusive aos
                        finais de semana.</li>
                  </ul>
              </div>
          </div>
        </div>
        <div className="container texto1">
          <div className="row">
            <div className="col-12">
              <h2>Ferramentas Disponíveis</h2>
            </div>
            <div className="col-6 doisCol">
                <p>Conta demo: Negocia sem dinheiro real.</p>
            </div>
              <div className="col-6 doisCol">
                <p>Suporte Online: Suporte online via email e chat. </p>
            </div>
          </div>
        </div>
      </div>
     
    );
  }
}

export default Body;
