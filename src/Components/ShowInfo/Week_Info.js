import React from 'react';
import { Line } from 'react-chartjs-2';
import { Widget03 } from '../Widgets';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { make_week_array } from '../Hook/SimpleData';

const Week_info = () => {
  const makeLineData = () => {
    const week_date = make_week_array();
    const labels = week_date;
    const datasets = [{
      label: 'My First dataset',
      fill: true,
      lineTension: 0.1,
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
      data: [65, 59, 80, 81, 56, 55, 40]
    }];
    return({ labels: labels, datasets: datasets})
  }

  const options = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false
  }
  return(
    <Card>
      <CardHeader>
        <strong><i className="icon-info pr-1"></i>주간 변동</strong>
      </CardHeader>
      <CardBody>
        <Row>
        <Col xs={12} sm={12} md={12}>
          <Widget03 dataBox={() => ({ variant: 'skype', 구독자증가: '89k', 구독자증가율: '459' })} >
              <Line data={makeLineData()} options={options}  height={100} width={400}/>
          </Widget03>
        </Col>
      </Row>
      <Row>
      <Col xs={12} sm={12} md={12}>
        <Widget03 dataBox={() => ({ variant: 'skype', 조회수증가: '500+', 조회수증가율: '292' })} >
          <div>
            <Line data={makeLineData()} options={options} height={100} width={400}/>
          </div>
        </Widget03>
      </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12}>
          <Widget03 dataBox={() => ({ variant: 'skype', 좋아요증가: '973k', 좋아요증가율: '1.792' })} >
            <div >
              <Line data={makeLineData()} options={options} height={100} width={400}/>
            </div>
          </Widget03>
        </Col>
      </Row>
      </CardBody>
    </Card>
  )
}

export default Week_info;