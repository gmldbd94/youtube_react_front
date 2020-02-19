import React, { Component } from 'react';
import {
  Button,
  Container,
  Modal, ModalBody, ModalFooter, ModalHeader,
} from 'reactstrap';

import * as api from '../../Lib/api';
import styled from 'styled-components';

const Label_wrapper = styled.span`
  min-width: 10vh;
`;

class RemoveYoutuber extends Component {
  state = {
    id: this.props.id,
    message: ""
  };

  
  //유튜버 삭제하기
  handleSubmit = async (e) => {
    e.preventDefault();
    await this.setState({id: this.props.id});
    try {
      const result = await api.youtuberRemove(this.state);
      this.setState({message: result.data});  
    } catch (error) {
      this.setState({message: "에러 ㅠㅠ"});
    } finally{
      window.location.reload(); 
    }

     
  }

  render(){
    return(
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={'modal-danger'}>
        <ModalHeader toggle={this.togglePrimary}>삭제하기</ModalHeader>
        <ModalBody>
          <Container>
            정말로 삭제하시겠습니까?
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={this.handleSubmit}>삭제하기</Button>
          <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
  }
};

export default RemoveYoutuber;