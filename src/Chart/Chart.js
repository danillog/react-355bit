import axios from 'axios';
import React from 'react';
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: {},
      series: [{
        data: this.pegaValores(),
      }],
      
      options: {
        chart: {
          type: 'candlestick',
          height: 350
        },
        title: {
          text: 'Bitcoin para Real',
          align: 'left'
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        },
        theme: {
          palette: 'palette1'
        },
        responsive: [{
          breakpoint: undefined,
          options: {},
      }]
      },
    
    
    };
  }
  pegaValores() {
    let valor = [];
    
    axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${ this.props.myLanguage }&days=30`)
      .then(res => {
        const value = res.data;
        console.log(value)
        this.setState({ value });
        // let time = value.map(dia => (dia.create_date));
        // let high = value.map( dia => (dia.ask));
      //   for(let i = 0; i< 30; i++){
      //     valor.push(
      //       {
      //         x: new Date(value[i][0]),
      //         y: [value[i][1]]
      //       }
      //     )
      //   }
      })
      
      return valor;
  }

  mudaValores(moeda) {
    let valor = [];
    
    axios.get(`https://api.coingecko.com/api/v3/coins/${moeda}/market_chart?vs_currency=${ this.props.myLanguage }&days=30`)
      .then(res => {
        const value = res.data;
        this.setState({ value });
        for(let i = 0; i< 30; i++){
          valor.push(
            {
              x: new Date(value[i][0]),
              y: [value[i][1]]
            }
          )
        }
      })
      console.log(valor.push)
      return valor;
  }



  render() {
    console.log(this.state.series)
    return (
      

    <div className="container-fluid">
      <div className="row align-items-star ">
        <div className="col-12">
          <div className="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" className="btn btn-secondary btn-light btn-lg" 
              onClick = { () => this.mudaValores("bitcoin") }
            >Bitcoin</button>
            <button type="button" className="btn btn-secondary btn-light btn-lg"
            onClick = { () => this.mudaValores("ethereum") }
            >Ethereum</button>
            <button type="button" className="btn btn-secondary btn-light btn-lg">Litecoin</button>
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