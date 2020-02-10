import React from "react"

const RankItem = ( { 
  publishedAt,
  first_index,
  img, 
  channel_name, 
  second_index, 
  viewCount, 
  fourth_index, 
  subCount, 
  videoCount, 
  country, 
  _id, 
  third_index, 
  id, 
  createAt, 
  category}) => {
    return (
      <tr>
      <td className="text-center">
        <div>
          <span>{first_index}</span>
        </div>
        <div>
          <span>{second_index}</span>
        </div>
        <div>
          <span>{third_index}</span>
        </div>
        <div>
          <span>{fourth_index}</span>
        </div>
      </td>
      <td>
      <div className="avatar text-center">
          <img src={img} className="img-avatar" alt="admin@bootstrapmaster.com" />
        </div>
      </td>
      <td className="text-center">
        <div>{channel_name}</div>
        <div className="small text-muted">
          <span>New</span> | Registered: {publishedAt}
        </div>
        
      </td>
      <td>
        <i className="flag-icon flag-icon-kr h4 mb-0" title={country} id={country}></i>
      </td>
      <td>
        <div>
          <span>조회수 : {viewCount}</span>
        </div>
        <div>
          <span>구독자 : {subCount}</span>
        </div>
        <div>
          <span>영상 : {videoCount}</span>
        </div>
      </td>
      <td className="text-center">
        <div>
          <span>{category}</span>
        </div>
      </td>
    </tr>
    )
  }
const RankList = ({lists}) => {
  const RankList = lists.map(
    (list, index) => {
      const { publishedAt,
              first_index,
              img, 
              channel_name, 
              second_index, 
              viewCount, 
              fourth_index, 
              subCount, 
              videoCount, 
              country, 
              _id, 
              third_index, 
              id, 
              createAt, 
              category, 
              maxPage
            } = list.toJS();
      if(maxPage){
        
      }else{
        return(
          <RankItem
            key= {index}
            publishedAt = {publishedAt}
            first_index = {first_index}
            img = { img }
            channel_name = {channel_name} 
            second_index = {second_index}
            viewCount = {viewCount}
            fourth_index = {fourth_index}
            subCount = {subCount}
            videoCount = {videoCount}
            country = {country}
            _id = {_id}
            third_index = {third_index} 
            id = { id }
            createAt = {createAt}
            category = {category}
          />
        );
      }
    }
  );
  return (
    <tbody>
      {RankList}
    </tbody>
  )
}
export default RankList;