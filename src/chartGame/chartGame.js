import React from 'react';
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: {},
      series: [{
        data: [
          { 
            x: new Date(1538778600000),
            y: [6629.81, 6650.5, 6623.04, 6633.33]
          },
          {
            x: new Date(1538780400000),
            y: [6632.01, 6643.59, 6620, 6630.11]
          },
          {
            x: new Date(1538782200000),
            y: [6630.71, 6648.95, 6623.34, 6635.65]
          },
          {
            x: new Date(1538784000000),
            y: [6635.65, 6651, 6629.67, 6638.24]
          }
        ]
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

  

  render() {
    return (
      

    <div className="container-fluid">
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