import Box from 'components/Box'
import SyntaxHighlighter from 'components/SyntaxHighlighter'
import useChartConfig from 'hooks/useChartConfig'
import React from 'react'
import { Chart } from 'react-charts'

let sourceCode

class chartView extends Component {
  
  render() {
    const { data, randomizeData } = useChartConfig({
      series: 10
    })
    const series = React.useMemo(
      () => ({
        showPoints: false
      }),
      []
    )
    const axes = React.useMemo(
      () => [
        { primary: true, type: 'time', position: 'bottom' },
        { type: 'linear', position: 'left' }
      ],
      []
    )
    return (
      <div>
        <button onClick={randomizeData}>Randomize Data</button>
        <br />
        <br />
        <Box>
          <Chart
            data={data}
            series={series}
            axes={axes}
            tooltip
            primaryCursor
            secondaryCursor
          />
        </Box>
        <br />
        <SyntaxHighlighter code={sourceCode} />
      </div>
        );
    }
  }
  
  export default chartView;
