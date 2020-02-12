import React from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import { Card, CardBody, CardColumns, CardHeader } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

const ChartLine = () => {
  return(
    <Card>
      <CardHeader>
          지수별 표시(FE, VE, VC, BC)
        </CardHeader>
        <CardBody>
          <div className="chart-wrapper">
            <Line data={line} options={options} />
          </div>
        </CardBody>
    </Card>
  )
}

export default ChartLine