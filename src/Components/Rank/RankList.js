import React, { Component } from "react"
import RankItem from "./RankItem";

class RankList extends Component{
  handleClick = (e) =>{
    console.log(e.target);
    // const youtuber_id = e.currenttarget.getAttribute('id')
    // window.location.href = `/user/${youtuber_id}`;
  }
  
  render(){
    return (
      <tbody>
        {this.props.lists.map((list, index) => {
          if(list.toJS().maxPage){
            console.log("maxPage", list.toJS().maxPage);
          }else{          
            return(
              <RankItem key={index} list={list} handleClick={this.handleClick}/>
            )
          }
        })}
      </tbody>
    )
  }
}
 
export default RankList;