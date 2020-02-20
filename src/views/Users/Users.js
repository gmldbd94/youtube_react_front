import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table, Container } from 'reactstrap';
import * as listActions from '../../store/modules/list';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PaginationView from '../../Components/Pagination';
import { format_date } from '../../Components/Hook/SimpleData';
import AddYoutuber from '../../Components/Admin/AddYoutuber';
import EditYoutuber from '../../Components/Admin/EditYoutuber_modal';
import Wrapper from '../../Components/Common/Wrapper';
import RemoveYoutuber from '../../Components/Admin/RemoveYoutuber_modal';
import styled from 'styled-components';

const Pointer = styled.span`
  cursor: pointer;
`;

function UserRow(props) {
  const set_createdAt = format_date(props.user.get('createdAt'));
  return (
    <tr id={props.user.get('id')} >
      <th scope="row">{props.index+1+(props.page-1)*10}</th>
      <td>{props.user.get('name')}</td>
      <td>{set_createdAt}</td>
      <td>{props.user.get('category')? props.user.get('category'): "관리자"}</td>
      <td>{props.user.get('type')}</td>
      {props.user.get('category')?
      <td>
        <Pointer>
          <Badge 
            youtuber_id={props.user.get('id')} 
            youtuber_name={props.user.get('name')}
            youtuber_category={props.user.get('category')}
            className="mr-1" 
            color="primary" 
            onClick={props.onClickEdit}>
              수정
          </Badge>
          <Badge youtuber_id={props.user.get('id')} className="mr-1" color="danger" onClick={props.onClickRemove}>삭제</Badge>
        </Pointer>
      </td> 
      :
        <td></td>
      }
    </tr>
  )
}

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      youtuber: null,
      edit: false,
      remove: false,
      message: ""
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleRemove = this.toggleRemove.bind(this);
  }
  

  //유튜버 수정
  toggleEdit = (e) => {
    e.preventDefault();
    this.setState({
      edit: !this.state.edit,
      id: e.currentTarget.getAttribute('youtuber_id'),
      name: e.currentTarget.getAttribute('youtuber_name'),
      category: e.currentTarget.getAttribute('youtuber_category')
    });
  }
  //유튜버 삭제
  toggleRemove = (e) => {
    e.preventDefault();
    this.setState({
      remove: !this.state.remove,
      id: e.currentTarget.getAttribute('youtuber_id'),
    });
  }


  //page관련
  handlePage = (e) => {
    const { value, name} = e.target;
    const { ListActions} = this.props;
    e.preventDefault();
    ListActions.changeRank({value, name});
  }

  //리덕스 관련
  getAdminList = () =>{
    const { page, ListActions } = this.props
    ListActions.getAdminList({page});
    console.log("가져오는 페이지",page);
  }

  componentDidMount(){
    this.getAdminList();
  }

  componentDidUpdate(prevProps, preState) {
    if(prevProps.page !== this.props.page){
      this.getAdminList();
      console.log("update");
      document.documentElement.scrollTop = 0;
    }
  }

  render() {
    const userList = this.props.lists;
    
    return (
      <div className="animated fadeIn">
        {/* 모달관련 수정*/}
        <EditYoutuber 
          isOpen={this.state.edit} 
          toggle={this.toggleEdit} 
          id={this.state.id}
          name={this.state.name}
          category={this.state.category}
        />
        {/* 모달관련 삭제 */}
        <RemoveYoutuber
          isOpen={this.state.remove}
          toggle={this.toggleRemove}
          id={this.state.id}
        />

        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> 사용자 목록 <small className="text-muted">관리자 및 유튜버</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">채널명</th>
                      <th scope="col">등록일</th>
                      <th scope="col">카테고리</th>
                      <th scope="col">계정</th>
                      <th scope="col">비고</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user, index) =>
                      <UserRow 
                        key={index} 
                        index={index} 
                        user={user} 
                        page={this.props.page}
                        onClickRemove={this.toggleRemove}
                        onClickEdit={this.toggleEdit}
                      />
                    )}
                  </tbody>
                </Table>
                <Container>
                  <Wrapper>
                    <PaginationView
                      page={this.props.page}
                      maxPage={this.props.maxPage}
                      onClick={this.handlePage}
                    />
                  </Wrapper>
                </Container>
              </CardBody>
            </Card>
          </Col>
          <Col lg={6} md={12} xs={12}>
            <AddYoutuber/>
          </Col>
        </Row>
      </div>
    )
  }
}


export default connect(
  (state) => (
    {
    maxPage: state.list.get('maxPage'),
    keyword: state.list.get('keyword'),
    page: state.list.get('page'),
    lists: state.list.get('lists')
  }),
  (dispatch) => ({
    ListActions: bindActionCreators(listActions, dispatch),
  })
)(Users);

