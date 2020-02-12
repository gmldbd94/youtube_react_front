import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { make_week_array } from '../Hook/SimpleData';

const line = (data) => {
  let chart_data;
  if(data.length>0){
    console.log("data", data);
    console.log("line",data[0].VF_rank);

    chart_data = {
      labels: make_week_array(),
      datasets: [
        {
          label: '시청자선호지수',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,0.4)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 0.5,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [ data[6] ? data[6].VF_rank : 0,
                  data[5] ? data[5].VF_rank : 0,
                  data[4] ? data[4].VF_rank : 0,
                  data[3] ? data[3].VF_rank : 0,
                  data[2] ? data[2].VF_rank : 0,
                  data[1] ? data[1].VF_rank : 0,
                  data[0] ? data[0].VF_rank : 0]
        },
        {
          label: '시청자평가지수',
          fill: false,
          lineTension: 0.05,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [ data[6] ? data[6].VE_rank : 0,
                  data[5] ? data[5].VE_rank : 0,
                  data[4] ? data[4].VE_rank : 0,
                  data[3] ? data[3].VE_rank : 0,
                  data[2] ? data[2].VE_rank : 0,
                  data[1] ? data[1].VE_rank : 0,
                  data[0] ? data[0].VE_rank : 0]
        },
        {
          label: '시청자소통지수',
          fill: false,
          lineTension: 0.05,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [ data[6] ? data[6].VC_rank : 0,
                  data[5] ? data[5].VC_rank : 0,
                  data[4] ? data[4].VC_rank : 0,
                  data[3] ? data[3].VC_rank : 0,
                  data[2] ? data[2].VC_rank : 0,
                  data[1] ? data[1].VC_rank : 0,
                  data[0] ? data[0].VC_rank : 0]
        },
        {
          label: '우스크리에이터지수',
          fill: false,
          lineTension: 0.05,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: '#008eef',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [ data[6] ? data[6].BC_rank : 0,
                  data[5] ? data[5].BC_rank : 0,
                  data[4] ? data[4].BC_rank : 0,
                  data[3] ? data[3].BC_rank : 0,
                  data[2] ? data[2].BC_rank : 0,
                  data[1] ? data[1].BC_rank : 0,
                  data[0] ? data[0].BC_rank : 0]
        },
      ],
    };
    
  }
  else{
    chart_data ={}
  }
  
  return chart_data
}
 

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}
const ChartLine = ({data}) => {
  console.log("ChartLine",{data});
  return(
    <Card>
      <CardHeader>
          지수별 표시(FE, VE, VC, BC)
        </CardHeader>
        <CardBody>
          <div className="chart-wrapper">
            <Line data={line(data)} options={options} />
          </div>
        </CardBody>
    </Card>
  )
}

export default ChartLine;