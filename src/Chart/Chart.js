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
    axios.get(`https://economia.awesomeapi.com.br/json/list/BTC-BRL/30`)
      .then(res => {
        const value = res.data;
        this.setState({ value });
        let time = value.map(dia => (dia.create_date));
        let open = value.map(dia => parseFloat(dia.bid));
        let high = value.map( dia => parseFloat(dia.high));
        let low = value.map( dia => parseFloat(dia.low));
        let bid = value.map( dia => parseFloat(dia.ask));
        for(let i = 0; i< 30; i++){
          valor.push(
            {
              x: new Date(time[i]),
              y: [open[i], high[i], low[i], bid[i]]
            }
          )
        }
      })
      return valor;
  }



  render() {
    console.log(this.state.series)
    return (
      

    <div className="container-fluid">
      <div className="row align-items-star ">
        <div className="col-12">
          <div className="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" className="btn btn-secondary btn-light btn-lg">Bitcoin</button>
            <button type="button" className="btn btn-secondary btn-light btn-lg">Etherium</button>
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