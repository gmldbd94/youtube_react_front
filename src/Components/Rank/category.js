import React from 'react';

import { Button, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import color from '../../Styles/BrandColor';
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1px;

  font-weight: 600;
  border-radius: 20px;
  font-size: 12px;
  cursor: pointer;
  &:before{
    background-color: ${color.LightBlue}
  };
  &:after {
    background-color: ${color.Blue}
  }

`;

const Category_Box = styled.div`
  border-radius: 10px;
  padding: 5px;
  margin: 1px;
`;

const Category = ({handleChange}) => {
  return(
    <Category_Box>
        <Row>
          <Col><Wrapper name="category" onClick={handleChange}>라이프스타일</Wrapper></Col>
          <Col><Wrapper name="category" onClick={handleChange}>음악/댄스</Wrapper></Col>
          <Col><Wrapper name="category" onClick={handleChange}>영화/애니메이션</Wrapper></Col>
          <Col><Wrapper name="category" onClick={handleChange}>키즈</Wrapper></Col>
          <Col><Wrapper name="category" onClick={handleChange}>여행/아웃도어</Wrapper></Col>
          <Col><Wrapper name="category" onClick={handleChange}>스포츠/건강</Wrapper></Col>
          <Col><Wrapper name="category" onClick={handleChange}>뉴스/정치/이슈</Wrapper></Col>
          <Col><Wrapper name="category" onClick={handleChange}>기관/단체/정부</Wrapper></Col>
        </Row>
        <Row>
          <Col><Wrapper name="category" onClick={handleChange}>엔터테인먼트</Wrapper></Col>
          <Col><Wrapper name="category" onClick={handleChange}>푸드</Wrapper></Col>
          <Col><Wrapper name="category" onClick={handleChange}>인물/유명인</Wrapper></Col>
          <Col><Wrapper name="category" onClick={handleChange}>IT/기술/과학</Wrapper></Col>
          <Col><Wrapper name="category" onClick={handleChange}>동물/취미</Wrapper></Col>
          <Col><Wrapper name="category" onClick={handleChange}>차/배/바이크</Wrapper></Col>
          <Col><Wrapper name="category" onClick={handleChange}>금융/재태크</Wrapper></Col>
          <Col><Wrapper name="category" onClick={handleChange}>교육/강의</Wrapper></Col>
        </Row>
    </Category_Box>     
  )
}
export default Category;