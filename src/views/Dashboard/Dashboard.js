import React, { Component} from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  Container,
  FormGroup,
  Label,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
} from 'reactstrap';

import PaginationView from '../../Components/Pagination';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listActions from '../../store/modules/list';
import * as modalActions from '../../store/modules/showinfoModal';
import RankList from '../../Components/Rank/RankList';
import ShowInfoContainer from '../../containers/Rank/ShowInfoContainer';
import Category from '../../Components/Rank/category';
import Wrapper from '../../Components/Common/Wrapper';
class Dashboard extends Component {

  //sort 관련
  handleChange = async(e) => {
    let { value, name } = e.target;
    const { ListActions } = this.props;
    e.preventDefault();
    if(e.currentTarget.getAttribute('name') === "category"){
      name = "category";
      value = e.currentTarget.getAttribute("value");
    }
    if(e.currentTarget.getAttribute('name') === "sort"){
      name = "sort";
      value = e.currentTarget.getAttribute("value");
    }
    if(name === 'keyword' && value === ''){
      value = 0;
    }
    await ListActions.changeRank({value, name});
  }
  //초기화
  handleDefault = async (e) => {
    
    const{ ListActions } = this.props;
    e.preventDefault();
    await ListActions.getRankList({page:1, sort:0, keyword:0, category:0});
  }

  //경로
  createPagePath = () => {
    const { sort, category, keyword, page } = this.props
    return `?sort=${sort}&category=${category}&keyword=${keyword}&page=${page}`
  }

  //info모달 관련
  handleModal = (e) => {
    const { value, name } = e.target;
    const { ModalActions } = this.props;
    ModalActions.ShowInfoModal({value, name});
  }

  //리덕스 관련
  getRankList = () =>{
    const { page, sort, category, keyword, ListActions } = this.props
    ListActions.getRankList({page,sort,category,keyword});
  }

  componentDidMount(){
    this.getRankList();
  }

  componentDidUpdate(prevProps, preState) {
    if(prevProps.page !== this.props.page ||
      prevProps.keyword !== this.props.keyword ||
      prevProps.category !== this.props.category ||
      prevProps.sort !== this.props.sort
      ){
      this.getRankList();
      // document.documentElement.scrollTop = 0;

    }
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  
  render() {
    return (
      <div className="animated fadeIn">
        <ShowInfoContainer/>
        <Row>
          <Col>
            <FormGroup>
              <Label htmlFor="appendedInputButton">유튜버 검색</Label>
              <div className="controls">
                <InputGroup>
                  <Input id="appendedInputButton" size="16" type="text" name="keyword" onChange={this.handleChange} />
                  <InputGroupAddon addonType="append">
                      <Button color="secondary" onClick={this.getRankList}>찾기!</Button>
                  </InputGroupAddon>
                </InputGroup>
              </div>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                유튜버 카테고리 {' & '} 종류
              </CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <Category handleChange= {this.handleChange} handleDefault={this.handleDefault}/>
                  </Col>
                </Row>
              </CardBody>    
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                유튜버 순위 {' & '} 정보
              </CardHeader>
              <CardBody>
                
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th className="text-center">RANK</th>
                    <th className="text-center"><i className="icon-people"></i></th>
                    <th className="text-center">CHANNEL</th>
                    <th className="text-center">Country</th>
                    <th className="text-center">DATA</th>
                    <th className="text-center">TYPE</th>
                  </tr>
                  </thead>                  
                    {/* <RankListContainer lists={this.props.lists}/> */}
                    <RankList lists={this.props.lists}/>
                </Table>
                <Container>
                  <Row>
                    <Col sm="12" md={{ size: 4, offset:4 }}>
                      <Wrapper>
                        <PaginationView 
                          page={this.props.page} 
                          maxPage={this.props.maxPage}
                          sort={this.props.sort}
                          category={this.props.category}
                          keyword={this.props.keyword}
                          onClick={this.handleChange}
                        />
                      </Wrapper>
                    </Col>
                  </Row>
                </Container>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
  (state) => (
    {
    maxPage: state.list.get('maxPage'),
    lists: state.list.get('lists'),
    sort: state.list.get('sort'),
    category: state.list.get('category'),
    keyword: state.list.get('keyword'),
    page: state.list.get('page')
  }),
  (dispatch) => ({
    ListActions: bindActionCreators(listActions, dispatch),
    ModalActions: bindActionCreators(modalActions, dispatch)
  })
)(Dashboard);

