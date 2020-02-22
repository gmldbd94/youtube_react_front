import React, { Component } from "react"
import RankItem from "./RankItem";

const RankList = ({lists}) => {
  return(
    <tbody>
        {lists.map((list, index) => {
            return(<RankItem key={index} list={list}/>);
        })}
      </tbody>
  )
}
export default RankList;