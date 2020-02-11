import React from 'react';

import { Button, Row, Col } from 'reactstrap';


const Category = () => {
  return(
    <div>
     <h6>카테고리</h6>
        <Row>
          <Col>라이프스타일</Col>
          <Col>음악/댄스</Col>
          <Col><span className="text-center">영화/애니메이션</span></Col>
          <Col><span>키즈</span></Col>
          <Col><span>여행/아웃도어</span></Col>
          <Col><span>스포츠/건강</span></Col>
          <Col><span>뉴스/정치/이슈</span></Col>
          <Col><span>기관/단체/정부</span></Col>
        </Row>
        <Row>
          <Col><span>엔터테인먼트</span></Col>
          <Col><span>푸드</span></Col>
          <Col><span>인물/유명인</span></Col>
          <Col><span>IT/기술/과학</span></Col>
          <Col><span>동물/취미</span></Col>
          <Col><span>취미</span></Col>
          <Col><span>차/배/바이크</span></Col>
          <Col><span>금융/재태크</span></Col>
          <Col><span>교육/강의</span></Col>
        </Row>
    </div>     
  )
}
export default Category;