import React, { Component } from "react"
import RankItem from "./RankItem";
import {
  Table,
} from 'reactstrap';


//반응형
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import RankItem_mobile from "./RankItem_mobile";

const RankList = ({lists}) => {
  return(
    <>
      <BrowserView>
        <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
          <thead className="thead-light">
          <tr>
            <th className="text-center">RANK</th>
            <th className="text-center"><i className="icon-people"></i></th>
            <th className="text-center">CHANNEL</th>
            <th className="text-center">Country</th>
            <th className="text-center">DATA</th>
            <th className="text-center">TYPE</th>
          </tr>
          </thead>          
          <tbody>
            {lists.map((list, index) => {
                  return(<RankItem key={index} list={list}/>);
              })}
          </tbody>        
            {/* <RankListContainer lists={this.props.lists}/> */}
        </Table>
      </BrowserView>

      <MobileView>
      <Table hover className="table-outline mb-0 d-sm-table">
          <thead className="thead-light">
          <tr>
            <th className="text-center">RANK</th>
            <th className="text-center"><i className="icon-people"></i></th>
            <th className="text-center">DATA</th>
            {/* <th className="text-center">TYPE</th> */}
          </tr>
          </thead>          
          <tbody>
            {lists.map((list, index) => {
                  return(<RankItem_mobile key={index} list={list}/>);
              })}
          </tbody>        
            {/* <RankListContainer lists={this.props.lists}/> */}
        </Table>
        
      </MobileView>
    </>

    
    

  )
}
export default RankList;