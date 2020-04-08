import axios from 'axios';
import React from 'react';
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);
    this.pegaValores();
  }
  pegaValores(moeda) {
    if(moeda === undefined){
      moeda = 'bitcoin'
    }
    const din = 'usd'
    if(this.state){
      let oldButton = document.getElementById(this.state.moeda)
      oldButton.classList.remove("active")
      let newButton = document.getElementById(moeda);
      newButton.classList.add("active")
    }
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${ moeda }/market_chart?vs_currency=${din}&days=90`
        
      )
      .then(res => {
        const colecao = res.data.prices;
        const diaMap = new Map();
        colecao.forEach(dia_valor => {
          const dia = new Date(dia_valor[0]);
          const val = (+dia_valor[1]).toFixed(2);
          const dia_atual =
            dia.getFullYear() + ":" + dia.getMonth() + ":" + dia.getDate();
          let valores_dia;
          if (diaMap.has(dia_atual)) {
            valores_dia = diaMap.get(dia_atual);
          } else {
            valores_dia = {
              dia: dia,
              menor: Number.MAX_VALUE,
              maior: Number.MIN_VALUE,
              primeiro: -1,
              ultimo: -1
            };
            diaMap.set(dia_atual, valores_dia);
          }
          if (val < valores_dia.menor) {
            valores_dia.menor = val;
          }
          if (val > valores_dia.maior) {
            valores_dia.maior = val;
          }
          if (valores_dia.primeiro === -1) {
            valores_dia.primeiro = val;
          }
          valores_dia.ultimo = val;
        });
        const data = [];
        diaMap.forEach(valores_dia => {
          data.push({
            x: valores_dia.dia,
            y: [
              valores_dia.primeiro,
              valores_dia.maior,
              valores_dia.menor,
              valores_dia.ultimo
            ]
          });
        });

        this.setState({
          moeda: moeda,
          value: {},
          series: [{ data: data }],
          options: {
            chart: { type: "candlestick", height: 350 },
            title: { text: "", align: "left" },
            xaxis: { type: "datetime" },
            yaxis: { tooltip: { enabled: false } },
            theme: { palette: 'palette1'},
            responsive: [{breakpoint: undefined, options: {}, }]
          }
        });
      });
  }
  render() {
    if (!this.state)
      return (<div>Carregando...</div>);
    return (
    <div className="container-fluid">
      <div className="row align-items-star ">
        <div className="col-12">
          <div className="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" id="bitcoin" className="btn btn-secondary btn-light btn-lg active" 
              onClick = { () => this.pegaValores("bitcoin") }
            >Bitcoin</button>
            <button type="button" id="ethereum" className="btn btn-secondary btn-light btn-lg"
            onClick = { () => this.pegaValores("ethereum") }
            >Ethereum</button>
            <button type="button" id="litecoin" className="btn btn-secondary btn-light btn-lg"
            onClick = { () => this.pegaValores("litecoin")}
            >Litecoin</button>
            <button type="button" id="zcash" className="btn btn-secondary btn-light btn-lg"
            onClick = { () => this.pegaValores("zcash")}
            >Zcash</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col" id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="candlestick" height={350} />
        </div>
      </div>
    </div>

    );
  }
}



export default ApexChart;

