import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        data: [
          [1327359600000,30.95],
          [1327446000000,31.34],
          [1327532400000,31.18],
          [1327618800000,31.05],
          [1327878000000,31.00],
          [1327964400000,30.95],
          [1328050800000,31.24],
          [1328137200000,31.29],
          [1328223600000,31.85],
          [1328482800000,31.86],
          [1328569200000,32.28],
          [1328655600000,32.10],
          [1328742000000,32.65],
          [1328828400000,32.21],
          [1329087600000,32.35],
          [1329174000000,32.44],
          [1329260400000,32.46],
          [1329346800000,32.86],
          [1329433200000,32.75],
          [1329778800000,32.54],
          [1329865200000,32.33],
          [1329951600000,32.97],
          [1330038000000,33.41],
          [1330297200000,33.27],
          [1330383600000,33.27],
          [1330470000000,32.89],
          [1330556400000,33.10],
          [1330642800000,33.73],
          [1330902000000,33.22],
          [1330988400000,31.99],
          [1331074800000,32.41],
          [1331161200000,33.05],
          [1331247600000,33.64],
          [1331506800000,33.56],
          [1331593200000,34.22],
          [1331679600000,33.77],
          [1331766000000,34.17],
          [1331852400000,33.82],
          [1332111600000,34.51],
          [1332198000000,33.16],
        ]
      }],
      options: {
        chart: {
          type: 'area',
          height: 350
        },
        annotations: {
          yaxis: [{
            y: 30,
            borderColor: '#999',
            label: {
              show: true,
              text: 'Support',
              style: {
                color: "#fff",
                background: '#00E396'
              }
            }
          }],
          xaxis: [{
            x: new Date('14 Nov 2012').getTime(),
            borderColor: '#999',
            yAxisIndex: 0,
            label: {
              show: true,
              text: 'Rally',
              style: {
                color: "#fff",
                background: '#775DD0'
              }
            }
          }]
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
          style: 'hollow',
        },
        xaxis: {
          type: 'datetime',
          min: new Date('01 Mar 2012').getTime(),
          tickAmount: 6,
        },
        tooltip: {
          x: {
            format: 'dd MMM yyyy'
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100]
          }
        },
      },
    
    
      selection: 'one_year',
    
    };
  }


  updateData (timeline) {
    this.setState({
      selection: timeline
    })
  
    switch (timeline) {
      case 'one_month':
        this.setState({
          options: {
            xaxis: {
              min: new Date('28 Jan 2013').getTime(),
              max: new Date('27 Feb 2013').getTime(),
            }
          }
        })
        break;
      case 'six_months':
        this.setState({
          options: {
            xaxis: {
              min: new Date('27 Sep 2012').getTime(),
              max: new Date('27 Feb 2013').getTime(),
            }
          }
        })
        break;
      case 'one_year':
        this.setState({
          options: {
            xaxis: {
              min: new Date('27 Feb 2012').getTime(),
              max: new Date('27 Feb 2013').getTime(),
            }
          }
        })
        break;
      case 'ytd':
        this.setState({
          options: {
            xaxis: {
              min: new Date('01 Jan 2013').getTime(),
              max: new Date('27 Feb 2013').getTime(),
            }
          }
        })
        break;
      case 'all':
        this.setState({
          options: {
            xaxis: {
              min: undefined,
              max: undefined,
            }
          }
        })
        break;
      default:
  
    }
  }


  render() {
    return (
      

<div id="chart">
  <div id="chart-timeline">
    <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
  </div>
</div>

    );
  }
}



export default ApexChart;