import React, { Component, useEffect } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { connect  } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../../../store/modules/auth';

class Register extends Component {
  handleChange = (e) => {
    const form = "register"
    const {value, name} = e.target;
    const {AuthActions} = this.props;
    AuthActions.changeInput({name, value, form});
  }

  handleonSubmit = (e) => {
    e.preventDefault();
    const {id, pw, name} = this.props;
    const {AuthActions} = this.props;
    if(this.props.pw === this.props.pwConfirm)
      AuthActions.register({id, pw, name});
    else{
      
    }
  }
  
  
  render() {
    console.log("register_props", this.props)
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form type="register">
                    <h1>회원가입</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input onChange={this.handleChange} type="text" placeholder="name" autoComplete="username" name="name" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>ID</InputGroupText>
                      </InputGroupAddon>
                      <Input onChange={this.handleChange} type="text" placeholder="ID" autoComplete="email" name="id" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input onChange={this.handleChange} type="password" placeholder="Password" autoComplete="new-password" name="pw" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input onChange={this.handleChange} type="password" placeholder="Repeat password" autoComplete="new-password" name="pwConfirm"/>
                    </InputGroup>
                    <Button color="success" onClick={this.handleonSubmit} block>Create Account</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default connect(
  (state) => (
  {
      id: state.auth.getIn(['register', 'id']),
      name: state.auth.getIn(['register','name']),
      pw: state.auth.getIn(['register','pw']),
      pwConfirm: state.auth.getIn(['register','pwConfirm'])    
    
  }),
  (dispatch) => ({
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(Register);