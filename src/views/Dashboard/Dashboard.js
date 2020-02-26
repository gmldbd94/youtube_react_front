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
  CardFooter,
} from 'reactstrap';


//반응형
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import PaginationView from '../../Components/Pagination';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listActions from '../../store/modules/list';
import * as modalActions from '../../store/modules/showinfoModal';
import RankList from '../../Components/Rank/RankList';
import Category from '../../Components/Rank/category';
import Wrapper from '../../Components/Common/Wrapper';
import Center from '../../Components/Common/Center';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    if(isMobile){
      this.state = {
        categoryOpen: false,
      };
    }else{
      this.state = {
        categoryOpen: true,
      }
    }
   
  }
  toggle() {
    console.log(this.state);
    this.setState({
      categoryOpen: !this.state.categoryOpen,
    });
  }

  //카테고리검색 관련
  handleChange = async(e) => {
    let { value, name } = e.target;
    const { ListActions } = this.props;
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

  //info모달 관련
  handleModal = (e) => {
    const { value, name } = e.target;
    const { ModalActions } = this.props;
    ModalActions.ShowInfoModal({value, name});
  }

  //리스트갱신
  getRankList = () =>{
    const { page, sort, category, keyword, ListActions } = this.props
    ListActions.getRankList({page,sort,category,keyword});
  }

  //찾기버튼
  onClickSearch = async(e) => {
    const { ListActions } = this.props;
    await ListActions.changeRank({value:"1", name:"page"})
    this.getRankList();
  }  
  //처음 화면에 떳을때
  componentDidMount(){
    this.getRankList();
  }

  //다시한번 확인
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.page !== this.props.page ||
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
        <Row>
          <Col>
            <FormGroup>
              <Label htmlFor="appendedInputButton">유튜버 검색</Label>
              <div className="controls">
                <InputGroup>
                  <Input id="appendedInputButton" size="16" type="text" name="keyword" onChange={this.handleChange} />
                  <InputGroupAddon addonType="append">
                      <Button color="secondary" onClick={this.onClickSearch}>찾기!</Button>
                  </InputGroupAddon>
                </InputGroup>
              </div>
            </FormGroup>
          </Col>
        </Row>
        <MobileView>
          <Center>
            <span onClick={this.toggle}>카테고리 검색{this.toggle ? <> 펼치기</> : <>닫기</> } </span>
          </Center>          
        </MobileView>
        { this.state.categoryOpen && (
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
        </Row>)}
        <Row>
          <Col>
            <Card>
              <CardHeader>
                유튜버 순위 {' & '} 정보
              </CardHeader>
              <CardBody>
                <RankList lists={this.props.lists}/>
                
                </CardBody>
                <CardFooter>
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
                </CardFooter>
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

