import React from 'react';
import styled from 'styled-components';
import BrandColor from '../Styles/BrandColor';

const BannerWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  background-position: center;
  background-image: url('../../assets/img/banner.png');
`;

const BlackBlind = styled.div`
  background-color: rgba(1,1,1,0.8);
  height: 300px;
  width: 100vw;
  display:table-cell;
  vertical-align: middle;
`;

const BannerText = styled.div`
  margin: auto;
  padding: auto;
  background-color: none;
  text-align: center;
  margin-top : 100px;
  color: ${BrandColor.LightBlue};
`


const Banner = () => {
  return(
    <BannerWrapper>
      <BlackBlind>
        <BannerText>
          <h1>Youtuber Ranking</h1>
          <h3>당신이 찾는 모든 유튜버 랭킹</h3>
        </BannerText>
      </BlackBlind>
    </BannerWrapper>
  )
} 

export default Banner;