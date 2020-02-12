import React from 'react';
import { CardGroup} from 'reactstrap';

import { Widget04 } from '../Widgets';


const Info_Widgets = () => {
  
  return(
    <div>
       <CardGroup className="mb-4">
        <Widget04 icon="icon-people" color="info" header="87.500" value="25">Visitors</Widget04>
        <Widget04 icon="icon-user-follow" color="success" header="385" value="25">New Clients</Widget04>
        <Widget04 icon="icon-basket-loaded" color="warning" header="1238" value="25">Products sold</Widget04>
        <Widget04 icon="icon-pie-chart" color="primary" header="28%" value="25">Returning Visitors</Widget04>
        <Widget04 icon="icon-speedometer" color="danger" header="5:34:11" value="25">Avg. Time</Widget04>
      </CardGroup>
    </div>
  )
}

export default Info_Widgets;