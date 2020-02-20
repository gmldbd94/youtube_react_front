import React from 'react';
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', needLogged: false, component: Dashboard },
  { path: '/dashboard', name: 'Dashboard', needLogged: false, component: Dashboard },
  { path: '/users', exact: true,  name: 'Users', needLogged:true, component: Users },
  { path: '/user/:id', name: 'User Details', needLogged: false, component: User },
];

export default routes;
