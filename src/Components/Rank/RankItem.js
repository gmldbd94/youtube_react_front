import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { format_date } from '../Hook/SimpleData';
import { Badge, Tooltip} from 'reactstrap';
import Wrapper from '../Common/Wrapper';
import Center from '../Common/Center';
import { simple_count } from '../Hook/SimpleData';
class TooltipItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false,
    };
  }
  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen,
    });
  }
  render() {
    return (
      <div>
        <Badge className="mr-1" color={this.props.item.color} id={'Tooltip-' + this.props.id}>{this.props.item.rank}위</Badge>
        <Tooltip placement={this.props.item.placement} isOpen={this.state.tooltipOpen} target={'Tooltip-' + this.props.id} toggle={this.toggle}>
          {this.props.item.text}
        </Tooltip>
      </div>
    );
  }
}

class RankItem extends Component {  
  
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: [false, false],
    };
  };
  
  onClickItem = (e) => {
    const id = this.props.list.get('id');
    window.location.href = `#/user/${id}`;
  }

  toggle(i) {
    const newArray = this.state.tooltipOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    this.setState({
      tooltipOpen: newArray,
    });
  }
  render(){
    const {list} = this.props;
    const {
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
      createdAt, 
      category,
      } = list.toJS();
    const tooltips = [
      {
        placement: 'right',
        color: 'primary',
        rank: VF_rank,
        text: '시청자선호지수',
      },
      {
        placement: 'right',
        color: 'secondary',
        rank: VE_rank,
        text: '시청자평가지수',
      },
      {
        placement: 'right',
        color: 'success',
        rank: VC_rank,
        text: '시청자소통지수',
      },
      {
        placement: 'right',
        color: 'danger',
        rank: BC_rank,
        text: '우수크리에이터지수',
      },
    ];
    const set_publishedAt = format_date(publishedAt);
    const set_createAt = format_date(createdAt);
    return (
      <tr key={id} onClick={this.onClickItem}>
        
        <td  className="text-center">
          {tooltips.map((tooltip, i) => {
              return <TooltipItem key={i} item={tooltip} id={i} />;
            })}
        </td>
        <td>
        <Center>
          <div className="avatar text-center">
            <img src={img} className="img-avatar" alt={channel_name} />
          </div>
        </Center>
         </td>
        <td className="text-center">
          <div><h5>{channel_name}</h5></div>
          <div className="small text-muted">
            개설일자: {set_publishedAt} / 업데이트 일자: {set_createAt}
          </div>
          
        </td>
        <td>
          <Wrapper><i className="flag-icon flag-icon-kr h4 mb-0" title={country} id={country}></i></Wrapper>
        </td>
        <td>
          <div>
            <span>조회수 : {simple_count(viewCount)}</span>
          </div>
          <div>
            <span>구독자 : {simple_count(subCount)}</span>
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
}

export default RankItem;

  