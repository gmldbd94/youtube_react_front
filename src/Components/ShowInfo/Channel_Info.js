import React from 'react';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';
import Avatar from '../Common/Avatar';
import Wrapper from '../Common/Wrapper';
import {format_date, simple_count} from '../Hook/SimpleData';
const Channel_info = ({data}) => {
  let sample;
  if(data){
    console.log(data.createAt);
    sample = {
      channel_name: data.channel_name,
      img: data.img,
      viewCount: simple_count(data.viewCount),
      subCount: simple_count(data.subCount),
      videoCount: data.videoCount,
      id: data.id,
      createAt: format_date(data.createdAt),
      publishAt: format_date(data.publishedAt),
      category: data.category,
    }
  }else{
    sample ={
      img : "null"
    }
  }
  
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
                <td>{sample.channel_name}</td>
              </tr>
              <tr>
                <td>채널 개설</td>
                <td>{sample.publishAt}</td>
              </tr>
              <tr>
                <td>구독자</td>
                <td>{sample.subCount}</td>
              </tr>
              <tr>
                <td>조회수</td>
                <td>{sample.viewCount}</td>
              </tr>
              <tr>
                <td>영상</td>
                <td>{sample.videoCount}</td>
              </tr>
              <tr>
                <td>카테고리</td>
                <td>{sample.category}</td>
              </tr>
              <tr>
                <td>업데이트 일시</td>
                <td>{sample.createAt}</td>
              </tr>
            </tbody>
          </Table>
      </CardBody>
    </Card>
  )
}

export default Channel_info;