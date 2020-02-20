import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/youtube.jpeg'
import sygnet from '../../assets/img/brand/sygnet.svg'
import * as api from '../../Lib/api';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';

const propTypes = {
  children: PropTypes.node,
};


const defaultProps = {};

class DefaultHeader extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
          <AppNavbarBrand
            href="/"
            full={{ src: logo, width: 89, height: 50, alt: 'Youtube Logo' }}
            minimized={{ src: sygnet, width: 30, height: 30, alt: 'youtube Logo' }}
          />         
        <Nav className="d-sm-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/dashboard" className="nav-link" >Dashboard</NavLink>
          </NavItem>
          <NavItem className="px-3">
          {this.props.isAuthenticated && <Link to="/users" className="nav-link">등록된 유튜버</Link>}
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <span>
                관리자
              </span>
            </DropdownToggle>
            <DropdownMenu right>
              {!this.props.isAuthenticated? 
              <>
              <DropdownItem onClick={this.props.onLogin}><i className="fa fa-shield"></i>Login</DropdownItem>
              <DropdownItem onClick={this.props.onRegister}><i className="fa fa-user"></i>Register</DropdownItem>
              </>
               : 
              <DropdownItem onClick={this.props.onLogout}><i className="fa fa-lock"></i> Logout</DropdownItem>
               }
              
              
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>        
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
