import React from 'react';
import { Link } from 'react-router-dom';
import { format_date } from '../Hook/SimpleData';
const RankItem = ({list}) => {
  const linkURL = (id) => {
    return(`/user/${id.id}`);
  }
  const  { 
    VF_rank,
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
    } = list.toJS()
  //시간 값 변경
  const set_publishedAt = format_date(publishedAt);
  const set_createAt = format_date(createAt);
  
    return (
      <tr>
        <td key={_id} className="text-center">
          <div>
            <span>{VF_rank}</span>
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
            개설일자: {set_publishedAt} / 업데이트 일자: {set_createAt}
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