import React, { Component } from 'react';
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Container,
  Modal, ModalBody, ModalFooter, ModalHeader,
} from 'reactstrap';
import categoryList from '../Hook/categoryList';

import * as api from '../../Lib/api';
import styled from 'styled-components';

const LabelWrapper = styled.span`
  min-width: 10vh;
`;

class EditYoutuber extends Component {
  state = {
    id: this.props.id,
    name: this.props.name,
    category: this.props.category,
    visible: this.props.isOpen,
    message: ""
  };

  
  //유튜버 수정하기
  handleSubmit = async (e) => {
    e.preventDefault();
    await this.setState({id: this.props.id});
    try {
      const result = await api.youtuberEdit(this.state);
      this.setState({message: result.data});  
    } catch (error) {
      this.setState({message: "에러 ㅠㅠ"});
    } finally{
      // window.location.reload(); 
    }

     
  }

  //input값 수정
  handleChange = (e) =>{
    const { value, name } = e.target;
    this.setState( {[name]: value});
  }

  render()
    {
    return(
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={'modal-primary'}>
        <ModalHeader toggle={this.togglePrimary}>수정하기</ModalHeader>
        <ModalBody>
          <Container>
            <Col xs="12" md="12">
              <Form className="form-horizontal">            
                <FormGroup row>
                  <Col md="12">
                    <InputGroup>
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <LabelWrapper>
                            <strong>채널명</strong>         
                          </LabelWrapper>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" id="youtuber_channel_name" name="name" placeholder={this.props.name} onChange={this.handleChange}/>
                    </InputGroup>
                  </Col>
                  <Col md="12">
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
            </Col>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.handleSubmit}>수정하기</Button>
          <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      
    )
  }
};

export default EditYoutuber;