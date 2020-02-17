import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table, Container,Modal, ModalBody, ModalFooter, ModalHeader, Button} from 'reactstrap';
import * as listActions from '../../store/modules/list';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PaginationView from '../../Components/Pagination';
import { format_date } from '../../Components/Hook/SimpleData';
import AddYoutuber from '../../Components/Admin/AddYoutuber';
import Wrapper from '../../Components/Common/Wrapper';

function UserRow(props) {
  const set_createdAt = format_date(props.user.get('createdAt'));
  if(props.user.get('maxPage')){
    return(<></>);
  }
  else{
    return (
      <tr id={props.user.get('id')} >
        <th scope="row">{props.index+1+(props.page-1)*10}</th>
        <td>{props.user.get('name')}</td>
        <td>{set_createdAt}</td>
        <td>{props.user.get('category')? props.user.get('category'): "관리자"}</td>
        <td>{props.user.get('type')}</td>
        {props.user.get('category')?
        <td>
          <Badge className="mr-1" color="primary" onClick={props.onClickEdit}>수정</Badge>
          <Badge className="mr-1" color="danger" onClick={props.onClickRemove}>삭제</Badge>
        </td> 
        :
         <td></td>}
      </tr>
    )
  }
}




class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      primary: false,
      danger: false,
      message: ""
    };
    this.togglePrimary = this.togglePrimary.bind(this);
    this.toggleDanger = this.toggleDanger.bind(this);
  }
  

  //유튜버 수정
  togglePrimary() {
    this.setState({
      primary: !this.state.primary,
    });
  }
  //유튜버 삭제
  toggleDanger() {
    this.setState({
      danger: !this.state.danger,
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
    console.log(this.props);
    const userList = this.props.lists;
    return (
      <div className="animated fadeIn">
        {/* 모달관련 수정*/}
        <Modal isOpen={this.state.primary} toggle={this.togglePrimary}
                className={'modal-primary ' + this.props.className}>
          <ModalHeader toggle={this.togglePrimary}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.togglePrimary}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.togglePrimary}>Cancel</Button>
          </ModalFooter>
        </Modal>
        {/* 모달관련 삭제 */}
        <Modal isOpen={this.state.danger} toggle={this.toggleDanger}
              className={'modal-danger ' + this.props.className}>
        <ModalHeader toggle={this.toggleDanger}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={this.toggleDanger}>Do Something</Button>{' '}
          <Button color="secondary" onClick={this.toggleDanger}>Cancel</Button>
        </ModalFooter>
      </Modal>

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
                        onClickRemove={this.toggleDanger}
                        onClickEdit={this.togglePrimary}
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
        </Row>
        <Row>
          <AddYoutuber/>
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

