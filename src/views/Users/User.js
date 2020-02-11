import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';


import ChartLine from '../../Components/ShowInfo/Chart_Line';
import Info_Widgets from '../../Components/ShowInfo/Info_Widgets';
import Week_info from '../../Components/ShowInfo/Week_Info';
import Channel_info from '../../Components/ShowInfo/Channel_Info';

class User extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Channel_info/>
          </Col>
          <Col lg={6}>
           
                <Week_info/>
              
          </Col>
          <Col lg={12}>
            <ChartLine/>
          </Col>
        </Row>
        <Info_Widgets/>
      </div>
    )
  }
}

export default User;
