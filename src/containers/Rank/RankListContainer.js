import React, { Component } from "react"
import RankItem from '../../Components/Rank/RankItem';

class RankListContainer extends Component{
  createURL = (id) => {
    return `/users/${id}`
  }

  render(){
    return (
      <tbody>
        {this.props.lists.map((list, index) => {
          return(
            <RankItem key={index} list={list} link={this.createURL(list.toJS().id)}/>
          )
        })}
      </tbody>
    )
  }
}
 
export default RankListContainer;