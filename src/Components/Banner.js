import React from 'react';
import styled from 'styled-components';


const BannerWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: table;
  background-position: center;
  background-image: url('../../assets/img/banner.png');
`;

const BlackBlind = styled.div`
  background-color: black;
  display: table-row;
  opacity: 0.5;
`;



const Banner = () => {
  return(
    <BannerWrapper>
      <BlackBlind>
      유튜버 랭킹시스템
      </BlackBlind>
    </BannerWrapper>
  )
} 

export default Banner;