import React from 'react';
import { Link } from 'react-router-dom';
const RankItem = ({list}) => {
  const linkURL = (id) => {
    return(`/user/${id.id}`);
  }
  const  { 
    FA_rank,
    VE_rank,
    VC_rank,
    BC_rank,
    publishedAt,
    img, 
    channel_name, 
    viewCount, 
    subCount, 
    videoCount, 
    country, 
    _id, 
    id, 
    createAt, 
    category,
    maxPage} = list.toJS()
    return (
      <tr>
        <td className="text-center">
          <div>
            <span>{FA_rank}</span>
          </div>
          <div>
            <span>{VE_rank}</span>
          </div>
          <div>
            <span>{VC_rank}</span>
          </div>
          <div>
            <span>{BC_rank}</span>
          </div>
        </td>
        <td>
        <div className="avatar text-center">
            <img src={img} className="img-avatar" alt="admin@bootstrapmaster.com" />
          </div>
        </td>
        <td className="text-center">
          <div><Link to={linkURL({id})}>{channel_name}</Link></div>
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

  export default RankItem;