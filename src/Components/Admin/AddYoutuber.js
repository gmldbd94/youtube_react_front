import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  Alert
} from 'reactstrap';
import categoryList from '../Hook/categoryList';
import * as api from '../../Lib/api';
import styled from 'styled-components';

const LabelWrapper = styled.span`
  min-width: 10vh;
`;

class AddYoutuber extends Component {
  state ={
    id: '',
    name: '',
    category: '',
    state: 'nomal',
    message: ''
  }
  //유튜버 추가하기
  handleSubmit = async(e) => {
    console.log("누름", this.state);
    e.preventDefault();
    try {
      const result = await api.youtuberAdd(this.state);
      this.setState({state: "success"});
      this.setState({message: result.data});  
    } catch (error) {
      this.setState({state: "danger"});
      this.setState({message: "유튜브 ID를 확인 부탁드립니다."});
    }
    
    
  }
  handleChange = (e) =>{
    const { value, name } = e.target;
    this.setState( {[name]: value});
  }

  render(){
    return(
        <Card>
          <CardHeader>
            <strong>새로운 유튜버 추가하기</strong>
          </CardHeader>
          <CardBody>
            <Form className="form-horizontal">            
              <FormGroup row>
                <Col md="12">
                  <InputGroup>
                    <InputGroupAddon addonType="append">
                      <InputGroupText>
                        <LabelWrapper>
                        <strong>유튜브 ID</strong>                   
                        </LabelWrapper>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" id="youtuber_channel_name" name="id" placeholder="유튜브ID" onChange={this.handleChange}/>
                  </InputGroup>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="6">
                  <InputGroup>
                    <InputGroupAddon addonType="append">
                      <InputGroupText>
                        <LabelWrapper>
                          <strong>채널명</strong>                   
                        </LabelWrapper>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" id="youtuber_channel_name" name="name" placeholder="채널명" onChange={this.handleChange}/>
                  </InputGroup>
                </Col>
                <Col md="6">
                  <InputGroup>
                    <InputGroupAddon addonType="append">
                      <InputGroupText>
                      <LabelWrapper>
                        <strong>카테고리</strong>                   
                      </LabelWrapper>
                      </InputGroupText>
                    </InputGroupAddon>                    
                      <Input type="select" name="category" id="youtuber_category" onChange={this.handleChange}>
                        {categoryList.map((category, index) => 
                          <option key={index} value={category}>{category}</option>
                        )}
                      </Input>
                  </InputGroup>
                </Col>
              </FormGroup>
            </Form>
            <Alert color={this.state.state}>
              {this.state.message}
            </Alert>
          </CardBody>
          <CardFooter>
            <Row>
              <Col xs="2">
                <Button type="submit" size="sm" color="success"  onClick={this.handleSubmit}><i className="fa fa-dot-circle-o"></i> Submit</Button>
              </Col>
            </Row>
          </CardFooter>
        </Card>
    )
  }
};

export default AddYoutuber;