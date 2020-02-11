import React from 'react';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';
import Avatar from '../Common/Avatar';
import styled from 'styled-components';
import SimpleDate from '../Hook/SimpleDate';
const Wrapper =  styled.div`
  min-height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
`;

const Channel_info = () => {
  const sample={
    img:"https://yt3.ggpht.com/a/AGF-l78nWFFcfHTnmj09ouv0pDyqKS3rI4bLs7sCbw=s88-c-k-c0xffffffff-no-rj-mo",
  }
  SimpleDate();
  return(
    <Card>
      <CardHeader>
        <strong><i className="icon-info pr-1"></i>User id: 유저 채널명</strong>
      </CardHeader>
      <CardBody>
        <Wrapper>
          <Avatar size="lg" url={sample.img}/>
        </Wrapper>
        
          <Table responsive striped hover>
            <tbody>
              <tr>
                <td>채널</td>
                <td>융융이'Channel</td>
              </tr>
              <tr>
                <td>채널 개설</td>
                <td>2019-01-01</td>
              </tr>
              <tr>
                <td>구독자</td>
                <td>100K</td>
              </tr>
              <tr>
                <td>조회수</td>
                <td>200K</td>
              </tr>
              <tr>
                <td>영상</td>
                <td>10K</td>
              </tr>
            </tbody>
          </Table>
      </CardBody>
    </Card>
  )
}

export default Channel_info;