import React, { Component, useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../../../store/modules/auth';

import { Link, Redirect } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Login extends Component {
  //input창 바꿨을 때
  handleChange = (e) => {
    const form = "login"
    const {value, name} = e.target;
    const {AuthActions} = this.props;
    AuthActions.changeInput({value, name, form});
  }

  handleonSubmit = (e) => {
    e.preventDefault();
    const {id, pw} = this.props;
    const {AuthActions} = this.props;

    AuthActions.login({id, pw})
    .then(()=>{
      this.props.history.push('/')
    })
    .catch((error)=>{
      console.log(error);
    })
  };
  
  render() {
    console.log("login_props", this.props);
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input onChange={this.handleChange} type="text" placeholder="ID" autoComplete="username" name="id" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input onChange={this.handleChange} type="password" placeholder="Password" autoComplete="current-password" name="pw"/>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button onClick={this.handleonSubmit} color="primary" className="px-4">Login</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    id: state.auth.getIn(['login', 'id']),
    pw: state.auth.getIn(['login','pw']),
  }),
  (dispatch) => ({
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(Login);
