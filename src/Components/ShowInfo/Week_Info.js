import React from 'react';
import { Line } from 'react-chartjs-2';
import { Widget03 } from '../Widgets';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

import { fromJS, List } from 'immutable';
import { make_week_array } from '../Hook/SimpleData';
import color from '../../Styles/BrandColor';

const Week_info = ({data}) => {
  const makeLineData = (mainColor, key, {data}, {label}) => {
    
    let datasets
    const labels = make_week_array();
    if({data}){
      const list = List(fromJS(data));
      datasets = [{
        label: label,
        fill: true,
        lineTension: 0.1,
        backgroundColor: null,
        borderColor: mainColor,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: mainColor,
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [ data[6] ? list.getIn([6, key]) : 0,
                data[5] ? list.getIn([5, key]) : 0,
                data[4] ? list.getIn([4, key]) : 0,
                data[3] ? list.getIn([3, key]) : 0,
                data[2] ? list.getIn([2, key]) : 0,
                data[1] ? list.getIn([1, key]) : 0,
                data[0] ? list.getIn([0, key]) : 0]
      }];
    }
    else{
      datasets = {

      }
    }
    return({ labels: labels, datasets: datasets})
  }

  const options = {
    tooltips: {
      enabled: true,
    },
    
    
    maintainAspectRatio: false
  }

  // 증가수 및 증가율 조사
  const UPcount = ({data}, key) => {
    const list = List(fromJS(data));
    const object1 = data[6] ? list.getIn([6, key]) : 0;
    const object2 = data[0] ? list.getIn([0, key]) : 0;
    const result = object2 - object1;
    return result;
  }

  const UPscale = ({data}, key) => {
    const list = List(fromJS(data));
    const object1 = data[6] ? list.getIn([6, key]) : 1;
    const object2 = data[0] ? list.getIn([0, key]) : 0;
    const result = Math.round((object2-object1)/object1*100) ;
    
    return result;
  }

  return(
    <Card>
      <CardHeader>
        <strong><i className="icon-info pr-1"></i>주간 변동</strong>
      </CardHeader>
      <CardBody>
        <Row>
        <Col xs={12} sm={12} md={12}>
          <Widget03 dataBox={() => ({ variant: 'skype', 구독자증가: UPcount({data}, "subCount"), 구독자증가율: UPscale({data}, "subCount")+"%" })} >
              <Line data={makeLineData(color.LigthRed, "subCount", {data}, {label: "주간 구독자수"})} options={options} height={200} width={400} />
          </Widget03>
        </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <Widget03 dataBox={() => ({ variant: 'skype', 조회수증가: UPcount({data}, "viewCount"), 조회수증가율: UPscale({data}, "viewCount")+"%" })} >
              <div>
                <Line data={makeLineData(color.Teal, "viewCount", {data}, {label: "주간 조회수"})} options={options} height={200} width={400} />
              </div>
            </Widget03>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default Week_info;