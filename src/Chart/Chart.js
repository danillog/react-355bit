import axios from 'axios';
import { addHours, endOfDay, endOfHour, isSameDay, isSameHour, startOfDay, startOfHour } from 'date-fns';
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
          text: '',
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
  }conso
  pegaValores() {
    let valor = [];
    
    axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${ this.props.myLanguage }&days=30`)
      .then(res => {
        const value = res.data;
        this.setState({ value });
        let valueData = value.prices
        let days = new Date(valueData[0][0]);
        let firstHour;
        let lastHour;
        let firstValue;
        let lowValue = valueData[1][1];
        let highValue = valueData[1][1];
        let lastValue;
        let control = 0;
        for(let i = 0; i <= valueData.length; i++){
          if( isSameDay( new Date(valueData[i][0]), days)){
            firstHour = startOfHour(startOfDay(days));
            lastHour = endOfHour(endOfDay(days)); 
            if(isSameHour(days, firstHour)){
              firstValue = valueData[i][1]
              control++
            }
            
            if(isSameHour(days, lastHour)){
              lastValue = valueData[i][1]
              control++
            }

            if(lowValue <= valueData[i][1]){
              lowValue = valueData[i][1]
            }
            if(highValue >= valueData[i][1]){
              highValue = valueData[i][1]
            }
            if(control === 2){
              valor.push(
                {
                  x: new Date(valueData[i][0]),
                  y: [firstValue, highValue, lowValue, lastValue]
                }
              )
              control = 0;
            }
          }
          days = addHours(days, 1)
        }
      })
      return valor;
  }

  mudaValores(moeda) {
    let valor = [];
    axios.get(`https://api.coingecko.com/api/v3/coins/${moeda}/market_chart?vs_currency=${ this.props.myLanguage }&days=30`)
      .then(res => {
        const value = res.data;
        this.setState({ value });
        let valueData = value.prices
        let days = new Date(valueData[0][0]);
        let firstHour;
        let lastHour;
        let firstValue;
        let lowValue = valueData[1][1];
        let highValue = valueData[1][1];
        let lastValue;
        let control = 0;
        for(let i = 0; i <= valueData.length; i++){
          if( isSameDay( new Date(valueData[i][0]), days)){
            firstHour = startOfHour(startOfDay(days));
            lastHour = endOfHour(endOfDay(days)); 
            if(isSameHour(days, firstHour)){
              firstValue = valueData[i][1].toFixed(1)
              control++
            }
            
            if(isSameHour(days, lastHour)){
              lastValue = valueData[i][1].toFixed(1)
              control++
            }

            if(lowValue <= valueData[i][1]){
              lowValue = valueData[i][1].toFixed(1)
            }
            if(highValue >= valueData[i][1]){
              highValue = valueData[i][1].toFixed(1)
            }
            if(control === 2){
              valor.push(
                {
                  x: new Date(valueData[i][0]),
                  y: [firstValue, highValue, lowValue, lastValue]
                }
              )
              control = 0;
            }
          }
          days = addHours(days, 1)
        }
      })
      this.setState({
        series:[{
          data: valor
        }],
      })
      return valor;
  }
  render() {
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
            <button type="button" className="btn btn-secondary btn-light btn-lg"
            onClick = { () => this.mudaValores("litecoin")}
            >Litecoin</button>
            <button type="button" className="btn btn-secondary btn-light btn-lg"
            onClick = { () => this.mudaValores("zcash")}
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