import React from 'react';

const Payment = React.lazy(() => import('pages/Payment/Payment'));
const Page404 = React.lazy(() => import('pages/Page404'));
const Page500 = React.lazy(() => import('pages/Page500'));

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Payment',
    component: Payment,
  },
  {
    path: '/page-404',
    name: 'Page404',
    component: Page404,
  },
  {
    path: '/page-500',
    name: 'Page500',
    component: Page500,
  },
];

export default routes;
