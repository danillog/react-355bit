import React from 'react';
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mensagem: this.props.myMensagem,
      value: {},
      series: [{
        data: this.props.myData,
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
    
    }
    
  };
  

  
  render() {
    return (
      

    <div className="container-fluid">
      <div className="row">
        <div className="col" id="chart">
          <h3> {this.state.mensagem} </h3>
          <ReactApexChart options={this.state.options} series={this.state.series} type="candlestick" height={350} />
        </div>
      </div>
    </div>

    );
  }
}



export default ApexChart;