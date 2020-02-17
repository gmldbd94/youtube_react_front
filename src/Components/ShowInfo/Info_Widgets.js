import React from 'react';
import { CardGroup} from 'reactstrap';

import { Widget04 } from '../Widgets';


const Info_Widgets = ({max_view, max_like, max_dislike, max_comment}) => {
  console.log(typeof max_comment);
  return(
    <div>
       <CardGroup className="mb-4">
        <Widget04 icon="icon-people" color="info" header={max_view} value="25">개별콘텐츠 최다조회수</Widget04>
        <Widget04 icon="icon-user-follow" color="success" header={max_like} value="25">개별 콘텐츠 최다좋아요수</Widget04>
        <Widget04 icon="icon-basket-loaded" color="warning" header={max_dislike} value="25">개별 콘텐츠 최다싫어요수</Widget04>
        <Widget04 icon="icon-pie-chart" color="primary" header={max_comment} value="25">개별 콘텐츠 최다댓글수</Widget04>
        <Widget04 icon="icon-speedometer" color="danger" header="5:34:11" value="25">콘텐츠 총 영상 길이</Widget04>
      </CardGroup>
    </div>
  )
}

export default Info_Widgets;