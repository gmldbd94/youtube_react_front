import React, { Component } from "react"
import RankItem from "./RankItem";

class RankList extends Component{
  render(){
    return (
      <tbody>
        {this.props.lists.map((list, index) => {
          if(list.toJS().maxPage){
            console.log("maxPage", list.toJS().maxPage);
          }else{          
            return(
              <RankItem key={index} list={list}/>
            )
          }
        })}
      </tbody>
    )
  }
}
 
export default RankList;