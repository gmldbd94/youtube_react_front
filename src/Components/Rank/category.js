import React, { Component } from 'react';

import { Row, Col, Button } from 'reactstrap';
import styled from 'styled-components';
import categoryList from '../Hook/categoryList';



const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1px;
  font-weight: 600;
  font-size: 12px;
  border: 1px solid #c8ced3;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background-color: #20a8d8;
    color: white;
		cursor: pointer;
	}
`;

const Category_Box = styled.div`
  border-radius: 10px;
  padding: 5px;
  margin: 1px;
`;

class Category extends Component{
  
  render(){
    const {handleChange, handleDefault} = this.props;    

    return(
      <Category_Box>
          <Row>
            <Col lg={3} md={6} xs={12}>
              <Wrapper value="VF_index" name="sort" onClick={handleChange}>
                시청자선호지수
              </Wrapper>
            </Col>
            <Col lg={3} md={6} xs={12}>
              <Wrapper value="VE_index" name="sort" onClick={handleChange}>
                시청자평가지수
              </Wrapper>
            </Col>
            <Col lg={3} md={6} xs={12}>
              <Wrapper value="VC_index" name="sort" onClick={handleChange}>
                시청자소통지수
              </Wrapper>
            </Col>
            <Col lg={3} md={6} xs={12}>
              <Wrapper value="BC_index" name="sort" onClick={handleChange}>
                우수크리에이터지수
              </Wrapper>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={4} xs={4}>
              <Wrapper value="viewCount" name="sort" onClick={handleChange}>
                조회수
              </Wrapper>
            </Col>
            <Col lg={4} md={4} xs={4}>
              <Wrapper value="subCount" name="sort" onClick={handleChange}>
                구독자
              </Wrapper>
            </Col>
            <Col lg={4} md={4} xs={4}>
              <Wrapper value="videoCount" name="sort" onClick={handleChange}>
                영상수
              </Wrapper>
            </Col>
          </Row>
          <Row>
            {categoryList.map((category, index) => 
              <Col md={2} xs={6} key={index}>
                <Wrapper name="category" value={category} onClick={handleChange}>{category}</Wrapper>
              </Col>
            )}
          </Row>
          <Row>
            <Col lg={12} md={12} xs={12}>
              <Wrapper onClick={handleDefault}>
                초기화
              </Wrapper>
            </Col>
          </Row>
      </Category_Box>     
    )
  }
}
export default Category;