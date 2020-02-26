import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { make_week_array } from '../Hook/SimpleData';
import color from '../../Styles/BrandColor';

//반응형
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

const line = (data) => {
  let chart_data;
  if(data.length>0){
    chart_data = {
      labels: make_week_array(),
      datasets: [
        {
          order: -1,
          label: '시청자선호지수',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: color.LightBlue,
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: color.LightBlue,
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
          order: -1,
          label: '시청자평가지수',
          fill: false,
          lineTension: 0.05,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: color.LightGreen,
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: color.LightGreen,
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
          order: -1,
          label: '시청자소통지수',
          fill: false,
          lineTension: 0.05,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: color.Amber,
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: color.Amber,
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
          order: 1,
          label: '우수크리에이터지수',
          fill: false,
          lineTension: 0.05,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: color.LigthRed,
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: color.LigthRed,
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
  let height = 0;
  if(isMobile){
    height = 300;
  }else{
    height = 100
  }
  return(
    <Card>
      <CardHeader>
          지수별 표시(FE, VE, VC, BC)
        </CardHeader>
        <CardBody>
          <div className="chart-wrapper">
            <Line data={line(data)} options={options} height={height} width={400}/>
          </div>
        </CardBody>
    </Card>
  )
}

export default ChartLine;