import React, { Component } from 'react';
//json 관리툴
import {fromJS, toJS} from 'immutable';

//기본 요소
import {Col, Row} from 'reactstrap';

//리덕스
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userInfoActions from '../../store/modules/Userinfo';
//컴포넌드
import ChartInfo from '../../Components/ShowInfo/Chart_info';
import InfoWidgets from '../../Components/ShowInfo/Info_Widgets';
import WeekInfo from '../../Components/ShowInfo/Week_Info';
import ChannelInfo from '../../Components/ShowInfo/Channel_Info';

class User extends Component {
  //리덕스 관련
  getYoutuberInfo = () =>{
    const { UserInfoActions } = this.props;
    const { id: youtuber_id } = this.props.match.params;
    UserInfoActions.getYoutuberInfo({youtuber_id});
  }

  componentDidMount(){
    this.getYoutuberInfo();
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  
  render() {
    
    const info = this.props.info.toJS();
    const {max_view, max_like, max_dislike, max_comment} = this.props;
    console.log("user_comment", max_comment);
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <ChannelInfo data={info[0]}/>
          </Col>
          <Col lg={6}>
            <WeekInfo data={info}/>   
          </Col>
          <Col lg={12}>
            <ChartInfo data={info}/>
          </Col>
        </Row>
        <InfoWidgets 
          max_view={max_view} 
          max_like={max_like}
          max_dislike={max_dislike}
          max_comment={max_comment}
          />
      </div>
    )
  }
}

export default connect(
  (state) => ({
        info: state.info.get('info'),
        max_view: state.info.get('max_view'),
        max_like: state.info.get('max_like'),
        max_dislike: state.info.get('max_dislike'),
        max_comment: state.info.get('max_comment')
    //연결할 데이터
  }),
  (dispatch) => ({
    UserInfoActions: bindActionCreators(userInfoActions, dispatch)
  })
)(User);