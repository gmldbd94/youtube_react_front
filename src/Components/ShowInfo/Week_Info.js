import React from 'react';
import { Line } from 'react-chartjs-2';
import { Widget03 } from '../Widgets';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

const Week_info = () => {
  const makeSocialBoxData = () => {

  }

  const socialChartOpts = () => {

  }
  return(
    <Card>
      <CardHeader>
        <strong><i className="icon-info pr-1"></i>주간 변동 추위</strong>
      </CardHeader>
      <CardBody>
      <Row>
        <Col xs={12} sm={6} md={6}>
          <Widget03 dataBox={() => ({ variant: 'facebook', friends: '89k', feeds: '459' })} >
            <div className="chart-wrapper">
              <Line data={makeSocialBoxData(0)} options={socialChartOpts} height={90} />
            </div>
          </Widget03>
        </Col>
        <Col xs={12} sm={6} md={6}>
          <Widget03 dataBox={() => ({ variant: 'twitter', followers: '973k', tweets: '1.792' })} >
            <div className="chart-wrapper">
              <Line data={makeSocialBoxData(1)} options={socialChartOpts} height={90} />
            </div>
          </Widget03>
        </Col>
        </Row>
        <Row>
        <Col xs={12} sm={6} md={6}>
          <Widget03 dataBox={() => ({ variant: 'linkedin', contacts: '500+', feeds: '292' })} >
            <div className="chart-wrapper">
              <Line data={makeSocialBoxData(2)} options={socialChartOpts} height={90} />
            </div>
          </Widget03>
        </Col>
        <Col xs={12} sm={6} md={6}>
          <Widget03 dataBox={() => ({ variant: 'google-plus', followers: '894', circles: '92' })} >
            <div className="chart-wrapper">
              <Line data={makeSocialBoxData(3)} options={socialChartOpts} height={90} />
            </div>
          </Widget03>
        </Col>
      </Row>
      </CardBody>
    </Card>
  )
}

export default Week_info;