import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const Charts = Loadable({
  loader: () => import('./views/Charts'),
  loading: Loading,
});

const TrackBoard = Loadable({
  loader: () => import('./views/Buttons'),
  loading: Loading,
});

const Emergency = Loadable({
  loader: () => import('./views/Users'),
  loading: Loading,
});

const Results = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/welcome', name: 'Welcome', component: Charts },
  { path: '/app/board', name: 'Tracking Board', component: TrackBoard },
  { path: '/app/emergency', name: 'Emergency', component: Emergency },
  { path: '/app/results', name: 'Results', component: Results },
];

export default routes;
