import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppFooter,
  AppHeader,
  AppBreadcrumb2 as AppBreadcrumb,
} from '@coreui/react';



// routes config
import routes from '../../routes';
import Banner from '../../Components/Banner';

//auth redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authAction from '../../store/modules/auth';

const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));


class DefaultLayout extends Component {

  // loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  loading = () => (
    <div className="sk-folding-cube">
      <div className="sk-cube1 sk-cube"></div>
      <div className="sk-cube2 sk-cube"></div>
      <div className="sk-cube4 sk-cube"></div>
      <div className="sk-cube3 sk-cube"></div>
    </div>
  )

  logout = async (e) => {
    e.preventDefault();
    const { AuthActions } = this.props;
    await AuthActions.logout();
    window.location.href = "/";
  }
  login = async (e) => {
    e.preventDefault();
    window.location.href = "#/login";
  }
  register = async (e) => {
    e.preventDefault();
    window.location.href = "#/register";
  }
  check_login = async () => {
    const { AuthActions } = this.props;
    AuthActions.checkLogin();
  }
  componentDidMount(){
    this.check_login();
  }
  
  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader onLogout={this.logout} onLogin={this.login} onRegister={this.register} isAuthenticated={this.props.isAuthenticated}/>
          </Suspense>
        </AppHeader>
        <Banner text={"안녕하세요"}/>
        <div className="app-body">
          <main className="main">
            <AppBreadcrumb appRoutes={routes} router={router}/>
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    if(route.needLogged){
                      if(this.props.isAuthenticated){
                        return route.component ? (
                          <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            render={props => (
                              <route.component {...props} />
                            )} />
                        ) : (null);
                      }
                      else{
                        
                      }
                    }else{
                      return route.component ? (
                        <Route
                          key={idx}
                          path={route.path}
                          exact={route.exact}
                          name={route.name}
                          render={props => (
                            <route.component {...props} />
                          )} />
                      ) : (null);
                    }
                  })}
                  {/* 해당 대쉬보드 */}
                  <Redirect from="/" to="/dashboard" />
                </Switch>
              </Suspense>
            </Container>
          </main>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}
export default connect(
  (state) => ({
    message: state.auth.get('message'),
    authError: state.auth.get('authError'),
    isAuthenticated: state.auth.get('isAuthenticated'),
    token: state.auth.get('token'),
  }),
  (dispatch) => ({
    AuthActions: bindActionCreators(authAction, dispatch)
  })
)(DefaultLayout);

